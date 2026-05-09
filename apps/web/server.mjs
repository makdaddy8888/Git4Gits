/**
 * Zero-dependency static preview: open http://localhost:3847 after `npm start`.
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "public");
const WELCOME_TXT = path.join(__dirname, "..", "git4gits-welcome.txt");
const PORT = Number(process.env.PORT) || 3847;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, type, body) {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://127.0.0.1`);
  let p = url.pathname;

  if (p === "/git4gits-welcome.txt") {
    return fs.readFile(WELCOME_TXT, "utf8", (err, data) => {
      if (err) {
        send(res, 500, "text/plain", "Could not read git4gits-welcome.txt\n");
        return;
      }
      send(res, 200, MIME[".txt"], data);
    });
  }

  if (p === "/" || p === "") p = "/index.html";

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

server.listen(PORT, () => {
  console.log(`
  Git4Gits preview running
  -> http://localhost:${PORT}

  CTRL+C to stop
`);
});
