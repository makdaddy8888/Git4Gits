# Domain verticals — Git4Gits coverage map

Single reference for **all** candidate industries discussed. Use **`Git4Gits fit`** together with **`Pilot-ready`** to decide **interview quotas**, not simultaneous unfunded pilots everywhere.

Legend:

- **Disruption gist** — shorthand “why executives feel heat” (verify with sponsor).
- **Typical SMEs** — who benefits from AI **plus** specs / small-code / verification.
- **Starter task examples** — week-1-safe shapes for brief-first teaching.
- **Data / ethics** — first-order guardrails before real data touches models.
- **Fit** — ★★★ strong default for Git4Gits-style upskilling; ★★ context-dependent; ★ narrow unless cohort actually ships integrations.

Related: [`research-ai-disruption-notes.md`](research-ai-disruption-notes.md).

---

## 1. Cross-cutting — analytics, FP&A-adjacent, “office SMEs” everywhere

**Disruption gist:** Routine digital reporting and exception handling squeezed by automation expectations; spreadsheets remain “truth layer.”  

**Typical SMEs:** Analysts, controllers’ staff, BizOps, sales ops reporting, auditors’ field teams touching systems data.  

**Starter tasks:** Reconciliation script vs workbook; parameterized report pull; anomaly checks vs last-week baseline; contract-style rule encoded as asserts on CSV output.  

**Data / ethics:** Often internal financial or customer-derived—use **bundled synthetic** until classification sign-off; redact aggressively in prompts.  

**Fit:** ★★★  

---

## 2. Banking, insurance & capital markets ops / risk-adjacent

**Disruption gist:** Model-heavy culture meeting GenAI assistants; regulators watching model risk & third-party AI.  

**Typical SMEs:** Risk analysts, AML ops, underwriting support, treasury ops, vendor due diligence SMEs.  

**Starter tasks:** Policy checks as structured tests against sample filings; repeatable portfolio-style aggregations from synthetic blotters; markdown runbooks driven from tagged tables.  

**Data / ethics:** **High bar**—assume everything is sensitive unless declared public; forbid live customer records in pilots.  

**Fit:** ★★★  

---

## 3. Legal, compliance & contract operations

**Disruption gist:** Document review throughput pressure; juniors’ pattern-matching under fee pressure.  

**Typical SMEs:** Paralegals and specialist reviewers, ethics/compliance SMEs, contracting ops, procurement policy owners.  

**Starter tasks:** Clause extraction scaffolding with golden-file tests on **public** filings; playbook-to-checklist compilers; citation hygiene linters over markdown summaries.  

**Data / ethics:** Attorney-client privilege zones—**never** improvise stack; sponsor defines allowed corpus. Often strong **GPT/Copilot governance** narratives.  

**Fit:** ★★★  

---

## 4. Healthcare — clinical-facing vs ops / analytics paths

**Disruption gist:** Diagnostics & documentation AI headlines; rollout constrained by HIPAA / GDPR-class duties.  

**Typical SMEs (Git4Gits-friendly paths):** Research coordinators, epidemiology-adj analysts, billing integrity SMEs, scheduling / throughput ops—not bedside coding unless org provides blessed sandboxes.  

**Starter tasks:** Synthetic patient-like tabular benchmarks; OMOP-ish toy schemas *only if approved*; operational dashboards from mock feeds.  

**Data / ethics:** Assume **regulated**; default to wholly synthetic FHIR-ish mini datasets or textbook-style tables. Clinical decisions **out of scope** for naive pilots.  

**Fit:** ★★ (analytics/ops) / ★ (clinical without governance)  

---

## 5. Life sciences R&D adjacent (dry lab SMEs)

**Disruption gist:** Lab informatics velocity; reproducibility mandates; computational biology tooling democratizing.  

**Typical SMEs:** Assay SMEs touching LIMS extracts, crystallography admins, sequencing ops analysts, computational chemists-lite.  

**Starter tasks:** Plate reader CSV normalization; assay QC plots with pinned seeds; immutable pipeline stubs with checksum steps.  

**Data / ethics:** Proprietary assays—treat like trade secrets; public benchmark sets for teaching.  

**Fit:** ★★★  

---

## 6. Corporate FP&A, revenue ops & pricing support

**Disruption gist:** Rolling forecasts and scenario stress become AI-augmentable; spreadsheets fragile at scale.  

**Typical SMEs:** FP&A business partners, rev ops aligning CRM + ledger truth, royalty admins.  

**Starter tasks:** Driver-based model scripted from locked CSV tiers; SaaS-metrics sanity suite on synthetic ledger + CRM extracts.  

