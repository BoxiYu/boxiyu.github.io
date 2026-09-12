import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access, mkdtemp, cp, symlink, writeFile, rm } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import matter from 'gray-matter';
import bibtex from 'bibtex-parse-js';

const root = process.cwd();
const dist = resolve(root, 'dist');
const exists = async (path) =>
  access(path).then(
    () => true,
    () => false,
  );
async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory() ? filesAt(join(directory, entry.name)) : join(directory, entry.name),
      ),
    )
  ).flat();
}
const htmlFiles = (await filesAt(dist)).filter((file) => file.endsWith('.html'));
const routeFile = (pathname) =>
  join(dist, decodeURIComponent(pathname), extname(pathname) ? '' : 'index.html');

test('academic service preserves every legacy year and committee role', async () => {
  const legacy = load(await readFile('_layouts/services.html', 'utf8'));
  const current = load(await readFile(join(dist, 'services/index.html'), 'utf8'));
  const normalize = (text) => text.replace(/\s+/g, ' ').trim();
  const expected = legacy('main section')
    .toArray()
    .map((section) => ({
      year: normalize(legacy(section).find('h2').text()),
      items: legacy(section)
        .find('li')
        .toArray()
        .map((item) => normalize(legacy(item).text())),
    }));
  const actual = current('.service-year')
    .toArray()
    .map((section) => ({
      year: normalize(current(section).find('h2').text()),
      items: current(section)
        .find('li')
        .toArray()
        .map((item) => normalize(current(item).text())),
    }));
  assert.deepEqual(actual, expected);
});

test('retains publication keys, authors, chronology, citations, and PDF files', async () => {
  const source = (await readFile('_bibliography/papers.bib', 'utf8')).replace(
    /^---\s*\n---\s*\n/,
    '',
  );
  const entries = bibtex.toJSON(source).filter((entry) => entry.citationKey);
  const arxivIds = entries.map((entry) => entry.entryTags.arxiv).filter(Boolean);
  assert.equal(
    new Set(arxivIds).size,
    arxivIds.length,
    'Different titles must not duplicate the same arXiv work',
  );
  const $ = load(await readFile(join(dist, 'publications/index.html'), 'utf8'));
  assert.equal($('.publication').length, entries.length);
  for (const entry of entries) {
    const publication = $(`[id="${entry.citationKey}"]`);
    assert.equal(publication.length, 1, `Missing publication ${entry.citationKey}`);
    assert.ok(
      publication
        .find('.resource-links a')
        .toArray()
        .some((link) => $(link).text() === 'Paper'),
      `Missing paper link for ${entry.citationKey}`,
    );
    assert.equal(publication.find('.authors strong').text(), 'Boxi Yu');
    for (const author of entry.entryTags.author.split(' and ')) {
      const [last, first] = author.split(', ');
      const display = author === 'others' ? 'et al.' : first ? `${first} ${last}` : last;
      assert.ok(publication.find('.authors').text().includes(display), `Missing author ${display}`);
    }
    assert.equal(
      bibtex.toJSON(publication.find('pre code').text())[0].citationKey,
      entry.citationKey,
    );
  }
  const years = $('.pub-year')
    .map((_, el) => Number($(el).text()))
    .get();
  assert.deepEqual(
    years,
    [...years].sort((a, b) => b - a),
  );
  for (const file of await readdir('assets/pdf')) {
    assert.deepEqual(
      await readFile(join(dist, 'assets/pdf', file)),
      await readFile(join('assets/pdf', file)),
    );
  }
});

test('generated pages have valid internal links, fragments, assets, and metadata', async () => {
  const failures = [];
  for (const file of htmlFiles) {
    const $ = load(await readFile(file, 'utf8'));
    assert.equal($('h1').length, 1, `${file}: expected one h1`);
    assert.ok($('html').attr('lang'), `${file}: missing language`);
    assert.ok($('meta[name="description"]').attr('content'), `${file}: missing description`);
    for (const code of $('.lab-code code').toArray()) {
      assert.match(
        $(code).text(),
        /def\s+largest\(numbers\):/,
        `${file}: Python token spacing lost`,
      );
    }
    const relative = file.slice(dist.length).replace(/index\.html$/, '');
    assert.equal($('link[rel="canonical"]').attr('href'), `https://boxiyu.github.io${relative}`);
    const ids = $('[id]')
      .map((_, el) => $(el).attr('id'))
      .get();
    assert.equal(new Set(ids).size, ids.length, `${file}: duplicate IDs`);
    for (const el of $(
      'a[href], link[href], script[src], img[src], meta[property="og:image"]',
    ).toArray()) {
      const raw = $(el).attr('href') || $(el).attr('src') || $(el).attr('content');
      if (!raw || /^(mailto:|data:|tel:)/.test(raw)) continue;
      const url = new URL(raw, `https://boxiyu.github.io${relative}`);
      if (url.origin !== 'https://boxiyu.github.io') continue;
      const target = routeFile(url.pathname);
      if (!(await exists(target))) {
        failures.push(`${relative}: missing ${raw}`);
        continue;
      }
      if (url.hash && target.endsWith('.html')) {
        const targetDoc = load(await readFile(target, 'utf8'));
        const id = decodeURIComponent(url.hash.slice(1));
        if (
          !targetDoc('[id]')
            .toArray()
            .some((node) => targetDoc(node).attr('id') === id)
        )
          failures.push(`${relative}: missing fragment ${raw}`);
      }
    }
  }
  assert.deepEqual(failures, []);
});

