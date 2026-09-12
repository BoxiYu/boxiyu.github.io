import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET() {
  const entries = (
    await getCollection(
      'writing',
      ({ data }) => !data.draft && data.publishedAt.getTime() <= Date.now(),
    )
  ).sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
  return rss({
    title: 'Boxi Yu - Writing',
    description: site.description,
    site: site.url,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/writing/${entry.id}/`,
    })),
    customData: '<language>en</language>',
  });
}
