# Personal Website Refinement Plan

Date: 2026-09-08
Status: locally implemented on codex/research-education-site; release review pending

Owner confirmed the first audience as English technical readers, focusing on
research interpretation and engineering practice. See migration-report.md for
implementation scope and verification, and ../WEBSITE.md for authoring instructions.

## Objective

Build a personal website that connects Boxi Yu's research, AI education work,
and public writing. Readers should quickly understand his focus, find credible
research, discover accessible explanations, and follow a useful learning path.

Working editorial theme: understanding, using, and evaluating AI reliably.
This is a proposed framing, not a confirmed description of the education work.

## Working Assumptions

- Academic peers need English research information and direct publication access.
- Writing may be Chinese or English; support per-article language without requiring
  every article to be translated or building duplicate empty language sites.
- Initial education audiences and existing materials still need to be established.
  Do not invent courses, teaching results, testimonials, enrollment, or metrics.
- Keep the existing GitHub Pages domain and preserve public resource URLs.
- Recommend Astro static output with Markdown, optional MDX, and custom CSS.
  Validate this choice in the prototype before migrating the whole site.
- Planning does not authorize publishing, replacing the live site, or removing
  existing content. Prepare a concrete preview before the production cutover.

## Current Findings

- Jekyll/al-folio homepage prioritizes biography and news over research or writing.
- Nine of eleven bibliography records are selected for the homepage.
- Publications reuse the theme's year-heading class for topic names, producing
  visibly overlapping headings on the live page.
- Contact links appear after the selected publication list; the footer is fixed.
- Writing is disabled on the homepage, while template blog configuration remains.
- Teaching lists historical assistantships, distinct from the new AI education work.
- Some publication records lack complete author or resource metadata. Audit before
  presenting them in the new design; absence does not justify inventing links.
- The repository contains template examples and overlapping sources of content.
  Establish which data actually renders before migration or cleanup.

## Information Architecture

Primary navigation: Home, Research, Writing, Education, About.
Provide prominent Publications and CV links without requiring menu discovery.

| Route | Purpose | First release content |
| --- | --- | --- |
| / | Introduce the person and guide both audiences | Positioning, writing, research, education, contact |
| /research/ | Explain connected research questions | Three representative projects and publication link |
| /publications/ | Complete scholarly record | All existing papers, dates, resources, citations |
| /writing/ | Discover individual articles | Featured posts, chronological list, topic navigation |
| /writing/<slug>/ | Read and share an article | Readable content, references, related or series links |
| /education/ | Follow structured learning | Real learning paths, course/workshop resources if available |
| /about/ | Background and professional information | Biography, CV if current, service, talks, teaching, contact |

If there is no complete educational resource, integrate the initial learning
series into Writing and defer the standalone Education navigation item.
Do not launch empty sections to match a sitemap.

Retain existing /talks/, /services/, /teaching/, /news/ and detail URLs as useful
archive pages or explicit static compatibility pages. Keep publication fragment
IDs and assets/pdf resource paths where feasible. GitHub Pages does not provide
arbitrary server-side redirects; verify any static redirect approach separately.

## Homepage and Visual Direction

Proposed order: identity and short positioning; direct audience entry links;
selected writing; education resource; selected research; compact news/contact.
Keep a direct Publications link in the opening section. If an imminent academic
application becomes the primary goal, move research before writing.

- Display 2-3 selected articles and 2-3 research highlights, not exhaustive lists.
- First-screen copy connects research and education without overstating either.
- Preserve a human portrait; remove the heavy portrait shadow and fixed footer.
- Use method diagrams and concrete examples as visual identity, not stock AI art.
- Initial palette: white #FFFFFF, pale blue-grey #F3F6FA, ink #243247,
  cobalt #2454C6, secondary text #536176, border #D8E0EA. Check contrast in use.
- Prototype Source Sans 3 with Source Serif 4 for English; evaluate Noto Sans SC
  with selective Noto Serif SC for Chinese, including font payload and fallbacks.
- Keep prose at roughly 65-75 Latin characters per line; validate Chinese line
  length independently. Use a single column on phones and a restrained desktop grid.
- Use clear focus styles and respect reduced motion. Core reading needs no animation.

## Content Model and Editorial Workflow

Articles: title, stable slug, description, publishedAt, optional updatedAt,
language, topics, audience, optional series/order, draft, featured, references,
and optional translation relationship. Keep display labels human-readable.

Education paths: title, intended audience, prerequisites, learning outcomes,
ordered references to existing articles/materials, and exercises where available.
An article can belong to a path without duplicating its content.

