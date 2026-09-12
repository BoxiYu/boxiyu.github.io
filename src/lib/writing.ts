import { getCollection } from 'astro:content';

// Preview drafts only in local development; production output always excludes them.
export const previewDrafts = import.meta.env.DEV && import.meta.env.CONTENT_PREVIEW === 'true';

export async function getWriting() {
  const all = await getCollection('writing');
  const seriesPositions = new Set<string>();
  for (const entry of all) {
    if (entry.data.series) {
      const position = `${entry.data.series}:${entry.data.order}`;
      if (seriesPositions.has(position))
        throw new Error(`Duplicate article position in series: ${position}`);
      seriesPositions.add(position);
    }
    if (
      entry.data.translationOf &&
      !all.some((other) => other.id === entry.data.translationOf && other.id !== entry.id)
    ) {
      throw new Error(`Invalid translation reference in ${entry.id}`);
    }
  }
  const entries = all.filter(
    ({ data }) => previewDrafts || (!data.draft && data.publishedAt.getTime() <= Date.now()),
  );
  return entries.sort(
    (a, b) =>
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime() || a.id.localeCompare(b.id),
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
