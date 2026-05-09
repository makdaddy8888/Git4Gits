# Start here — Git4Gits v0 defaults

These are **provisional decisions** chosen so work can begin. Revisit after **Week 3** of pilot (or sooner if sponsor goals conflict).

**Unsure platform vs Copilot vs “ideas catcher”?** Read [`product-shape.md`](product-shape.md)—they stack: **ideas + facilitation kit first**, optional **Copilot track**, **platform last** only if recurring pain demands it.

**Many industries at once:** use [`domains.md`](domains.md) for the full vertical map and [`research-ai-disruption-notes.md`](research-ai-disruption-notes.md) for evidence. **Discovery** should **rotate interviews** across sectors; **pilots** still run one reusable playbook with sponsor-specific data rules.

## Decisions locked for v0

| Topic | Decision | Why |
|-------|----------|-----|
| **Primary customer** | The **individual SME learner** | Without learner confidence and a first win, nothing else compounds. Managers get a secondary metric (capstone checklist). |
| **First vertical** | **Tabular / “small repeatable task” SMEs** — people who wrangle spreadsheets, reports, CSVs, or recurrent manual steps | Broad enough to recruit pilots; constrained enough to teach verification (inputs/outputs match reality). |
| **Delivery** | **3-week micro-cohort** (1 live anchor per week ~90 min + async homework ~2–3 hrs/week) then package into async | Cohort exposes language and pacing; async scales later without guessing. |
| **North Star** | Learner completes **one capstone** that passes [`templates/capstone-checklist.md`](../templates/capstone-checklist.md) | Observable; forces specification + verification, not vibes. |
| **Tool stance** | Teach **workflow** (brief → plan → implement → verify) first; toolchain = **whatever your org allows** (Cursor, Copilot, ChatGPT+jupyter, etc.) with optional “lab track” once org standard is known | Avoids stall while IT picks winners. |

## This week (do in order)

1. **Fill** [`charter-v0.md`](charter-v0.md) blanks (15 min).
2. **Book** ≥5 SME chats using [`interview-script.md`](interview-script.md).
3. **Schedule** one `pilot-session-01` slot with 3 volunteers (see checklist).
4. **Optional**: invite **one eng buddy** to observe session 01 and sanity-check realism.

## When to revise defaults

| Signal | Adjustment |
|--------|-------------|
| Regulated data everywhere | Pilot uses **only** bundled synthetic datasets until infosec signs off samples. |
| No Git adoption | Teach “review bundle” handoff week 1; Git week 3 or post-pilot. |
| Sponsor cares only about org risk | Add explicit **risk module** upfront; keep learner North Star but add gates for prod access. |

## After pilot cohort

- Decide: **narrow vertical** (e.g. research ops only) vs **duplicate cohort** unchanged.
- Turn week materials into **`v1-async` outline** — do not LMS-shop before one cohort completes.
