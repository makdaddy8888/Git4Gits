# Intelligence system — design note (find + build)

This document answers: **how Git4Gits should systematically find, store, refine, and deploy “intelligence”** so conversations, compliance, and curriculum stay sharp—without becoming surveillance or a liability factory.

## 0. Name the job precisely

**“Intelligence” here** = **decision-relevant context** with **provenance**, **timestamps**, **confidence**, and **policy** about who may use it and how.

It is **not**:

- Covert profiling of individuals.
- Hoovering “the web” into prompts unchecked.
- Treating model output as fact without source chain.

It **is**:

- **Finding** signal from **authorized** inputs + **bounded** public sources + **internal** learnings (from pilots).
- **Building** durable assets: prep briefs, jurisdiction packs, domain pattern libraries, question banks—each versioned and reviewable.

---

## 1. Types of intelligence (split on purpose + risk)

| Layer | What it captures | Typical sources | Risk tier |
|-------|------------------|-----------------|-----------|
| **A. Respondent profile** | Role, seniority, industry, geo, self-described practice focus, passion/duty | Forms, 1:1 notes (consented) | Medium (PII) |
| **B. Org / market context** | Firm type, tech stack hints, public positioning | **Public** web, press, **user-pasted** text | Medium (misrepresentation) |
| **C. Regulatory / ethical orientation** | Data/privilege/GenAI governance *orientation* for facilitators | Official guidance, desk research packs | **High** (must not be “legal advice”) |
| **D. Pedagogical intelligence** | What teaching moves worked; failure modes; glossaries | Anonymized cohort retros, rubric scores | Low–medium |
| **E. Conversational intelligence** | Ranked questions, pivots, “forbidden guesses” for a session | Synthesis of A+B+C+D | Medium |
| **F. Product intelligence** | Feature demand, domain heatmaps, drop-off reasons | Aggregated analytics (opt-in) | Medium |

**Design rule:** each record carries **`intel_type`**, **`source_ids`**, **`created_at`**, **`review_status`**, **`expiry_policy`**.

---

## 2. Core architecture (conceptual)

Think **pipeline + policy + human gates**, not “one smart chat.”

```
┌─────────────┐   consent + scope   ┌──────────────┐
│  Sources    │ ──────────────────► │  Ingestion   │
└─────────────┘                     │  + normalize │
      ▲                             └──────┬───────┘
      │                                    │
 manual upload                           provenance
 SME paste                                    │
      │                                    ▼
      │                             ┌──────────────┐
      └────────────────────────────►│  Knowledge   │
                                    │  store       │
                                    │  (see §3)    │
                                    └──────┬───────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    ▼                      ▼                      ▼
            ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
            │ Synthesis    │      │ Retrieval    │      │ Review       │
            │ jobs (LLM)   │◄────►│ (policy-     │────►│ queues by    │
            │              │      │  filtered)   │      │ risk tier    │
            └──────┬───────┘      └──────────────┘      └──────┬───────┘
                   ▼                                          │
            ┌──────────────┐                                  │
            │ Artifacts    │◄─────────────────────────────────┘
            │ briefs,      │         human approve / reject
            │ packs, banks │
            └──────────────┘
```

**Non-negotiable:** **LLM sits in “synthesis”**, never as **authoritative source** without citations to human-approved or primary materials.

---

## 3. Knowledge store (what to build first vs later)

### Phase 1 — **Git-native** (now, matches current repo)

- Markdown + folders: `plan/prep-briefs/`, `plan/legal-packs/`, `plan/learners/` (PII discipline), `plan/ideas/`.
- Front-matter YAML on each doc: `sources`, `reviewer`, `valid_until`, `classification`.
- **Pros:** auditable diffs, zero infra. **Cons:** weak search at scale.

### Phase 2 — **Indexed corpus** (when >3 active cohorts / domains)

- Append-only **event log** ("intel added", "intel superseded").
- Lightweight **search** (keyword + metadata); optional **embeddings** *only* for **internal** playbooks—not for unvetted web dumps.
- **PII segmentation:** separate bucket/DB schema for respondent data; encryption at rest; retention policy.

### Phase 3 — **Service boundary** (product / multi-tenant)

- API: `submit_context`, `request_brief`, `record_outcome`.
- **RBAC:** facilitator vs sponsor vs learner; jurisdiction of data residency.
- **Audit trail:** who queried what intelligence for whose session.

