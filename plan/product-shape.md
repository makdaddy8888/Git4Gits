# Product shape — Git4Gits (how the pieces relate)

**Decision:** Git4Gits **is** a **learning platform** product—purpose-built for SMEs mastering **structured AI-assisted coding**, not generic LMS shelfware.

This repo carries **definitions, curricula, workflows, personas, jurisdictional scaffolding, intelligence design, and UX strategy** → see **[`platform-product-vision.md`](platform-product-vision.md)**. Application implementations can live under [`apps/README.md`](../apps/README.md) or a sibling service repo.

Historical elements below—**ideas catcher**, **Copilot variants**, Markdown-first authoring—remain **capabilities inside** that platform vision, delivered in phased releases—not “defer platform forever.”

## Core job (one sentence)

**Git4Gits is a learning platform that helps subject-matter experts build rigor with AI-assisted coding**—verification, briefing, jurisdictional realism, respectful intake—many targets **meet the superpower first** before they see structure; UX and pedagogy honour both—[`messaging-unaware-learners.md`](messaging-unaware-learners.md).

## What ships together

| Capability | Role |
|------------|------|
| **Platform shell** | Auth, enrolment, modules/path, artefacts, submissions, rubric-backed scoring (MVP)—[`platform-product-vision.md`](platform-product-vision.md) |
| **Curriculum backbone** | This repo (`templates/`, cohort runbooks)—optionally synced or rendered inside the app |
| **Intelligence wedge** | Intake tailoring, elite prep packs, lawful desk research scaffolding—[`intelligence-system-design.md`](intelligence-system-design.md) |
| **GitHub Copilot / tool tracks** | Configurable modality—same pedagogical skeleton |
| **Facilitator ergonomics** | Live remains central early; tooling catches grading + insight |

## Phased roadmap (risk-aware, inside one platform bet)

```
1. Spec + runway content in Git (today) ─── proves pedagogy you’ll encode into product
2. MVP web product: learners complete path + evidences → rubric ─── repeatable without hero facilitators drowning
3. Intelligence features (prep brief QA, versioning, richer analytics)
4. Enterprise hardening (SSO, attestations, data residency stance)
```

**Rule:** still **borrow** undifferentiated stack (managed auth, infra, transactional email)—build where **pedagogy & SME calibration** shines.

## What “ideas catcher” still means (inside platform)

Operational discipline while designing:

- **`plan/notes/`** — exploratory logs  
- **`plan/ideas/`** — promote only pilot-proven drills into curriculum tickets  
- **PRs against `templates/`** — versioning pedagogy moves before UX surfaces them  

## Copilot vs tool-agnostic

| Stance | When |
|--------|------|
| **Tool-agnostic baseline** | Default learning outcomes |
| **Copilot track overlays** | Enterprise buyers standardise on GH Copilot—toggle in LMS |

Add variants in content model, **not duplicate ontologies.**

## Decision trigger (legacy table — repurposed)

The **pressure** checklist below now scopes **priorities**, not whether to ship a platform—we already shipped that decision:

| Signal | Product response |
|--------|------------------|
| Cohort churn / ops pain | Enrol automation, reminders inside MVP |
| Enterprise procurement blocks | SSO, audit exports backlog |
| Proof demands | Transparent rubrics + facilitator dashboard analytics |
| Curriculum editors > Git comfort | In-app CMS or MDX pipeline later |

## One-line product vision (paste into charter)

Git4Gits is a **learning platform** that helps organizations grow **verification-first SME mastery of AI-assisted coding**, with jurisdictional seriousness, transparent rubrics, and optional deep integration paths like **GitHub Copilot**.

## Next edits you might make

- In [`charter-v0.md`](charter-v0.md): outcome = **MVP platform scope** (modules + rubric) or pilot bridge if pre-product.
- Scaffold first app slice under [`apps/README.md`](../apps/README.md) when engineering starts.
- Add your first loose idea file: `plan/ideas/example-meaningful-name.md`.

## Related repo docs

- Learning **platform** vision (MVP capabilities, users, non-goals): [`platform-product-vision.md`](platform-product-vision.md)
- Vertical coverage + fit stars: [`domains.md`](domains.md)
- Research sources + ranking caveats: [`research-ai-disruption-notes.md`](research-ai-disruption-notes.md)
- Jurisdiction desk workflow + precedent/law framing: [`compliance-research-agent.md`](compliance-research-agent.md)
- Learner psychology + facilitation cues: [`learner-personas-and-facilitation.md`](learner-personas-and-facilitation.md)
- Per-learner 1:1 (domain, industry, country, passion): [`learner-intake-interview.md`](learner-intake-interview.md)
- High-stakes conversational prep (agents → brief → sharp questions): [`conversation-intelligence-prep.md`](conversation-intelligence-prep.md)
- Finding + building **intelligence** over time (pipeline, stores, roadmap): [`intelligence-system-design.md`](intelligence-system-design.md)
- LMS learner UX, rubrics & scoring: [`lms-assessment-and-experience.md`](lms-assessment-and-experience.md)
- Gamification + idea portfolio: [`gamification-rewards-and-identity.md`](gamification-rewards-and-identity.md), [`idea-portfolio-ladder.md`](idea-portfolio-ladder.md)
