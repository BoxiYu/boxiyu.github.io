import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

await mkdir('public/assets/img', { recursive: true });
await cp('assets/pdf', 'public/assets/pdf', { recursive: true });
await cp('assets/img/papers', 'public/assets/img/papers', { recursive: true });
for (const image of ['prof_pic.jpg', 'parrot.png']) {
  await cp(`assets/img/${image}`, `public/assets/img/${image}`);
}
await cp(
  'assets/img/oneai-math-education-poster.jpg',
  'public/assets/img/oneai-math-education-poster.jpg',
);
await cp(
  'assets/img/oneai-math-education-builder-poster.jpg',
  'public/assets/img/oneai-math-education-builder-poster.jpg',
);
await mkdir('public/assets/video', { recursive: true });
await cp('assets/video/oneai-math-education.mp4', 'public/assets/video/oneai-math-education.mp4');
await cp('assets/img/frontiercs2-poster.jpg', 'public/assets/img/frontiercs2-poster.jpg');
await cp('assets/video/frontiercs2.mp4', 'public/assets/video/frontiercs2.mp4');
await cp('assets/video/courses', 'public/assets/video/courses', { recursive: true });
// 8-second homepage loops for representative work, OneAI, and Education equity.
await cp('assets/video/clips', 'public/assets/video/clips', { recursive: true });
// One-minute paper videos on /research/ (src/data/site.ts: paperVideos), each with a poster.
for (const file of await readdir('assets/video')) {
  const id = file.match(/^paper-(.+)\.mp4$/)?.[1];
  if (!id) continue;
  await cp(`assets/video/${file}`, `public/assets/video/${file}`);
  await cp(`assets/img/paper-${id}-poster.jpg`, `public/assets/img/paper-${id}-poster.jpg`);
}
const bibliography = await readFile('_bibliography/papers.bib', 'utf8');
await writeFile('public/papers.bib', bibliography.replace(/^---\s*\n---\s*\n/, ''));
await sharp('public/social-card.svg').png().toFile('public/social-card.png');
