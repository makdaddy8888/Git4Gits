# Learner personas & facilitation (“how do we relate to these humans?”)

Git4Gits participants are adults with **authority in their domain** and **mixed feelings about coding + AI**. The goal here is **not** to classify people rigidly—it is to **predict friction early** so facilitators scaffold **belonging, honest limits, and verifiable wins**.

Interpret “manage humans” here as **facilitate responsibly**: clarify norms, pace cognitive load, protect psychological safety, and route people to mentors—**not** surveillance, coercion, or treating humans as homogeneous “users.”

## Principles (non‑optional)

| Principle | Operational meaning |
|-----------|---------------------|
| **Agency first** | They choose meaningful micro-tasks within guardrails (“brief before code” is autonomy within structure). |
| **No contempt culture** | Never joke about Excel users, older workers, “non‑technical”—domain depth is leverage. |
| **Verification over velocity** | Reward finding AI mistakes; discourage hero merges. |
| **Transparency** | Be explicit about cohort goals, grading rubric analog (checklist), and what Git4Gits *cannot* do (legal/medical/individual therapy). |

## Lightweight archetypes (people are blends—use labels lightly)

Snapshots only: update after cohort with real quotes in `plan/notes/`.

| Archetype | You might observe | Risks | Facilitation moves |
|-----------|-------------------|-------|--------------------|
| **Analytical caretaker** | Asks calibration questions; hates shipping “probably right.” | Paralysis past week 2. | Smaller slice; insist on **two checks** max for v0; buddy review date on calendar. |
| **Eager shortcut-taker** | Pastes AI output into prod-adjacent paths fast. | Incidents, wrong numbers with confidence. | Enforce **brief + diff review ritual**; synthetic-only until checklist green; celebrate rollback. |
| **Skeptical domain chief** | “Show me the regulation / why this isn’t toy.” | Early dropout if treated as Luddite. | Pair with **compliance pack** language; role them as **reviewer of model outputs** first. |
| **Shame‑prone avoider** | Quiet in rooms; apologizes for “not being technical.” | Silent drop. | 1:1 async check-in; offer **pairing** not public cold-call; never force screen share. |
| **Status‑aware climber** | Wants visible win for leadership. | Scope creep; blames tool if win late. | Capstone **pre-agreed** one sentence of value; leadership demo optional week 4. |
| **Burnout plate‑spinner** | Joins for policy; homework slips. | Guilt spiral. | Cut async to **one artifact**; office hours not extra lectures; explicit “pause week” policy. |
| **Playful tinkerer** | Enjoys prompts; underweights tests. | Pretty demos, wrong edge cases. | Redirect energy to **property tests / gold files**; gamify bug hunts. |

## Motivation & anxiety map (quick scan)

Use in interviews and day‑1 intros (private form ok).

| Axis | Low end | High end |
|------|---------|----------|
| **Outcome pressure** | Exploratory | Boss expects visible win |
| **Math / logic comfort** | Avoids formulas | Builds models for fun |
| **Public learning comfort** | Terrified of looking dumb | Happy to narrate screen |
| **Trust in vendors** | Assumes cloud = leak | Assumes Microsoft = safe |
| **Agency at work** | Needs 3 approvals | Can spin sandbox VM |

**Rule:** design for **high pressure + low public comfort** as your default stress case.

## Cohort composition heuristics

- Aim for **≥2** of each **gender / career-stage** band if you can—reduces stereotype threat in rooms dominated by young dev energy.  
- Pair **shortcut-taker** shadow energy with **caretaker** buddy when psychologically safe—don’t announce pairings as personality labels.  
- Cap **visible exec sponsors** in live sessions if their presence silences honest failure talk.

## Facilitation moves that work across archetypes

1. **Same workflow for everyone** — brief → plan → implement → verify; archetypes differ in *where* they stall, not in whether structure helps.  
2. **Name the failure modes** — “AI confident & wrong” is normal; show one live.  
3. **Time-box heroics** — “If stuck >30 min on environment, stop and ping buddy.”  
4. **Opt-in reveals** — “Who will share a bug they caught?” not random cold call.  
5. **Close loops** — end each live block with **one sentence each**: learned / still blocked / next step.

## What *not* to do

- Don’t **diagnose** personality disorders or mental health from learning friction—**refer** to EAP/HR when distress is clinical.  
- Don’t use **competitive leaderboards** on early cohorts; they amplify anxiety and shortcut behavior.  
- Don’t treat **low prompt fluency** as low intelligence—often inverse of healthy skepticism.

## Artifacts to capture real humans (not imaginary ones)

- Interview additions: see [`interview-script.md`](interview-script.md) **Participant style (optional ~5 min)**.  
- After session 01: short **cohort profile** note in `plan/notes/` — distribution of anxieties, not names.  
- Evolve archetypes; if the table above stops matching reality, edit this file.

## Related

- Discovery interview: [`interview-script.md`](interview-script.md)  
- Week 1 flow: [`pilot-week-1-checklist.md`](pilot-week-1-checklist.md)  
- Product intent: [`product-shape.md`](product-shape.md)
