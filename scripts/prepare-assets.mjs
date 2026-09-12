import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

await mkdir('public/assets/img', { recursive: true });
await cp('assets/pdf', 'public/assets/pdf', { recursive: true });
for (const image of ['prof_pic.jpg', 'parrot.png']) {
  await cp(`assets/img/${image}`, `public/assets/img/${image}`);
}
const bibliography = await readFile('_bibliography/papers.bib', 'utf8');
await writeFile('public/papers.bib', bibliography.replace(/^---\s*\n---\s*\n/, ''));
await sharp('public/social-card.svg').png().toFile('public/social-card.png');
