# `apps/` — application code (placeholder)

Learning platform implementations (web app, APIs) can live **here** or in a sibling repository keyed to **[`plan/platform-product-vision.md`](../plan/platform-product-vision.md)**.

## BBS-style welcome (ASCII)

Retro terminal splash for demos or first paint in the app shell:

- [`welcome-bbs.txt`](welcome-bbs.txt) — `cat welcome-bbs.txt` in a monospace terminal (80 cols ideal).

## Browser preview (Node, zero dependencies)

```bash
cd apps/web && npm start
# http://localhost:3847
```

Details: [`web/README.md`](web/README.md).

Future `api/` or monorepo packages can live alongside `web/`.

