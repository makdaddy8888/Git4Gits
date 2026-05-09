# LMS, learner experience & scoring — strategy (Git4Gits learning platform)

Git4Gits **is** building a **learning platform** (see [`platform-product-vision.md`](platform-product-vision.md)). Pedagogy, rubrics, visual impact, and assessment design **are product features**, not a markdown side project.

## Goals (tension to manage)

| Pull | Push |
|------|------|
| **Visually impactful** — feels premium, not “wiki homework” | **Pedagogically sound** — clarity, practice, feedback, authentic tasks |
| **Observable scoring** — sponsors trust outcomes | **Low shame** — avoid surveillance vibes and leaderboard harm |

Git4Gits should **ship** these as **product surfaces** (learner app, facilitator console), not only PDFs—while **renting** commodity infrastructure (auth, email, video, DB).

---

## What to build vs rent (platform thesis)

| Layer | Build bespoke? | Notes |
|-------|------------------|-------|
| **Learner + facilitator UX** for SME / AI-coding pedagogy | **Yes** | Differentiation + visual impact |
| **Rubric + evidence pipeline** | **Yes** | Mirror [`capstone-checklist.md`](../templates/capstone-checklist.md) |
| **Intake → tailored path** | **Yes** | [`learner-intake-two-phase.md`](learner-intake-two-phase.md) |
| **Auth / billing / email / raw video** | **Rent** | Clerk, WorkOS, Stripe, Resend, Mux, etc. |
| **White-label generic SCORM** | **Defer** | Add when enterprise procurement requires export |

You are **not** obliged to implement low-level protocols—**you are** obliged to own pedagogy, trust, and calibration UX.

---

## ~~Self-hosted generic LMS?~~ Integrations instead

If a buyer already has **their** LMS, ship **SCORM/xAPI exports** or **deep links** from that vision doc backlog—**primary** experience remains Git4Gits for the learning loop you care about.

## Recommended architecture: **content spine + thin experience layer + assessment engine (rubric)**

```
┌─────────────────────────────────────────────────────────────┐
│  Brand / visual layer (slides, PDF, optional static site)│
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  Live facilitation + comms (Zoom/Meet + Teams/Slack)        │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  Authoritative content + version control (this Git repo)     │
│  templates/, plan/, rubrics in Markdown                      │
└───────────────────────────┬─────────────────────────────────┘
                            │
        ┌───────────────────┴───────────────────┐
        ▼                                       ▼
┌───────────────┐                    ┌────────────────────┐
│ Formative     │                    │ Summative           │
│ micro-checks  │                    │ capstone rubric     │
│ (tool below)  │                    │ [`capstone-checklist`](../templates/capstone-checklist.md) │
└───────────────┘                    └────────────────────┘
```

**Visual impact** ships as **product UI** (design system, motion, typography) and optional **marketing site**; authored modules can be **Git-synced Markdown/MDX** rendered in-app.

---

## Picking an existing framework / platform (integrations & accelerators)

| Situation | Direction | Why |
|-----------|-----------|-----|
| **Git4Gits as primary product** | **Custom app** + managed services (see [`platform-product-vision.md`](platform-product-vision.md)) | Pedagogy is the IP |
| **Enterprise buyer mandates their LMS** | **SCORM/xAPI package** or LTI-style handoff | Procurement |
| **Need fast operational stopgap pre-MVP** | Temporary **TalentLMS / Moodle** for scheduling | Throwaway or sync only |
| **Community beta** | Lightweight social layer + manual rubric | Speed |

**Rule:** In-product, learners must see the **full rubric before** summative work. If an external LMS can’t, keep authoritative scoring in Git4Gits and **sync** a summary grade only.

## Educational best practices (what “good” looks like)

### 1. Outcomes first (you already started)

- Capstone = **authentic assessment** (artifact + explanation + checks).  
- Keep [`templates/capstone-checklist.md`](../templates/capstone-checklist.md) as **single source of truth** for pass/fail; extend with **sub-scores** if sponsors need numbers.

### 2. **Rubric transparency** (reduces anxiety, raises quality)

Publish: criteria × levels (e.g. Not yet / Meets / Exceeds) **before** Week 1 ends. No hidden grading.

### 3. **Formative → summative** rhythm

| Week | Formative (low stakes) | Summative |
|------|------------------------|-----------|
| 1 | Problem brief peer review | — |
| 2 | Mini “AI gotcha” diff review | — |
| 3 | Checklist dry run with buddy | Capstone pass |

Formative items should be **fast feedback**, not **numeric leaderboards**.

### 4. **Retrieval & reflection** (lightweight)

Short **exit ticket** after each live: one sentence “what I’ll verify next time” beats a 20-question quiz early on.

### 5. **Scoring philosophy**

- Prefer **competency bands** over **opaque points**.  
- If you need a number for HR: map bands → 1–4 **after** qualitative rubric, not before.  
- **Never** score “speed of Copilot usage” as primary metric—drives unsafe behavior.

### 6. **Accessibility & inclusion**

WCAG-minded handouts, captions on async video, time-zone explicit scheduling—LMS choice should not regress this.

---

## Visual impact (inside Git4Gits the platform)

1. **Design system tokens** embedded learner & facilitator apps—not decks bolted on later only  
2. **Hero onboarding artefact**: singular polished explanation brief→verify loop  
3. Optional **marketing/syllabus shell** sharing same tokens (MDX/Git sync optional)  
4. **Capstone review layout** optimised for evidence + skim (executive trust)

---

## Phased roadmap (platform build)

| Phase | Experience | Assessment | Platforms |
|-------|------------|------------|-----------|
| **Seed (now)** | Markdown runbooks / pilot facilitation | Repo rubrics | Proves pedagogy (`plan/`, `templates/`) |
| **MVP** | Auth enrolment learner path artefacts upload | Interactive capstone checklist UI | bespoke web app + SaaS infra |
| **V1 intelligence** | Prep-brief flows elite tier | analytics privacy-first | services per [`intelligence-system-design.md`](intelligence-system-design.md) |
| **Enterprise** | SSO residency audit export | advanced reporting | SCORM/xAPI optional |

---

## Decision summary

- **Product = learning platform** → **own** pedagogy UX + rubric engine; **rent** auth/payments/video plumbing.  
- **Curriculum** can stay **Git-first** (PR-reviewable), rendered into the app.  
- **External LMS** = integration path, not home base, unless buyer contractually forces it.

## Related artefacts

- Platform vision: [`platform-product-vision.md`](platform-product-vision.md)  
- Capstone scoring: [`../templates/capstone-checklist.md`](../templates/capstone-checklist.md)  
- Intake → personalization: [`learner-intake-two-phase.md`](learner-intake-two-phase.md), [`learner-profile-template.md`](../templates/learner-profile-template.md)  
- Personas / stress personas: [`personas/README.md`](personas/README.md)