Research: retain BibTeX as the bibliographic source; add project summaries,
verified findings, diagrams, related paper keys, and explicit display priority in
separate structured metadata. Validate missing or duplicate references at build time.

Writing workflow: create a Markdown draft, preview locally, check references and
examples, publish through the repository, and update RSS and sitemap automatically.
Use MDX only for content needing an interactive component. Drafts must be excluded
from public pages, feeds, search indexes, and sitemaps.

## Delivery Phases

### Phase 1: Content and URL Inventory

- Inventory existing routes, anchors, papers, PDF/slides, portrait, news and talks.
- Identify live content sources, template-only content, and metadata needing repair.
- Establish the education audience and collect existing drafts or teaching material.
- Select 2-3 research highlights, up to 3 real launch articles, and one learning
  series if available. Treat these as editorial targets, not fabricated launch content.
- Draft positioning and a keep/move/archive mapping for existing pages.

Deliverables: content inventory, URL compatibility map, first-release sitemap,
and copy outline. Complete when every live resource has a migration disposition
and missing user-owned facts are explicitly recorded.

### Phase 2: Real-Content Prototype

- Create an isolated codex/ branch and build a local Astro prototype.
- Prototype homepage, article page, and research/publication presentation.
- Use an actual draft if available; otherwise clearly mark sample prose as a
  prototype fixture and exclude it from production output.
- Compare desktop and phone layouts, Chinese and English reading, navigation,
  long titles, figures, code blocks, and scholarly citations.
- Review the design against the actual research and education material; revise
  generic or decorative elements before extending the design to all routes.

Deliverables: runnable preview and inspected desktop/mobile views. Complete when
the audience entry points, hierarchy, reading experience, and stack fit are clear.

### Phase 3: Content Platform and Migration

- Implement validated content collections and reusable article/project layouts.
- Import all bibliography entries; preserve citation keys and resource paths.
- Implement Writing, series navigation, and Education when content supports it.
- Migrate background, service, talks and news into their planned destinations.
- Add RSS, sitemap, canonical URLs, per-page language, social previews, and a 404.
- Add topic navigation first; introduce static search when the article inventory
  makes it useful. Search must handle Chinese and English content if both exist.
- Replace template dependencies and examples only after migration parity is checked.

Deliverable: complete local site and migration report. Complete when all retained
content is accessible and one new article can be added without editing layout code.

### Phase 4: Verification and Release Preparation

- Run the production build and check internal links, fragments, asset references,
  duplicate slugs, series ordering, and draft exclusion from generated artifacts.
- Inspect representative pages at 360, 390, 768, and 1440 px widths; check long
  Chinese/English titles, tables, code, portrait, bibliography, and navigation.
- Verify keyboard navigation, visible focus, contrast, image alternative text,
  zoom/reflow, and reduced motion. Scope horizontal scrolling to wide code/tables.
- Verify article metadata, RSS links, canonical URLs, and old inbound URLs.
- Measure production-build loading and layout stability; optimize actual bottlenecks.
  Keep non-interactive routes free of unnecessary hydrated UI and external font bloat.
- Prepare the GitHub Pages workflow, preview diff, retained old deployment/ref,
  and documented rollback procedure. PR validation must not publish to production.
- Obtain release authorization for the concrete preview before switching production.

Deliverables: reviewable release, verification results, compatibility report,
and rollback instructions. After an authorized deployment, smoke-check live routes.

### Phase 5: Ongoing Publishing

- Publish one coherent learning series before expanding topic taxonomy.
- Connect articles to relevant research and educational resources.
- Review navigation after enough content exists to observe real discovery problems.
- Add search, subscriptions, or richer interactive examples only for established needs.

## First Release Boundaries

Include: a coherent homepage, research and full publications, a dependable writing
workflow, content-backed education, background/contact, responsive reading,
basic discovery and sharing, and preserved inbound links.

Defer: accounts, paid courses, learning progress, comments, automatic translation,
newsletter provider integration, custom CMS, AI chat, elaborate animation, and
large interactive demos. RSS provides a subscription option without a new service.

## Decisions to Resolve Before Dependent Work

1. Who is the first education audience, and what should they learn to do?
2. Is the writing primarily Chinese, English, or mixed?
3. Which drafts, courses, workshops, or learning materials already exist?
4. Is academic recruitment, educational reach, or collaboration the near-term priority?

Inventory, URL mapping, publication cleanup proposals, and layout scaffolding can
proceed while these are unresolved. Public education claims, final homepage order,
and launch content depend on the answers.
