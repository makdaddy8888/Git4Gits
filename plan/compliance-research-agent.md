# Compliance research agent — brief (jurisdiction-aware Git4Gits)

Use this document to **instruct an AI coding/research agent** (or a human researcher) to gather **orientation-level** legal and regulatory context for a cohort or capstone **before** anyone relies on it for business decisions.

## Non‑negotiable disclaimer

**Git4Gits materials are not legal advice.** Laws differ by country, state/province, city, regulated sector, and facts. Agents hallucinate statutes and citations. Every research pack must be **reviewed by qualified counsel** where decisions affect rights, duties, filings, sanctions, licensing, contracting, litigation, whistleblowing, or patient/subject safety.

The agent’s job is **structured desk research + source links + open questions**, not conclusions that substitute for counsel.

## What to collect from humans first

| Field | Example | Why |
|-------|---------|-----|
| **Primary country** | Japan | Default legal order |
| **Sub-jurisdictions** | Tokyo + applicable national law | States/provinces matter |
| **Industry / regulator** | EU bank under ECB + national supervisor | Sector rules stack |
| **Data categories** | employee PII only vs health vs minors | Triggers specialty law |
| **Cross-border flows** | UK model → US vendor SaaS | Transfer rules |
| **Deployment context** | internal tooling vs customer-facing AI | Risk profile |
| **Languages** | Japanese + English contracts | Research language |

Record these in [`jurisdiction-profile-template.md`](../templates/jurisdiction-profile-template.md).

## Agent mission (high level)

Given the fields above, produce a **Jurisdiction research pack** that answers:

1. **Data & privacy** — primary frameworks, key concepts (lawful basis, DPIA/PIA analogs, retention, breach notice, data subject rights, automated decision-making if relevant).  
2. **Workplace / employment (if teaching at work)** — monitoring, BYOD, trade secrets, contractor vs employee issues that touch **using AI on company data** (orient only).  
3. **Sector overlays** — e.g. health, financial services, gov’t, education, minors—point to **regulators and instrument types** (acts, EU regulations, agency rules), not pretend-deep analysis.  
4. **AI-specific or AI-adjacent rules** — e.g. transparency, high-risk system concepts, copyright/training data debates, product liability threads—**as of research date**, with “verify current” flags.  
5. **Intellectual property** — who owns model-assisted code outputs **at a framing level**—flag **contract** and **employer policies** dominate.  
6. **Courts / precedents / soft law** — only where the agent can point to **primary or official** portals; label **journalism vs binding authority**; distinguish civil vs common law traditions.  

## Search and synthesis rules for the agent

- Prefer **government gazettes, consolidated law databases, regulator PDFs, official summaries** over blogs.  
- **Quote minimally**—summarize with pointers; paste exact article numbers only when verified.  
- For each domain area, assign **confidence**: high / medium / low + **why** (“primary statute read in English unofficial translation”).  
- If two regimes conflict **cross-border**, surface the conflict as an **open question for counsel**, not a guess.  
- Never fabricate case names or citation strings. If unsure, write **“not verified.”**  

## Output format (mandatory sections)

Deliver as `plan/legal-packs/<country-code>_<short-slug>.md` (or attach to charter).

1. **Metadata** — research date, agent model/tool, inputs received, human reviewer field (empty until signed).  
2. **Executive orientation (non-binding)** — ≤10 bullets of what a facilitator should **double-check** with counsel.  
3. **Topic sections** — Data/privacy; Employment (if relevant); Sector; AI-specific; IP; Cross-border (if relevant).  
4. **Source table**  

| Topic | Instrument / body | Link | Retrieval date |

5. **Precedents & cases** — table only where verified; columns: court, citation, holding one line, why it might matter **or might not**, link.

6. **Red flags / stop** — e.g., national security/export control touchpoints, biometric surveillance bans, PHI without BAA equivalents—**STOP until counsel**.

7. **Open questions for qualified counsel** — bullet list.

## Review gate before cohort launch

Pilot cannot claim “law-checked” unless:

- [ ] `jurisdiction-profile-template.md` filled.  
- [ ] Research pack filed under `plan/legal-packs/`.  
- [ ] Sponsor named **risk owner**.  
- [ ] Mentor knows **Forbidden failure** in charter forbids circumventing flagged rules.  

Qualified counsel review: **recommended** always; **required** when red-flag section non-empty.

## Suggested starter prompt (paste to your research agent)

```
You are a legal desk-research assistant, not a lawyer.
Inputs: Country=... Sub-jurisdiction=... Industry=... Data categories=... Cross-border=... Deployment=...

Follow the workflow in plan/compliance-research-agent.md. Produce ONLY:
- Verified-official-links summary per topic (no fabricated citations)
- Confidence labels
- Open questions for human counsel

If you cannot verify an authority, say "NOT VERIFIED" and omit detail.
Never instruct anyone to violate law; escalate uncertainties.
```

## Maintenance

Legal packs **decay**. Re-run the agent when laws change locally, when vendor stack changes residency, or at least **quarterly** for active cohorts.
