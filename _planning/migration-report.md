# Migration inventory and decisions

## Academic refinement, 2026-09-09

Owner deferred AI education and requested an academic-first site. Homepage now
centers the verified role, PhD, research directions, recent news, four selected
papers with full authors and resources, and academic community contributions.
Research provides methods and scoped findings for six representative projects,
plus context for MetaIC and the benchmark position paper. Education and writing
remain available at their existing URLs without primary navigation promotion.

Corrected the service migration: the previous dataset retained only 2021. The
dataset now includes all 20 original entries in five years (2021-2025), covered
by a regression test comparing rendered records to `_layouts/services.html`.

Research provenance checked against public paper metadata and project READMEs:

- SWE-ABS: https://arxiv.org/abs/2603.00520 (v1); filled all 12 authors and paper links.
- UTBoost: https://aclanthology.org/2025.acl-long.189/ and the UTBoost repository;
  added proceedings, pages, DOI, and official PDF.
- Retromorphic: https://arxiv.org/abs/2310.06433; retained preprint status.
- ROME: https://arxiv.org/abs/2306.02228; TIN: https://arxiv.org/abs/2308.07937.
- LightAD: https://github.com/BoxiYu/LightAD and existing local publication metadata.
- Position paper: https://arxiv.org/abs/2501.10711v5; updated title and used its
  672-benchmark scope, preserving the citation key and historical news wording.

No new employment dates, honors, courses, or CV were invented. The legacy example
PDF is not presented as a current CV. Venue acceptance remains based on the
owner's existing bibliography and announcements.

Date: 2026-09-08
Branch: codex/research-education-site
Baseline: 5b12a018464201cee4c0b2bf148779c425289b0d
Audience confirmed by owner: English technical readers, research interpretation
and engineering practice.

## Migrated content

| Source                                   | Destination                           | Disposition                                                  |
| ---------------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| _pages/about.md                          | / and /about/                         | Academic facts preserved; owner-confirmed AI education added |
| _bibliography/papers.bib                 | /publications/ and /papers.bib        | All 11 records and citation anchors retained                 |
| assets/pdf/*                             | /assets/pdf/*                         | Every existing PDF retained byte-for-byte                    |
| assets/img/prof_pic.jpg                  | same path                             | Portrait reused                                              |
| _news/*.md                               | /news/ and /news/announcement_N/      | All 8 announcements retained                                 |
| _talks/utboost.md                        | /talks/ and /talks/utboost/           | One talk retained                                            |
| _layouts/services.html                   | src/data/services.json and /services/ | Rendered 2021-2025 records migrated                          |
| _pages/teaching.md                       | /teaching/                            | Four assistantships retained                                 |
| /blog/, /blog/2022/, /blog/2023/, /2022/ | compatibility pages                   | Explicit links to /writing/                                  |
| /feed.xml                                | writing RSS                           | Published articles only                                      |
| /sitemap.xml and /404.html               | new sitemap and 404                   | Current site equivalents                                     |

Old generated output includes theme/demo routes and repository source files.
Those are outside the retained personal content. Demo projects, example CV,
stock images, Distill scripts and my-awesome-site remain in source for reference
but are not shipped. Old generated image variants are not recreated; the canonical
portrait URL is retained.

## New material

- Research overview connects coding-agent evaluation, test oracles, and AI testing.
- Education provides a deterministic Python reasoning exercise. It does not claim
  a course, workshop, student outcome, or live AI evaluation.
- Two English Markdown explainers are draft and excluded from production.
- Writing supports topic/search filtering, references, related reading, series,
  per-article language, and Markdown/MDX authoring.
- Responsive layouts, self-hosted Latin fonts, metadata, RSS, and a social card.

## Editorial follow-ups

- Review the homepage positioning, education explanation, and two draft explainers.
- SWE-ABS retains the incomplete source author list and has no resource link in
  source. Add verified authors/resources when available.
- Corrected TIN's Code link to https://github.com/RobustNLP/TestNER and ROME's to
  https://github.com/RobustNLP/TestIC after checking both official repository READMEs.
- No current CV was supplied. The old CV points to example_pdf.pdf, which is not
  presented as the owner's CV in the redesign.
- The academic contact email is unchanged from source; update it if needed.

## Design rationale

White, ink blue, and cobalt support technical reading. Source Serif 4 carries the
main question; Source Sans 3 carries explanations and navigation. The small test
experiment connects research to education and serves as the memorable element.

```text
Name                          Research  Writing  Education  About
Research + education positioning                     Portrait
Investigate                   Understand             Experiment
Why passing tests can mislead                 Interactive example
Two editorial selections (released posts only in production)
Three research highlights
Two recent updates + archive
Contact and research profiles
```

## Release state

Local implementation and preview only. No commit, push, or production deployment.
Verification completed locally:

- Astro type checks: zero errors, warnings, or hints.
- Production build: 24 pages, with no draft routes or content.
- Five integration tests: publication/author/citation/PDF preservation; all generated
  internal links and fragments; draft exclusion; legacy routes; isolated Markdown
  and MDX publishing including RSS, series links, and future-date exclusion.
- Browser layout checks: homepage, publications, education, writing index, and
  article at 360, 390, 768, and 1440 px; no horizontal overflow or broken images.
- Browser interaction checks: topic and text filtering, no-match states, keyboard
  operation and reset of the teaching example, and readable article layout.
- No browser console errors observed during those checks.
- Dependency audit: zero known vulnerabilities at validation time.

The Pages workflow is prepared but has not run remotely; production hosting and
external resource availability beyond the two corrected repositories are not
validated by these local checks. Review the real site before release.
