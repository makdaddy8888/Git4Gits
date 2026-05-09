# LMS, learner experience & scoring — strategy (Git4Gits)

## Goals (tension to manage)

| Pull | Push |
|------|------|
| **Visually impactful** — feels premium, not “wiki homework” | **Pedagogically sound** — clarity, practice, feedback, authentic tasks |
| **Observable scoring** — sponsors trust outcomes | **Low shame** — avoid surveillance vibes and leaderboard harm |

Git4Gits should **compose** those with **thin custom UI** where it matters (capstone showcase, rubric transparency), not boil the ocean on LMS features.

---

## Do we build an LMS from scratch?

**Default: no.**

A real LMS is **auth, enrolment, progress, assessments, reporting, accessibility, locales, integrations, uptime, SOC2 spiral** — a product company, not a curriculum sidecar. Only build bespoke if:

- LMS **is** the commercial product thesis, **and**
- You have **multi-year** eng + design + compliance capacity.

For Git4Gits today, **scratch LMS = distraction** from proving cohort outcomes and content.

---

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

**Visual impact** lives in the **top layer** (design system for decks + handouts + optional marketing site), not inside database-driven courseware on day one.

---

## Picking an existing framework / platform (when you need “LMS-like”)

Choose **one primary bucket** by buyer:

| Situation | Direction | Why |
|-----------|-----------|-----|
| **Enterprise sells to learning org** | **Their** LMS (SuccessFactors, Workday Learning, Cornerstone, Docebo, etc.) — export **SCORM/xAPI** packages or link out | Procurement already decided |
| **SMB / mid-market pilot** | **TalentLMS**, **Thrive**, **Moodle** (hosted), **360Learning** (collab tilt) | Fast start, decent branding |
| **Founder-led / community** | **Circle**, **Mighty**, **Skool**-class + repo link | Social + simple modules; weak on deep rubrics — pair with external rubric |
| **Open + control** | **Moodle** or **Open edX** (heavy) | Engineering tax |

**Git4Gits-specific fit:** your **differentiator** is **methods + rubrics + facilitator skill** — the LMS is **plumbing** for enrolment, reminders, optional quizzes, and SCORM export.

**Rule:** If a platform **cannot** show learners the **full rubric before** the task, keep summative scoring **outside** it (Google Sheet with version control, or Notion database) until you switch tools.

---

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

## Making it “visually impactful” without a custom LMS

1. **One design system** for participant-facing assets: color, type, cover page, section dividers—reuse every cohort.  
2. **Hero module** artefact per cohort (one polished diagram of **brief → verify** loop).  
3. Optional **static site** (Astro/Vite + MDX rendering your `plan/` excerpts) as **marketing + syllabus** — auth-free v1.  
4. **Capstone demo format** templated (title slide, constraints, acceptance tests, demo, risks)—reads “executive” even if codebase is tiny.

---

## Phased roadmap (honest sequencing)

| Phase | Experience | Assessment | Platforms |
|-------|-------------|------------|-----------|
| **Now–pilot v1** | Live + Slack/Teams + designed PDF/deck template | Markdown rubric + facilitator sign-off | None or **TalentLMS free tier** for reminders |
| **v2 repeat buyers** | Branded learner portal (**static site** or **SMB LMS**) | Rubric CSV export + xAPI someday | Pick **one** SMB LMS or customer-mandated |
| **Scale** | Integrate enrolment API | LRS-lite for completion events | Negotiate SCORM packaging |

---

## Decision summary

- **Scratch LMS:** only if LMS is your core VC-scale bet.  
- **Best default for Git4Gits:** **Git repo + facilitation + branded assets + rigorous rubrics** → **borrow** LMS features from an existing vendor when enrolment/reporting pain exceeds ~2 hours/week of manual ops.

## Related artefacts

- Capstone scoring: [`../templates/capstone-checklist.md`](../templates/capstone-checklist.md)  
- Intake → personalization: [`learner-intake-two-phase.md`](learner-intake-two-phase.md), [`learner-profile-template.md`](../templates/learner-profile-template.md)  
- Personas / stress personas: [`personas/README.md`](personas/README.md)
