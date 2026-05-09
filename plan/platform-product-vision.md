# Git4Gits — learning platform product vision

**Product:** Git4Gits is a **learning platform** that turns SMEs into rigorous partners in **AI-assisted coding**—not a slide deck bolted onto a spreadsheet.

This repo holds **specs, curricula patterns, onboarding flows, personas, jurisprudence hooks, rubrics**, and eventual **generated content**. Application code may live beside it (e.g. `apps/` or separate repo)—this document is source-of-truth for **what we are building**.

## Problem we own

Experts feel a **coding-AI superpower** early; without **structure, jurisdiction awareness, and verification habits**, gains don’t compound and risk grows. Existing LMS products **genericize** the experience—we **differentiate on pedagogy + intelligence + visuals** tuned to SMEs.

## Primary users

| Actor | Needs |
|-------|--------|
| **Learner (SME)** | Clear path; rubric-visible tasks; respectful intake; capstone authenticity; accessibility |
| **Facilitator** | Cohort health; grading workflow; prep brief intel; escalation |
| **Org admin / sponsor** | Enrolment, completion, competency evidence export, SSO eventually |
| **Git4Gits operator** | Content versioning, experimentation, instrumentation |

## Product pillars (differentiation)

1. **Two-phase intake → tailored path** ([`learner-intake-two-phase.md`](learner-intake-two-phase.md), [`learner-intake-form.md`](../templates/learner-intake-form.md)).  
2. **Jurisdiction- and sector-aware overlays** ([`compliance-research-agent.md`](compliance-research-agent.md); packs in [`legal-packs/`](legal-packs/)).  
3. **Rubric-first assessment** ([`templates/capstone-checklist.md`](../templates/capstone-checklist.md); transparent formative gates). See [`lms-assessment-and-experience.md`](lms-assessment-and-experience.md).  
4. **Conversation / prep intelligence** (elite paths) [`conversation-intelligence-prep.md`](conversation-intelligence-prep.md); system view [`intelligence-system-design.md`](intelligence-system-design.md).  
5. **Distinctive UX** (“superpower x safety harness”) aligned with [`messaging-unaware-learners.md`](messaging-unaware-learners.md)—not beige SCORM clones.  
6. **Motivation layer** — nickname, optional **play persona**, badges, opt‑in **safe** leaderboards, squads — [`gamification-rewards-and-identity.md`](gamification-rewards-and-identity.md).  
7. **Idea portfolio studio** — post‑foundation: **1 small · several medium · 1 large** + effort budgeting — [`idea-portfolio-ladder.md`](idea-portfolio-ladder.md), [`templates/idea-portfolio-template.md`](../templates/idea-portfolio-template.md).

## Platform capabilities (release-ordered sketch)

### MVP (prove learning + grading loop)

- Auth (managed IdP acceptable), org/cohort enrolment  
- Lesson/module shell (Markdown or MDX from Git **or** CMS), progress  
- Artefact submission (problem brief → capstone)  
- Mentor rubric UI mirroring **`capstone-checklist`**; pass/partial/requires revision  
- Baseline learner profile persisted (intake fields)  
- Learner **nickname** + optional **play persona**; moderation primitives — [`gamification-rewards-and-identity.md`](gamification-rewards-and-identity.md)  
- Guided **idea portfolio** worksheet surfaced (may start read‑only templates → in‑app save) — [`idea-portfolio-ladder.md`](idea-portfolio-ladder.md)

### V1 (+ intelligence wedge)

- Part 2 question generation flow (guarded prompts; human QA step for elite tier)  
- Prep brief artefacts linked per learner/event  
- Badge grants + optional **opt‑in / squad leaderboards** (verification‑oriented metrics only) — [`gamification-rewards-and-identity.md`](gamification-rewards-and-identity.md)  
- Portfolio **commit gates** tied to formative progress (unlock L1 planning after S1 shipped) — [`idea-portfolio-ladder.md`](idea-portfolio-ladder.md)  
- Lightweight analytics (time on task optional; privacy-first defaults)  

### V2 (+ enterprise)

- SSO (SAML/OIDC), data residency stance, audit exports  
- SCORM/xAPI outbound if procurement demands  
- Tenant admin for model/tool allowlists per org  

**Buy / rent** undifferentiated heavy lifting: authentication, payments, email, transactional DB hosting, CDN, optionally video—not auth protocol cosplay unless strategic.

## Content strategy

Keep **canonical pedagogy + rubrics in Git** (reviewable PRs); platform **renders & tracks** completions. Optionally sync from repo to CMS on merge.

## Non-goals for v0

| Non-goal | Why |
|----------|-----|
| General-purpose LMS parity | Narrow wins on SME+AI use case |
| Legal advice embedded in UX | Orientation + escalate to counsel only |
| Forced public leaderboards on **unsafe metrics** | See [`gamification-rewards-and-identity.md`](gamification-rewards-and-identity.md) — opt‑in + verification‑first |

## Links

- Messaging & arcs: [`product-shape.md`](product-shape.md), [`messaging-unaware-learners.md`](messaging-unaware-learners.md)  
- Pedagogy/scoring/visuals: [`lms-assessment-and-experience.md`](lms-assessment-and-experience.md)  
- Gamification & identity: [`gamification-rewards-and-identity.md`](gamification-rewards-and-identity.md)  
- Idea portfolio: [`idea-portfolio-ladder.md`](idea-portfolio-ladder.md)  
- Domains corpus: [`domains.md`](domains.md)
