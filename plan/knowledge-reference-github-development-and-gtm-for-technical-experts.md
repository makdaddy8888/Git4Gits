# Reference: GitHub, engineering excellence, and GTM — technical experts (“Avi” archetype)

**Purpose:** Cached knowledge pack for facilitators/agents interviewing or coaching **advanced engineers** who already excel at coding and GitHub. Minimal time on toolchain basics; **bias toward product positioning, packaging, narrative, distribution, and customer discovery** — where mastery often gaps.

**When to load:** First session with confirmed expert; onboarding “verify-don’t-explain”; capstone critiques that assume senior craft.

**Scope:** Opinionated summaries of broadly accepted practice; organizational policy may override parts of GitHub/feature availability.

---

## 1. Facilitation angle (Avi-type)

| They likely need | Teach lightly or skip |
|------------------|------------------------|
| **Who buys** vs who uses; **pain → outcome** framing; clarity of **one promise** | Syntax, branching 101, “what is CI” |
| **Proof assets:** demo video, before/after metrics, redacted case study | Drive-by style debates |
| **Channel fit:** where their ICP actually shops (communities, compliance lists, vertical events) | Tool religion |
| **Pricing/packaging** intuition (tiering, audits vs retainers vs products) | Re-teaching OO design |
| **Narrative:** why them now, why this repo, what risk you remove | Low-level git plumbing unless they want depth |

**Opening moves:** Ask for one shipped thing in the last 90 days; who it was for; what would have to be true for them to pay for it; what they **avoid** saying in public (often the real differentiator).

---

## 2. GitHub — repository and org hygiene

- **Single source of truth:** One default branch policy the whole team can name; protect it.
- **README contract:** What it is, who it is for, how to run in 5 minutes, where to ask questions, license, security contact.
- **CONTRIBUTING + CODE_OF_CONDUCT:** Lower friction for external contributors; set expectations upfront.
- **Issue/PR templates:** Structured repro steps for bugs; “motivation / approach / rollout / risk” for features.
- **Labels + milestones:** Make triage searchable; milestones align work to communicated dates without promising fake precision.
- **Archiving:** Tombstone README on deprecated repos pointing to successors — reduces confusion forever.

---

## 3. Branching and delivery workflow

- **Trunk-based (default recommendation for many SaaS/product teams):** Short-lived branches, small increments, hide incomplete work behind flags/config when needed.
- **Release branches:** When you must stabilize long cycles (regulated, embedded, OSS major versions).
- **Naming:** Predictable prefixes (`feat/`, `fix/`, `chore/`, ticket id if you use a tracker) — easier automation and human scan.
- **Pull requests as the review unit:** Smaller PRs correlate with faster review and fewer defects; link design notes or ADR when behavior changes are non-obvious.
- **Draft PRs:** Signal work-in-progress; enable early CI and early feedback without merge pressure.

---

## 4. Pull requests — quality bar

- **Description answers:** What problem, what changed, how verified, rollout/rollback, screenshots or API diff when UX/API surface moves.
- **Risk callouts:** Migrations, cache invalidation, permission changes, anything irreversible.
- **Self-review first:** Catch obvious issues; respect reviewer time.
- **Merge discipline:** Prefer squash or merge strategies consistent with audit trail needs; forbid force-push to protected branches.

---

## 5. Code review culture

- **Required reviewers + CODEOWNERS:** Ownership maps to expertise and blast radius.
- **Review focuses:** Correctness, security, maintainability, operability — not bikeshedding unless standards are at stake.
- **Timeboxing:** SLA for first response (even “I’ll review tomorrow”) beats silent queues.
- **Teach-back in comments:** Seniors leave traces others can learn from without condescension.

---

## 6. Branch protection and governance (patterns)

Enforce via **branch protection rules** / **rulesets** (feature set varies by GitHub edition):

- Require PR before merge; require status checks (CI green).
- Require up-to-date with base **or** use merge queues when scale demands.
- Restrict who can dismiss reviews / push to default branch.
- Optional: signed commits, linear history preferences, conversation resolution before merge.

**Principle:** Automation enforces **repeated policy**; humans enforce **judgment**.

---

## 7. Security and supply chain on GitHub

- **Org-level 2FA** and **least-privilege** seats; avoid long-lived broad tokens when fine-scoped PATs or GitHub Apps fit.
- **Dependabot / dependency review:** Pin what must be pinned; automate PRs with test gates.
- **Secret scanning / push protection:** Prevent credential leaks early.
- **Private vs public repos:** Separate “experimentation” from “production” naming to avoid accidental exposure.
- **Security advisories and Security.md:** Clear reporting path grows trust.

---

## 8. GitHub Actions — CI/CD habits

- **Fast feedback loops:** Lint + unit tests on every PR; heavier suites on schedule or path filters.
- **Cached dependencies** where safe; reproducible installs (lockfiles).
- **Environments + required reviewers** for production deploy secrets.
- **Reusable workflows / composite actions** to DRY without hiding behavior.
- **Artifacts and test reports:** Make failures diagnosable from the PR.

---

## 9. Issues, Projects, and planning