**Data / ethics:** Revenue and customer identifiers sensitive; segment-level synthetic only initially.  

**Fit:** ★★★  

---

## 7. Supply chain, logistics planning & fulfillment ops

**Disruption gist:** ETA optimization; exception management; forecasting refresh cadence tightening.  

**Typical SMEs:** Planners, S&OP facilitators, import/export ops, DC systems SMEs.  

**Starter tasks:** Exception queue triage helpers with rule tests; SKU velocity cuts with reproducible merges; deterministic solvers wrappers *only after OR clarity*.  

**Data / ethics:** Freight rates & partner identifiers sensitive; geopolitical data careful in prompts.  

**Fit:** ★★  

---

## 8. Manufacturing & industrial operations (MES / quality / maintenance)

**Disruption gist:** Vision QC, predictive maintenance, digital twin pilots; OT constraints.  

**Typical SMEs:** Quality engineers translating specs, CI managers, TPM coordinators, instrumentation SMEs.  

**Starter tasks:** SPC calculators on synthetic runs; BOM flatteners / diff tools on CSV hierarchies—**offline** plant code often belongs to tier-1 integrations, keep scope bounded.  

**Data / ethics:** Sensor streams may imply safety; segregate OT from general cloud policies per sponsor.  

**Fit:** ★★  

---

## 9. Technology & IT-heavy organizations (“every team is adjacent to code”)

**Disruption gist:** AI assistants normal in engineering; ripple into PM, design, BizOps nearer repos.  

**Typical SMEs:** Product ops, QA-adj coordinators, Solutions architects’ business counterparts, infra FinOps SMEs.  

**Starter tasks:** Issue triage labelers backed by deterministic rules; IaC-lite YAML templating with tests; changelog summarizers guarded by factual checks against diff stats.  

**Data / ethics:** Secrets hygiene **non-negotiable**; repos may contain licensure landmines—teach attribution early.  

**Fit:** ★★★  

---

## 10. Retail, e-commerce ops & omnichannel planners

**Disruption gist:** Personalized merch; dynamic promos; support automation—much is product analytics.  

**Typical SMEs:** Category managers’ analysts, ecommerce ops SMEs, omnichannel planners.  

**Starter tasks:** Promotional uplift postmortems with synthetic POS slices; SKU availability monitors with alerting thresholds as tests.  

**Data / ethics:** PII-heavy loyalty schemas—sandbox only.  

**Fit:** ★★  

---

## 11. Customer experience & workforce management (mass contact centers)

**Disruption gist:** Agent assist; QA sampling—often **low pure coding** unless integrating telephony + CRM.  

**Typical SMEs:** CX strategy SMEs, WFM real-time coordinators, QM analysts.  

**Starter tasks:** Rubric-guided transcript scoring on **released** corpuses; anomaly surfacing vs QA gold sets—privacy review first.  

**Data / ethics:** Recording laws & PII masking dominate; narrow pilot scope.  

**Fit:** ★  

---

## 12. Marketing, communications & growth (MarTech-heavy)

**Disruption gist:** Asset generation throughput; personalization; attribution squabbles.  

**Typical SMEs:** Marketing ops owning Marketo/SFMC exports, SEM analysts, brand compliance reviewers.  

**Starter tasks:** UTM governance linters; creative-to-landing-page spec diff tools on static HTML mocks; ROI rollups from clean synthetic spends.  

**Data / ethics:** IP and brand tone; plus **anti-deception** norms in generative outputs.  

**Fit:** ★★  

---

## 13. Public sector & regulated utilities (policy / program ops SMEs)

**Disruption gist:** FOIA-ish workflows; constituent services modernization; infra climate reporting workloads.  

**Typical SMEs:** Program evaluators, grants compliance officers, rate-case contributors, FOIA coordinators.  

**Starter tasks:** **Public** dataset analysis with reproducibility manifests; deterministic redaction validators on canned samples only after lawyer sign-off patterns exist.  

**Data / ethics:** Sunshine laws and political sensitivities—sponsor dictates corpus; never improvise citizen PII drills.  

**Fit:** ★★  

---

## Interview rotation tracker (manual)

Duplicate row per conversation; aim for breadth before depth.

| # | Date | Domain section | Org type | Synthetic-only? Y/N | Notes / quote |
|---|------|----------------|----------|---------------------|---------------|
| 1 |      |                |          |                     |               |

---

## How to read “★” modestly

A single star beside **finance** doesn’t forbid a brilliant **supply chain** pilot—stars prioritize **probability** that SMEs meet Git4Gits’ **verification-first** ethos without exploding compliance.
