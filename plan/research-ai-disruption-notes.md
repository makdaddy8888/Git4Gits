# Research notes — AI disruption and domain focus (Git4Gits)

Purpose: grounds **why** Git4Gits might prioritize certain industries, without treating SEO “rankings” as science.

Last updated: 2026-05-09.

## Definitions (use consistently)

| Term | Here it means |
|------|----------------|
| **Disruption (macro)** | Occupations or industries where AI changes task mix, headcount growth, or skill requirements—per employers and researchers. |
| **Git4Gits fit** | Domain experts who **gain leverage** from **specification, small-code artifacts, and verification** with AI assistants—not only chat. |
| **Pilot-ready** | You can run **Week 1** with **synthetic or policy-safe** data without months of legal review. |
| **Jurisdiction-aware** | “Pilot-ready” is **never** geography-agnostic: country + sector + data type drive **privacy, workplace, AI, IP** overlays—capture in [`templates/jurisdiction-profile-template.md`](../templates/jurisdiction-profile-template.md) and **`plan/legal-packs/`** when warranted. |

## What serious sources agree on (high level)

- **Skill churn is broad**: employers expect AI and information-processing technologies to reshape work; **digital access** and **skill gaps** show up as major themes in global employer surveys (e.g. [World Economic Forum — Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)).
- **Exposure varies by occupation** more than by buzzword industry: knowledge work with **text, code, data, and compliance** tends to see faster task change (discussed in mainstream macro analyses such as [Goldman Sachs — How AI may affect the global workforce](https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce) and [Goldman Sachs — jobs AI may boost vs disrupt](https://www.goldmansachs.com/insights/articles/the-jobs-ai-is-likely-to-boost-and-those-it-may-disrupt)).
- **Cross-industry analytics** on AI-exposed sectors and productivity (e.g. [PwC AI Jobs Barometer](https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer/2024.html)) support the idea that adoption is **widespread**, not confined to “tech.”
- **Labour institutions** caution against single-number “% displaced by industry” claims; prefer primary studies and national/international surveys (e.g. [ILO — AI and work](https://www.ilo.org/artificial-intelligence-and-work-digital-economy)).
- **US-focused GenAI and work** deep dives (e.g. [McKinsey MGI — Generative AI and the future of work in America](https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america)) help frame **automation potential vs augmenting roles** tensions.

### Caveat on viral “top 10 disrupted industries” posts

Lists with precise **percentage displacement per industry** are often **thinly sourced**. Use them only as brainstorming prompts unless they cite reproducible methodology.

## Operational translation for Git4Gits

Doing “**all domains**” in **discovery** means: capture patterns across sectors in [`domains.md`](domains.md) and run **interviews** that rotate through verticals—not running simultaneous production pilots everywhere.

Suggested cadence:

1. Maintain **one global cohort playbook** (`templates/` + [`pilot-week-1-checklist.md`](pilot-week-1-checklist.md)); **stamp jurisdiction early** (`jurisdiction-profile-template.md`, optional `plan/legal-packs/` via [`compliance-research-agent.md`](compliance-research-agent.md)).
2. For each vertical, keep **pitfalls + data rules + example tasks** in [`domains.md`](domains.md).
3. Promote proven exercises into `plan/ideas/` (status **adopted**) then selectively into reusable **pattern** docs later.

## Source bookmark list

| Source | URL |
|--------|-----|
| WEF Future of Jobs 2025 | https://www.weforum.org/publications/the-future-of-jobs-report-2025/ |
| Goldman — global workforce | https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce |
| Goldman — boost vs disrupt | https://www.goldmansachs.com/insights/articles/the-jobs-ai-is-likely-to-boost-and-those-it-may-disrupt |
| PwC AI Jobs Barometer | https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer/2024.html |
| McKinsey MGI — GenAI and work (US) | https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america |
| ILO — AI and digital economy work | https://www.ilo.org/artificial-intelligence-and-work-digital-economy |

## Related repo docs

- Vertical cheat sheet + interview angles: [`domains.md`](domains.md)
- Product ladder (ideas catcher → Copilot track → platform): [`product-shape.md`](product-shape.md)
- Country/sector legal desk research (structured agent brief + **not legal advice**): [`compliance-research-agent.md`](compliance-research-agent.md)
- Cohort jurisdiction snapshot: [`../templates/jurisdiction-profile-template.md`](../templates/jurisdiction-profile-template.md)
