import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

/** Shortens text for a meta description, breaking at a word. */
export function excerpt(text: string, max = 160) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
}

export function legacyCollection(directory: string) {
  const root = resolve(process.cwd(), directory);
  return readdirSync(root)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(readFileSync(resolve(root, file), 'utf8'));
      const dateString = String(data.date);
      const date =
        data.date instanceof Date
          ? data.date
          : new Date(
              dateString.replace(
                /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
                (_, y, m, d) => `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T00:00:00Z`,
              ),
            );
      return {
        id: file.replace(/\.md$/, ''),
        date,
        html: marked.parse(content) as string,
        content: content.trim(),
        place: data.place as string | undefined,
        title: data.title as string | undefined,
        publication: data.publication as { href: string; label: string } | undefined,
        /** Plain-text summary for meta descriptions. */
        summary: content
          .trim()
          .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
          .replace(/[*_`#>]/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export const news = legacyCollection('_news');
export const talks = legacyCollection('_talks');
