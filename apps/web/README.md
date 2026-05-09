# Git4Gits web preview — welcome screen

Zero npm dependencies.

## Run locally

From this directory (`apps/web/`):

```bash
npm start
```

Open **http://localhost:3847** (or `PORT=5000 npm start`).

Uses plain **Node HTTP** (`server.mjs`): serves [`public/index.html`](public/index.html), [`git4gits-welcome.txt`](../git4gits-welcome.txt), CRT styling, and a **main-terminal menu** (keys `1`–`3`) with an **Avi expert-track** intake that builds a paste-ready draft plan (saved in `sessionStorage` in the browser).
