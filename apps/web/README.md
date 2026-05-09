# Git4Gits web preview — BBS welcome

Zero npm dependencies.

## Run locally

From this directory (`apps/web/`):

```bash
npm start
```

Open **http://localhost:3847** (or `PORT=5000 npm start`).

Uses plain **Node HTTP** (`server.mjs`): serves [`public/index.html`](public/index.html), [`welcome-bbs.txt`](../welcome-bbs.txt), scanline + phosphor/amber CRT CSS.