test('draft content is absent from every production artifact', async () => {
  const articleFiles = (await filesAt('src/content/writing')).filter((path) =>
    /\.mdx?$/.test(path),
  );
  const artifacts = (await filesAt(dist)).filter((file) => /\.(html|xml|json|js)$/.test(file));
  const combined = (await Promise.all(artifacts.map((file) => readFile(file, 'utf8')))).join('\n');
  for (const file of articleFiles) {
    const { data } = matter(await readFile(file, 'utf8'));
    if (data.draft) assert.ok(!combined.includes(data.title), `Draft title leaked: ${data.title}`);
  }
  assert.ok(!combined.includes('Editorial draft'));
  assert.ok(!combined.includes('Local editorial preview'));
});

test('legacy routes and feeds remain available without shipping template source', async () => {
  for (const path of [
    '/about/',
    '/publications/',
    '/services/',
    '/teaching/',
    '/talks/',
    '/talks/utboost/',
    '/news/',
    '/blog/',
    '/blog/2022/',
    '/blog/2023/',
    '/feed.xml',
    '/sitemap.xml',
    '/404.html',
  ]) {
    assert.ok(await exists(routeFile(path)), `Missing compatibility URL ${path}`);
  }
  for (const file of await readdir('_news')) {
    if (file.endsWith('.md')) assert.ok(await exists(routeFile(`/news/${file.slice(0, -3)}/`)));
  }
  for (const file of [
    'README.md',
    'Gemfile',
    'bibtex-ruby-6.1.0.gem',
    'jekyll-scholar-7.3.0.gem',
    '_planning/site-refinement-plan.md',
  ]) {
    assert.ok(!(await exists(join(dist, file))), `Repository artifact shipped: ${file}`);
  }
  assert.ok(await exists(join(dist, '.nojekyll')));
});

test(
  'publishing Markdown and MDX produces routes, series links, RSS, and sitemap',
  { timeout: 60000 },
  async () => {
    const fixture = await mkdtemp(join(tmpdir(), 'boxiyu-publishing-'));
    try {
      for (const path of [
        'src',
        '_bibliography',
        '_news',
        '_talks',
        'public',
        'astro.config.mjs',
        'package.json',
        'tsconfig.json',
      ]) {
        await cp(join(root, path), join(fixture, path), { recursive: true });
      }
      await symlink(join(root, 'node_modules'), join(fixture, 'node_modules'), 'dir');
      const contentRoot = join(fixture, 'src/content/writing');
      // Exercise real templates with published fixtures in an isolated checkout.
      for (const [id, extension, order] of [
        ['release-check-one', 'md', 1],
        ['release-check-two', 'mdx', 2],
      ]) {
        await writeFile(
          join(contentRoot, `${id}.${extension}`),
          `---\ntitle: ${id}\ndescription: A publishing integration fixture\npublishedAt: 2020-01-01\ntopics: [Verification]\naudience: developers\ndraft: false\nfeatured: true\nseries: Release checks\norder: ${order}\n---\n\n## A real heading\n\nA published article with [research](/research/).\n`,
        );
      }
      await writeFile(
        join(contentRoot, 'future-check.md'),
        '---\ntitle: Future fixture must stay private\ndescription: Future scheduled article\npublishedAt: 2999-01-01\ntopics: [Verification]\naudience: developers\ndraft: false\n---\nFuture content.\n',
      );
      const astroPackage = JSON.parse(
        await readFile(join(root, 'node_modules/astro/package.json'), 'utf8'),
      );
      const cli = join(root, 'node_modules/astro', astroPackage.bin.astro);
      execFileSync(process.execPath, [cli, 'build'], {
        cwd: fixture,
        env: { ...process.env, CONTENT_PREVIEW: 'true', ASTRO_TELEMETRY_DISABLED: '1' },
        stdio: 'pipe',
        timeout: 45000,
      });
      const output = join(fixture, 'dist');
      const first = load(
        await readFile(join(output, 'writing/release-check-one/index.html'), 'utf8'),
      );
      assert.equal(first('h1').text(), 'release-check-one');
      assert.equal(first('#a-real-heading').length, 1);
      assert.ok(first('a[href="/writing/release-check-two/"]').length > 0);
      assert.equal(first('meta[name="robots"]').length, 0);
      assert.ok(
        (await readFile(join(output, 'feed.xml'), 'utf8')).includes('/writing/release-check-two/'),
      );
      assert.ok(
        (await readFile(join(output, 'sitemap.xml'), 'utf8')).includes(
          '/writing/release-check-one/',
        ),
      );
      assert.ok(!(await exists(join(output, 'writing/future-check/index.html'))));
      assert.ok(
        !(await exists(join(output, 'writing/passing-tests-is-not-correctness/index.html'))),
      );
      assert.ok(!(await readFile(join(output, 'feed.xml'), 'utf8')).includes('Future fixture'));
    } finally {
      await rm(fixture, { recursive: true, force: true });
    }
  },
);
