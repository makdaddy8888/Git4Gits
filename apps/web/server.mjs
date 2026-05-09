/**
 * Zero npm dependencies — needs Node.js 18+ (`import` / ES modules).
 * From repo root: `node apps/web/server.mjs`
 * Or:           `cd apps/web && npm start`
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "public");
const WELCOME_TXT = path.join(__dirname, "..", "git4gits-welcome.txt");
const INDEX_HTML = path.join(PUBLIC, "index.html");
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = Number(process.env.PORT) || 3847;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

/** Keep ASCII readable inside <pre> */
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function send(res, status, type, body) {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  res.end(body);
}

function injectWelcome(htmlTemplate, ascii) {
  return htmlTemplate.replace(
    "__GIT4GITS_WELCOME_PLACEHOLDER__",
    escapeHtml(ascii),
  );
}

let cachedWelcomeResult = /** @type {string | undefined} */ (undefined);
function loadWelcomeAscii(cb) {
  if (cachedWelcomeResult !== undefined) {
    setImmediate(cb, null, cachedWelcomeResult);
    return;
  }
  fs.readFile(WELCOME_TXT, "utf8", (err, data) => {
    if (err) return cb(err, null);
    cachedWelcomeResult = data;
    cb(null, data);
  });
}

function serveIndexHtml(res) {
  fs.readFile(INDEX_HTML, "utf8", (errTpl, htmlTpl) => {
    if (errTpl) {
      send(res, 500, "text/plain", `Cannot read index.html: ${errTpl.message}\n`);
      return;
    }
    loadWelcomeAscii((errWelcome, ascii) => {
      if (errWelcome) {
        const hint = `\nTIP: Expected file at apps/git4gits-welcome.txt (resolved: ${WELCOME_TXT})\n`;
        send(
          res,
          500,
          "text/plain",
          `Cannot read Welcome ASCII: ${errWelcome.message}${hint}`,
        );
        return;
      }
      send(res, 200, MIME[".html"], injectWelcome(htmlTpl, ascii));
    });
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${HOST}`);
  const p = url.pathname;

  if (p === "/favicon.ico") {
    res.writeHead(204).end();
    return;
  }

  if (p === "/git4gits-welcome.txt") {
    return loadWelcomeAscii((err, data) => {
      if (err) {
        send(res, 500, "text/plain", `Could not read git4gits-welcome.txt\n${err.message}\n`);
        return;
      }
      send(res, 200, MIME[".txt"], data);
    });
  }

  if (p === "/" || p === "/index.html") {
    serveIndexHtml(res);
    return;
  }

  const safe = path.normalize(p).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(PUBLIC, safe);

  if (!filePath.startsWith(PUBLIC)) {
    send(res, 403, "text/plain", "Forbidden\n");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      send(res, 404, "text/plain", "Not found\n");
      return;
    }
    const ext = path.extname(filePath);
    send(res, 200, MIME[ext] || "application/octet-stream", data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`
  Git4gits preview (no npm deps; Node ${process.version})
  Local:   http://${HOST}:${PORT}
  Hint: do not open public/index.html as a file — use the URL above.
  CTRL+C to stop.
`);
});

server.on("error", (e) => {
  console.error("Server failed to start:", e.message);
  console.error("\nTry: PORT=3947 npm start\nOr check nothing else is bound to port", PORT);
  process.exit(1);
});
