# Conversation intelligence — per-person depth without wasting elite time

**Problem:** With a **senior partner at a top Australian law firm**, generic intake questions signal you did not prepare. They will politely exit.  
**Move:** Separate **cheap generic steps** from **high-signal dialogue** by doing **scoped async research first**, then arriving with **fewer, sharper questions** that reference *their practice reality*—never fake intimacy or private facts.

This is **not** “stalking lite.” It is **consented, bounded desk research** on **public/corp-approved** signals + synthesizing Git4Gits expertise (structured AI coding habits) into **conversation hooks**.

## What actually creates “powerful questions”

| Ingredient | Bad example | Stronger pattern |
|------------|-------------|---------------------|
| **Specificity** | “Tell me about AI at your firm?” | “**Contract review workflows** touching **Australian privilege + GenAI governance** — where does human sign-off attach today?” |
| **Leverage their language** | Jargon soup | Borrow **titles, practice group names**, **risk frames** **only** from what they volunteered or appears on authorized public bios. |
| **Intellectual humility** | Pretend you mastered their ethics rules | Anchor in **patterns** (“brief before code”), invite **them** as authority on professional duties. |

Agents help you **assemble context and drafts**—**humans approve** wording so nothing breaches confidentiality or dignity.

---

## Efficient per-person workflow (recommended)

```
1. Triage respondent tier (automatable from calendar field or form)
       ↓
2. SHORT async form (90 sec) → role, country, firm (optional), consent checkboxes
       ↓  [parallel, time-boxed 15–30 min machine assist]
3. Agent pack: public desk brief + drafted question set + traps to avoid
       ↓  [human editor 10–15 min]
4. Facilitator 1-pager finalized → live conversation (25–35 min elite track)
```

**Elite cohort rule:** Prefer **scheduled prep** (“we send you a sharp agenda **Tuesday** after we run internal prep”) over **instant** chat—“wait while agents run” pressures you to ship unvetted fluff.

**Pre-loaded reference (reuse; don’t re-research toolchain basics):** For **expert coders / GitHub power users** who mainly need packaging and GTM sharpened—not Git 101—load [`knowledge-reference-github-development-and-gtm-for-technical-experts.md`](knowledge-reference-github-development-and-gtm-for-technical-experts.md).

---

## User-facing wording (professional, accurate)

Avoid overclaiming (**“incredibly powerful”** sets you up to miss). Prefer **credibility**:

**Option A — schedule with built-in lag (best for partners)**  
> *Before we meet, our team prepares a short **session briefing** tailored to your role and geography (Australian legal context, practice type if you share it). We only use **information you authorize** plus **public** professional sources—no covert profiling. Expect **one focused intake** (~30 min), not a generic survey.*

**Option B — same-day with explicit window**  
> *If you preferred today: we’ll need **about 15–25 minutes** to synthesize briefing notes from **what you paste / approve** plus public context. Are you alright starting at **[time]** so we aren’t improvising blind?*

**Option C — async then live (highest esteem)**  
> *Please share **[link to minimal form]** at your leisure. Once we confirm scope, we’ll return **an agenda + 8–12 questions** calibrated to your replies; you approve before we hop on.*

**Never imply** agents “gather **secret** SME knowledge” — say **gather context** within **explicit scope**.

---

## Consent matrix (explicit checkboxes)

| Research scope | Example | Typical partner comfort |
|----------------|---------|---------------------------|
| **A. What they paste** | 3 bullets practice focus, tooling | High |
| **B. Authorized public bios** | Firm site, Courts profile, speeches | Medium — ask |
| **C. Firm-internal materials** | Playbooks unless they send | Generally **no** without counsel |
| **D. Litigation / mandates** | “Your last deal” guesses | **No** — lethal |

Australian context: steer clear of implying access to **client-confidential** or **legally privileged** material. Your differentiator is **method** (verification habits), not **inside baseball**.

---

## Agent roles (parallel, then merge — human QA gate)

Think **subagents**, each time-boxed, outputs **bullet lists + sources**, not prose monologue.

| Agent | Inputs | Outputs |
|-------|--------|---------|
| **Profile normalizer** | Form + locale | Canonical: role, AU state, practice area verbs |
| **Domain signal** (public) | Firm site, APC profile, speeches | Talking points—not private facts |
| **Regulatory skim** *(orientation only)* | OAIC summaries, NSW/Vic guidance if relevant, PI insurance / competency themes | Flags for facilitator—**counsel verifies** contentious lines |
| **Question composer** | Profile + Git4Gits goals | Draft **ranked question list**, “if they say X, ask Y,” **forbidden guesses** |

**Composer rules for “power questions”:**

1. **Open with respect** — one line why their **judgment domain** precedes tooling.  
2. **Exactly one** probing question anchored to **Aus legal risk** themes they’ll recognize (**privilege leakage to vendor**, **duty of competency + tech**, **consent/conflicts of interest with GenAI**)—framed neutrally, not legal advice.  
3. Tie to **their capstone feasibility** under **ethical walls** — synthetic corpuses, redaction tiers, reviewer ritual.  

Final pass: facilitator deletes anything that **implies non-public facts**.

---

## Where outputs live (Git4Gits repo pattern)

Suggested files (internal; redact employer if public repo):

```
plan/prep-briefs/<anonymous-slug>-brief.md      # facilitator 1-pager + question list + sources consulted
templates/facilitator-prep-brief-template.md    # empty shell
```

Link from live intake: paste path into [`learner-profile-template.md`](learner-profile-template.md) → *Linked artifacts*.

---

## When “wait for my agents” is the wrong UX

| Situation | Better move |
|-----------|--------------|
| They have **120 seconds** | Two **hand-crafted** questions max + offer async follow-up. |
| Regulatory **panic** triggers | Avoid automated hot takes — **neutral** methodological framing only. |
| You haven’t QA’d outputs | Silence beats confident wrong cites. |

---

## Starter facilitator prompt (paste into your orchestrator)

```
You draft a facilitator prep brief—not legal advice—for a **[role] **[country]** in **[sector vertical]**.

Hard rules:
- No invented biographical facts or client matters.
- Only cite public sources OR text user pasted inside <user_provided>…</user_provided>.
Produce: (1) 10-bullet context crib, (2) 12 ranked live questions spanning domain authority / passion / risk / tooling / synthetic-data comfort, (3) forbidden topics list, (4) source URLs with dates where used.
Tone: respectful peer speaking to **[seniority]**.
```

---

## Related docs

- **System view** (find + build intelligence, stores, gates): [`intelligence-system-design.md`](intelligence-system-design.md)  
- Intake anchor: [`learner-intake-interview.md`](learner-intake-interview.md)  
- Jurisdiction workflows: [`compliance-research-agent.md`](compliance-research-agent.md)  
- Messaging tone: [`messaging-unaware-learners.md`](messaging-unaware-learners.md)
