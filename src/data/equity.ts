/**
 * Free and open education work, shown in the homepage "Education equity"
 * section. Boxi Math is the public K-12 maths site; Boxi Learn extends the
 * same stage-based approach to other school subjects; animind is the open
 * toolchain the maths videos are made with.
 *
 * `media` leads each card from assets/video/clips/: 'clip' is <id>.mp4 (an
 * 8-second muted loop) with <id>-poster.jpg; 'still' is the poster alone.
 */
export const equityProjects = [
  {
    id: 'boxi-math',
    media: 'clip',
    name: 'Boxi Math',
    verb: 'Learn',
    status: '39 videos published',
    description:
      'Short K–12 maths videos in English and Chinese. Each answers one “why” and draws it so you can see it. Organised by stage rather than school year, with the matching year in China, the US, the UK, and Singapore.',
    detail: 'Free · CC BY 4.0 · English & 中文',
    href: 'https://boxi-math.github.io/en/',
    cta: 'Visit the site',
  },
  {
    id: 'boxi-learn',
    media: 'still',
    name: 'Boxi Learn',
    verb: 'Try',
    status: '109 lessons in 9 subjects',
    description:
      'The same stage-based approach for the other K–12 subjects, from Chinese and English to physics, history, and computing. Each subject starts from a few core ideas, and every lesson is something to try with your own hands.',
    detail: 'Free · CC BY-SA 4.0 · English & 中文',
    href: 'https://boxi-learn.github.io/en/',
    cta: 'Visit the site',
  },
  {
    id: 'animind',
    media: 'clip',
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
