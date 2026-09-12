# Website maintenance

The new site uses Astro static output. Original Jekyll source remains for reference
and is not included in the generated website.

## Current scope: academic homepage

The homepage uses a compact biography followed by a linked research map. Its seven
selected publications are grouped into coding-agent evaluation, test oracles,
AI-system testing, and AIOps. Edit `src/data/research.ts` to update map membership
and publication groups together. The map describes thematic connections, not a
timeline or technical dependency graph. Its layout becomes a vertical list on
small screens; all links work without client-side JavaScript.

The homepage and navigation prioritize academic identity, research, publications,
service, and biography. Writing and education routes are retained for later work,
but are not promoted in the academic navigation or homepage. Normal local preview
should use `npm run dev` (without drafts).

Research summaries and resource links live in `src/data/site.ts`; full citation
metadata lives in `_bibliography/papers.bib`. Keep quantitative claims scoped to
the cited paper's evaluation. Service records in `src/data/services.json` preserve
all 20 original entries across 2021-2025, with an integration test against the
original source. Add new service records to both the migration baseline and the
dataset, or explicitly update the migration test when maintaining newer years.

## Run and verify

Use Node 24 LTS (minimum 22.12) and npm.

```sh
npm ci
npm run dev
npm run dev:drafts
npm run verify
npm run preview
```

Use either development command, not both on the same port. Normal development
hides drafts; `dev:drafts` shows them with a visible editorial banner and noindex.
Production builds always exclude drafts, including when CONTENT_PREVIEW is set.
Astro 7 runs the dev server in the background. Use `npx astro dev stop` before
switching preview modes; `npx astro dev logs` displays its logs.

`verify` runs type checks, the static build, link and migration checks, draft
isolation checks, and a publishing integration test in a temporary directory.
The integration test renders both Markdown and MDX without changing local articles.

## Write an article

Create a stable filename under `src/content/writing/`. Its name becomes the URL.
Use Markdown by default and MDX when an article needs a component.

```yaml
---
title: 'A precise article title'
description: 'What the reader will learn.'
publishedAt: 2026-09-08
language: en
topics: [AI evaluation]
audience: developers and research readers
draft: true
featured: false
series: Evaluating AI in practice
order: 3
---
```

`series` and `order` are optional, but must be supplied together. Use distinct
order values within a series. `updatedAt` describes a substantive revision.
Review facts, references, examples, and resource links. Then set `draft: false`,
select the publication date, and run `npm run verify`.
Home shows up to two featured articles; Writing contains all released articles.
RSS and sitemap use the same publication-date and draft restrictions.

Future-dated posts require a new build on or after their publication date. This
repository does not schedule future publishing automatically. Articles linked
from a released article must also be published; broken links fail verification.

The two initial English explainers are editorial drafts prepared during the
redesign, not existing published work. Review them before release.

## Update research and background

- `_bibliography/papers.bib`: publication records, resource URLs, citation keys.
- `src/data/site.ts`: profile metadata and three research highlights.
- `src/data/services.json`: migrated academic service records.
- `_news/*.md` and `_talks/*.md`: retained announcement and talk sources.
- `src/pages/about.astro` and `src/pages/teaching.astro`: background, PhD supervision, and assistantships.
- `src/pages/education.astro`: learning resource and series placement.

Bibliography keys remain publication anchors. The unused legacy APS string
declaration was removed; the lightweight parser expects explicit field values
rather than BibTeX string macros. Existing PDF paths remain unchanged.
`prepare:assets` copies PDFs, portrait and legacy icon, exports clean BibTeX,
and generates a PNG social card from `public/social-card.svg`.

## Release and rollback

Review the site and editorial drafts separately. Production builds exclude drafts.

The workflow validates pull requests and uploads an artifact without publishing
them. Pushes or manual runs on master/main deploy verified `dist/` output using
GitHub's official upload-pages-artifact and deploy-pages actions. Repository Pages
settings must use GitHub Actions as the build source; the github-pages environment
allows the master branch to deploy.

The previous deployed gh-pages commit is
`5ad5ce2f6b855d3b6ececc9be7090c22e14c2fe6`; the branch is retained for rollback.
For rollback, prepare a revert PR for the migration, including its workflow, or
redeploy the retained known-good static artifact through the normal deployment
process. Avoid force-pushing or resetting shared history. The source baseline for
this redesign is 5b12a018464201cee4c0b2bf148779c425289b0d. To restore the legacy
site immediately, switch Pages back to branch publishing from gh-pages at its
retained commit. Reverting source code alone does not change the Pages build source.

See `_planning/migration-report.md` for retained routes and editorial follow-ups.