---

## 4. “Find intelligence” — fetch strategy (ethical + efficient)

### Tiered depth (automation scales with stakes + consent)

| Tier | Example user | Automated depth | Human time |
|------|--------------|-----------------|------------|
| T0 | Anonymous browser | None | N/A |
| T1 | Cohort SME | Minimal: form-only synthesis | Low |
| T2 | Regulated vertical | Form + **approved** public sources | Medium |
| T3 | Elite partner/GC | T2 + **manual** curator pass + counsel flags | High |

### Fetchers (explicit modules)

1. **User-provided** (highest signal, lowest creep): paste box, file upload, structured form.
2. **Permitted public** (robots/terms-respecting): firm **public** bio, practice description, regulator news—**never** inference of client matters.
3. **Licensed third-party** (future): CRM, HRIS skill tags—only with **enterprise contract**.
4. **Internal Git4Gits** (build moat): anonymized patterns from past cohorts—**aggregation floor** (k-anonymity) before use in prompts about “people like you.”

**Each fetch** writes a **`SourceRecord`**: URL or “user_upload_hash”, retrieval time, excerpt length cap, copyright note.

---

## 5. “Build intelligence” — synthesis jobs (what agents actually do)

Batch jobs with **schemas**, not open-ended chats:

| Job ID | Input | Output schema | Gate |
|--------|-------|---------------|------|
| `PREP_BRIEF_V1` | Profile + sources + persona tier | Sections in [`facilitator-prep-brief-template.md`](facilitator-prep-brief-template.md) | Facilitator approves |
| `LEGAL_ORIENTATION_V1` | Jurisdiction + sector | Sections in [`compliance-research-agent.md`](compliance-research-agent.md) | Counsel on red-flag |
| `QUESTION_RANK_V2` | PREP_BRIEF + pitfalls list | Ordered questions + pivots | Auto if low-risk; human if elite |
| `LESSON_GAIN_V1` | De-identified session notes | Idea file + pattern candidate | Maintainer merge |

**Quality controls**

- **Mandatory “unknown”**: model must output **`UNVERIFIED`** holes instead of fabulating statutes or deals.
- **Dual prompt**: Generator + **Critic** pass (cheap) that checks for unsourced factual claims—still not perfect; elite path needs human eyes.
- **Decay:** `valid_until` on regulatory intel; cron or manual “re-verify quarterly.”

---

## 6. Feedback loop (intelligence compounds)

Capture **minimal** structured outcomes after interactions:

| Field | Use |
|-------|-----|
| `questions_used` IDs | Correlate with engagement |
| `partner_stayed_past_min_20` proxy | Calibration quality |
| `capstone_completed` | Program efficacy |
| `facilitator_edit_distance` | How often humans rewrite agent drafts |

Feed **aggregate** adjustments into prompts / question banks—not into individual dossiers **without consent**.

---

## 7. What we should **not** build (explicit anti-requirements)

- Covert scraping of LinkedIn/email leaks.
- “Automated legal opinions” surfaced to learners.
- Cross-customer blending of identifiable stories in prompts (**no** “your peer at Firm X…”).
- Permanent storage of **client names / matter IDs** inside intel objects.

---

## 8. Roadmap recommendation (honest sequencing)

| Quarter (indicative) | Deliverable |
|----------------------|-------------|
| **Now** | YAML front-matter on prep/legal docs; tier tags; facilitator review checklist baked into [`conversation-intelligence-prep.md`](conversation-intelligence-prep.md) |
| **Next** | `SourceRecord` mini-schema + generator script stub; anonymized retro template feeding `plan/ideas/` |
| **Then** | Search index over **internal** markdown; optional embeddings for playbook only |
| **Later** | Tenant API + audit log + retention jobs |

---

## 9. Tie-in to existing Git4Gits docs

- Elite prep workflow: [`conversation-intelligence-prep.md`](conversation-intelligence-prep.md)  
- Jurisdiction intelligence: [`compliance-research-agent.md`](compliance-research-agent.md)  
- Human capture: [`learner-intake-interview.md`](learner-intake-interview.md), [`learner-profile-template.md`](../templates/learner-profile-template.md)

---

## 10. One-line decision principle

**Git4Gits intelligence = cited, consented, decay-aware context with human gates proportional to power and privacy risk—models draft, policy filters, humans own the last mile.**
