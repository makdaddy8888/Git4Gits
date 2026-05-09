# Capstone review checklist

Mentor: _____________ Learner: _____________ Date: _________  
Pass = all **required** items satisfied or documented exception approved by mentor.

## Specification

- [ ] **Required**: Problem [`problem-brief-template.md`](problem-brief-template.md) complete; acceptance criteria are testable sentences.
- [ ] **Required**: **Jurisdiction** row in brief filled (country + sub-jurisdiction if relevant) or covered in attached [`jurisdiction-profile-template.md`](jurisdiction-profile-template.md).
- [ ] **Required**: Out-of-scope and “definition of wrong” filled (not blank).

## Implementation

- [ ] **Required**: AI assistance disclosed at high level (which tools).
- [ ] **Required**: Changes are understandable in **chunks** learner can summarize (even if imperfect).

## Verification

- [ ] **Required**: At least **two** automated or scripted checks learner can explain (tests, asserts, sample-based diff, row counts vs baseline, etc.).
- [ ] **Required**: Mentor can run or reproduce artifact on documented environment without private heroics.

## Safety & stewardship

- [ ] **Required**: No secrets (`API_KEY`, passwords, PEMs) embedded in prompts or repo; use env or stubs.
- [ ] **Required**: Data handling aligns with **`charter-v0` forbidden failure** clause and **declared jurisdiction** (no “convenient unknown” on country).
- [ ] **Required**: If `plan/legal-packs/` contains a desk pack for this cohort, **red-flag section** either empty or **counsel-approved** exception documented.

## Documentation

- [ ] **Recommended**: README or short handoff notes: setup, run, limitations.
- [ ] **Required**: Known limitations documented honestly.

---

**Decision**: PASS / REVISE — notes:
