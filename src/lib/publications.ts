import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import bibtex from 'bibtex-parse-js';

const source = readFileSync(resolve(process.cwd(), '_bibliography/papers.bib'), 'utf8').replace(
  /^---\s*\n---\s*\n/,
  '',
);
const clean = (value = '') =>
  value.replace(/\\%/g, '%').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
const topics: Record<string, string> = {
  CodeAgents: 'Code agents',
  AutomatedTesting: 'Automated testing',
  TrustworthyAI: 'Trustworthy AI',
  AIOps: 'AIOps',
  MultimodalAI: 'Multimodal AI',
  ComputerVision: 'Computer vision',
};
const localResource = (value: string) =>
  /^https?:\/\//.test(value) ? value : `/assets/pdf/${value}`;

export const publications = bibtex
  .toJSON(source)
  .filter((entry) => entry.citationKey)
  .map((entry) => {
    const tags = entry.entryTags;
    const links: { label: string; href: string }[] = [];
    if (tags.pdf) links.push({ label: 'Paper', href: localResource(tags.pdf) });
    else if (tags.html || tags.url) links.push({ label: 'Paper', href: tags.html || tags.url });
    else if (tags.arxiv)
      links.push({ label: 'Paper', href: `https://arxiv.org/abs/${tags.arxiv}` });
    if (tags.code) links.push({ label: 'Code', href: tags.code });
    if (tags.slides) links.push({ label: 'Slides', href: localResource(tags.slides) });
    return {
      id: entry.citationKey,
      title: clean(tags.title),
      year: Number(tags.year),
      authors: clean(tags.author)
        .split(' and ')
        .map((name) => {
          if (name === 'others') return 'et al.';
          const [last, first] = name.split(', ');
          return first ? `${first} ${last}` : name;
        }),
      venue: clean(tags.abbr || tags.journal || tags.booktitle),
      topic: topics[tags.topic] || tags.topic,
      abstract: clean(tags.abstract),
      links,
      bibtex: bibtex.toBibtex([entry]),
    };
  })
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

if (new Set(publications.map((p) => p.id)).size !== publications.length)
  throw new Error('Duplicate publication keys.');
if (publications.some((p) => !p.title || !Number.isFinite(p.year)))
  throw new Error('Invalid publication metadata.');
