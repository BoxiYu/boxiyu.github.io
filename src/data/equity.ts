/**
 * Free and open education work, shown in the homepage "Education equity"
 * section. Boxi Math is the public K-12 maths site; animind is the open
 * toolchain its videos are made with.
 */
export const equityProjects = [
  {
    id: 'boxi-math',
    name: 'Boxi Math',
    verb: 'Learn',
    status: 'First videos in production',
    description:
      'Short K–12 maths videos in English and Chinese. Each answers one “why” and draws it so you can see it. Organised by stage rather than school year, with the matching year in China, the US, the UK, and Singapore.',
    detail: 'Free · CC BY 4.0 · English & 中文',
    href: 'https://boxi-math.github.io/',
    cta: 'Visit the site',
  },
  {
    id: 'animind',
    name: 'animind',
    verb: 'Make',
    status: 'Open source',
    description:
      'The tools behind the videos: a format for describing a teaching scene and a vector animation engine, so any teacher can make videos like these without a studio.',
    detail: 'MIT · Python',
    href: 'https://github.com/animind-ai',
    cta: 'View on GitHub',
  },
] as const;