- **Epics/milestones** for narrative; **issues** for bite-sized execution.
- **Definition of Ready / Done** (even lightweight) prevents infinite “almost done.”
- **GitHub Projects** (or external tool): Only worth it when the whole team commits; otherwise overhead.

---

## 10. Software development best practices (senior skim)

- **Tests where risk lives:** Contract tests at boundaries; property/fuzz where invariants matter; fewer vanity coverage numbers.
- **Observability over printf:** Structured logs, metrics, traces for services you operate; correlate deploy → change.
- **Feature flags:** Decouple deploy from release; enable kill switches.
- **APIs and schemas:** Version intentionally; deprecation windows; backwards compatibility as a product promise.
- **Error handling:** User-visible errors actionable; operator errors diagnosable.
- **Naming and boundaries:** Optimize for readability in 6 months by a stranger — including future you.
- **Complexity budget:** Explicitly justify new dependencies, new services, new state machines.

---

## 11. Documentation that pays rent

- **ADRs** (Architecture Decision Records): Context, decision, consequences — kills re-litigation.
- **Runbooks:** On-call steps, rollback, known failure modes.
- **Changelog / release notes:** User- and operator-facing deltas; aids sales and support.
- **Diagrams:** C4-light or bounded-context sketches when system boundaries confuse every new hire.

---

## 12. Product marketing and GTM — for technical founders/experts

Technical experts often default to **explaining mechanism** (“how it works”) while buyers need **outcome and risk removal** (“what I get,” “what bad thing stops”). This section is the main **differentiator** for Avi-type coaching.

### 12.1 Positioning

- **One sentence:** For **[ICP]**, who **[struggle]**, **Product** is **[category]** that **[key benefit]**, unlike **[alternatives],** we **[proof of difference].**
- **Category choice:** Better to be legible (“compliance automation for…”) than clever and unclear.
- **Proof:** Metrics, audits passed, hours saved, defect rate — **specific beats superlative**.

### 12.2 Ideal customer profile (ICP)

- Firm size, stack, geography, regulation, buyer title, urgency trigger.
- **Anti-ICP:** Who burns time with no close — explicit “not for” reduces bad leads.

### 12.3 Messaging layers

| Audience | Emphasis |
|----------|----------|
| **Economic buyer** | ROI, risk, time-to-value, procurement path |
| **Champion (often technical)** | Integrations, security, extensibility, “can I trust this in prod” |
| **End user** | Daily workflow, fewer errors, speed, clarity |

Translate the same truth **three ways** without lying.

### 12.4 Packaging and pricing (starter intuition)

- **Good-better-best** or **usage-based** tied to value metric (seats, repos, records, API calls).
- **Services vs product:** Audits and migrations often fund product; don’t hide that — **name the ladder**.
- **Trials and pilots:** Clear success criteria in writing before day one.

### 12.5 Distribution channels (pick 1–2 seriously)

- **Community** (Slack/Discord, meetups, OSS adjacency)
- **Content** (deep technical posts that show judgment, not tutorials they’ve read 100 times)
- **Partners** (consultancies, agencies, cloud marketplaces)
- **Outbound** (pain-specific, tiny list, high relevance)
- **PLG** only when onboarding is truly self-serve and time-to-value is minutes

### 12.6 Sales narrative (short)

- **Pain → stakes → today’s workaround cost → new world → proof → ask** (next step, not “let me know thoughts”).
- **Objections:** Map top five (“security,” “integration,” “we tried X”) to **evidence** (SOC2 path, reference architecture, migration guide).

### 12.7 Launch and attention

- **Launch is a campaign, not a tweet:** Changelog, demo, email to small right list, office hours, partner heads-up.
- **Founder story:** Why you; **bounded** personal narrative builds trust without oversharing.

### 12.8 Brand and trust assets

- **Website:** Clear ICP, proof, pricing signal (even “contact sales”), security page.
- **GitHub as marketing:** Polished README, responsive maintainers, release hygiene — **repo is a storefront** for technical buyers.

### 12.9 Common failure modes (experts)

- Building for **peer impressiveness** vs **buyer urgency**
- **Feature lists** without **outcome mapping**
- Avoiding sales conversations until the product is “ready”
- **Undifferentiated OSS** with no services path or hosted wedge
- **Speaking in stack** to **non-stack** buyers without a translator in the room

---

## 13. Quick checklist — first session with a technical master

- [ ] What did they ship last; for whom; what metric moved?
- [ ] Who has budget; who blocks; who implements?
- [ ] One positioning sentence they’re willing to say aloud
- [ ] Top 3 proof assets they could produce in two weeks
- [ ] One channel they will **commit** to for 4 weeks
- [ ] GitHub hygiene gaps that hurt **trust** (README, releases, security) — fix before big outreach

---

## 14. Maintenance

**Owner:** Update this file when GitHub changes feature names (Rulesets, merge queue, etc.) or when pilot feedback shows repeated gaps. Prefer **append** short dated notes over silent drift.

**Version note:** Written for generic GitHub.com patterns; Enterprise Server feature parity may lag.
