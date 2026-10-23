import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
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
const bibliography = await readFile('_bibliography/papers.bib', 'utf8');
await writeFile('public/papers.bib', bibliography.replace(/^---\s*\n---\s*\n/, ''));
await sharp('public/social-card.svg').png().toFile('public/social-card.png');
