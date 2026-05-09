# Product shape — Git4Gits (how the pieces relate)

When you wonder whether this should be **a platform**, **Copilot-guided**, or **just an ideas catcher**, treat those as **layers in time**, not three unrelated products.

## Core job (one sentence)

**Git4Gits helps facilitators capture, refine, and ship ideas that turn SMEs into capable partners in AI-assisted coding**—starting with mindset, workflows, and verification—not only syntax.

Everything below serves that job.

## What you described — mapped

| Idea | Role in Git4Gits |
|------|------------------|
| **Facilitation** | Humans run cohorts/session 01; templates encode *how* to teach. |
| **Capturing ideas** | Repo + structured docs (patterns, pitfalls, curricula fragments) become the living backlog—**ideas catcher** first. |
| **Self-guided + GitHub Copilot** | Optional **Copilot lab track**: same workflows, toolchain pinned to GH Copilot (when org-standard). |
| **Platform** | **Later**: only if URL login, cohort management, telemetry, marketplace of modules, etc. outperform a repo + LMS you already pay for. |

## Recommended ladder (lowest risk → scale)

```
1. Ideas + facilitation kit (this repo) ← you are here
2. Add curated “patterns” library (markdown + examples)
3. Add optional Copilot-specific exercises / checklist overlays
4. Platform only after repeat buyers + repeatable ops pain
```

**Rule of thumb:** If it fits in Markdown, a spreadsheet of learners, and a calendar invite, **do not build a platform yet**.

## What “ideas catcher” concretely means here

Use the repo so ideas are **actionable**:

- **`plan/notes/`** — raw session/brainstorm logs (messy OK).
- **New files under `plan/ideas/`** — one idea per file: problem, audience, proposed exercise, status (spike / pilot / adopted).
- **`templates/`** — only promote ideas that passed a **pilot** (otherwise template sprawl kills learners).

## Copilot vs tool-agnostic

| Stance | When |
|--------|------|
| **Tool-agnostic** (default) | Unknown org stack; teach verification and handoffs. |
| **Copilot track** | Org has **GitHub Copilot** licensed and approved; you want sharper UI-level exercises. |

Copilot-specific content **adds variants** (“Try in VS Code Copilot Chat…”), not a separate philosophy.

## Decision trigger: build a real platform?

Consider a web app **only if** ≥3 recur:

| Signal | Builds pressure for platform |
|--------|-------------------------------|
| Cohort scheduling / payments | Coordinators drowning |
| SSO + compliance attestations | Enterprise procurement blocks repo-only |
| Rich analytics dashboard | Sponsor demands granular proof |
| Versioned curricula at scale | Editors need branching/roles beyond Git |

Otherwise: repo + facilitator + periodic export to PDF/slides beats maintenance cost.

## One-line product vision (paste into charter)

Git4Gits is a **facilitation system and idea pipeline** that helps organizations grow **subject-matter experts who code with AI**—starting with captures and pilots, optionally specializing for **GitHub Copilot**, and evolving to heavier tooling only when operations prove it.

## Next edits you might make

- In [`charter-v0.md`](charter-v0.md): set **primary outcome** = “ideas captured → piloted exercises → repeatable cohort.”
- Add your first loose idea file: `plan/ideas/example-meaningful-name.md` (copy a heading structure from a note in `plan/notes/`).

## Related repo docs

- Vertical coverage + fit stars: [`domains.md`](domains.md)
- Research sources + ranking caveats: [`research-ai-disruption-notes.md`](research-ai-disruption-notes.md)
- Jurisdiction desk workflow + precedent/law framing: [`compliance-research-agent.md`](compliance-research-agent.md)
- Learner psychology + facilitation cues: [`learner-personas-and-facilitation.md`](learner-personas-and-facilitation.md)
