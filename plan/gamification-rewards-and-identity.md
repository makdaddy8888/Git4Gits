# Gamification, identity (nickname + persona), rewards & safe leaderboards

Complements [`platform-product-vision.md`](platform-product-vision.md) and [`learner-personas-and-facilitation.md`](learner-personas-and-facilitation.md).

## Design tension (acknowledge it)

| Pull | Risk |
|------|------|
| Motivation, delight, social proof | Anxiety, shame, **rewarding reckless speed** with AI |
| Leaderboards | Ranking humans on the wrong axis |

**Resolution:** gameify **verification, reflection, and finishing**—not **velocity of unreviewed output**. Make competition **opt‑in** or **squad-based**; never force public rank.

---

## 1. Learner identity: **nickname + play persona**

### Nickname

- **Purpose:** low-stakes belonging, privacy (real name optional on public surfaces).  
- **Rules:** moderatable profanity filter; max length; no impersonation of employers/clients.  
- **Display:** cohort views, optional leaderboard, certificates (“Alex ‘RedlineRaven’ Chen” or nickname only).

### Play persona (≠ psych profile, ≠ [`plan/personas/`](../personas/) synthetic SMEs)

**Play personas** are **flavor + hint text**—optional, swappable, narrated as **guild roles** for the learning game:

| Play persona | Flavor | Gentle hint to learner | XP emphasis (see §3) |
|--------------|--------|-------------------------|---------------------|
| **Cartographer** | Maps unknowns before building | Extra prompts for context & scope | Framing / brief quality |
| **Sentinel** | Guards quality & red lines | Checklist & diff discipline | Verification & safety |
| **Forge** | Ships small with fire | Time-box + “done is done” | Completion + tests |
| **Archivist** | Makes work legible tomorrow | Docs, handoff, reproducibility | README / runbook clarity |
| **Bridge** | Translates domain ↔ engineering | Vocabulary cards, buddy sync | Stakeholder articulation |
| **Sceptic** (positive) | Stress-tests AI output | Hunt-the-hallucination drills | Bugs caught in review |

**Privacy:** do **not** tie play persona to HR performance systems; it’s a **learning UX** layer. Facilitators may use [`learner-personas-and-facilitation.md`](learner-personas-and-facilitation.md) archetypes privately—orthogonal to the user’s chosen **play** persona.

Artifact: [`templates/learner-display-identity.md`](../templates/learner-display-identity.md).

---

## 2. Leaderboards (if we ship them)

### Default posture

- **Off by default** for whole cohort; learner **opts in** to “show my rank.”  
- Prefer **squads** (3–5 learners) competing on **team** metrics (avg reflection completion, badge count).  
- **Seasonal reset** or **per-cohort** boards—no permanent “loser” backlog.

### Metrics that are **allowed** (examples)

| Metric | Why it’s OK |
|--------|--------------|
| **Verification challenges passed** | Reinforces habits |
| **Formative reflections submitted** (short) | Retrieval / honesty |
| **Capstone checklist items green** | Outcome quality |
| **“Bug hunt”** submissions (AI output caught wrong) | Aligns with pedagogy |
| **Squad: % on track** toward idea portfolio milestones | Social, not lone ranking |

### Metrics that are **forbidden** on primary boards

- Lines of code / Copilot acceptance rate / time-to-first-merge without review  
- Anything that leaks **sensitive** throughput (client names, $)

### Shadow metrics (facilitator-only)

- Engagement risk (ghosting) — **not** shown to peers

---

## 3. Reward system (stackable)

Mix **intrinsic** (mastery) and **extrinsic** (badges, flair, access).

| Tier | Reward | Trigger (examples) |
|------|--------|---------------------|
| Micro | Confetti + sound (subtle), streak chip | First brief submitted |
| Badge | SVG badge on profile | “Brief Before Code”, “Two-Check Club”, “Hallucination Hunter” |
| Unlock | Optional advanced lab module | Capstone dry-run pass |
| Social | Facilitator shout-out in cohort channel | Peer-nominated helpful review |
| Credential | PDF / shareable **completion** cert | Full program + rubric pass—**not** “fastest” |
| Cosmetic | Avatar border, title under nickname | Seasonal challenge |

**Enterprise note:** some orgs disallow external credentials—offer **private** export only.

---

## 4. Anti-patterns (explicit)

- Punishing **slow** careful learners on public boards  
- Tying rewards to **unchecked** AI output volume  
- Showing **real names** without consent on any competitive surface  
- Childish taunts or demotion language

---

## 5. Product backlog hooks (for `apps/`)

- `learner_display_name` (nickname), `play_persona_id`, `leaderboard_opt_in`, `squad_id`  
- `badge_grants[]`, `xp_ledger` with **category** = verification / reflection / capstone (audit-friendly)  
- Moderation queue for nicknames  
- Config flag: `org_disable_leaderboards`

---

## Related

- Idea planning after training: [`idea-portfolio-ladder.md`](idea-portfolio-ladder.md)  
- Portfolio worksheet: [`templates/idea-portfolio-template.md`](../templates/idea-portfolio-template.md)
