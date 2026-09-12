import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { news, talks } from '../lib/legacy';

export async function GET() {
  const entries = await getCollection(
    'writing',
    ({ data }) => !data.draft && data.publishedAt.getTime() <= Date.now(),
  );
  const paths = [
    '/',
    '/research/',
    '/publications/',
    '/writing/',
    '/education/',
    '/about/',
    '/services/',
    '/teaching/',
    '/talks/',
    '/news/',
    ...news.map((item) => `/news/${item.id}/`),
    ...talks.map((item) => `/talks/${item.id}/`),
    ...entries.map((entry) => `/writing/${entry.id}/`),
  ];
  const xmlEscape = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${xmlEscape(new URL(path, site.url).href)}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
