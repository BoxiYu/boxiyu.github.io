// Scroll reveals and course clips. Everything is visible without this script;
// it only hides blocks that start below the fold, then fades them in as they
// scroll into view. Visitors who ask for reduced motion get the static page.
const REVEAL = [
  '.home-section-head',
  '.home-intro',
  '.map-branch',
  '.map-empirical',
  '.research-item',
  '.course-steps li',
  '.course-card',
  '.course-grid > div',
  '.applied-feature',
  '.pacific-card',
  '.equity-invite',
  '.home-latest .news-list li',
  '.research-theme',
  '.related-research',
  '.teaching-grid article',
  '.mentee-list li',
].join(',');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canObserve = 'IntersectionObserver' in window;

if (!reduceMotion && canObserve) {
  const targets = [...document.querySelectorAll<HTMLElement>(REVEAL)];
  const set = new Set(targets);
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove('reveal-pre');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  for (const el of targets) {
    // Skip anything already on screen, so nothing visible ever blinks out.
    if (el.getBoundingClientRect().top < innerHeight) continue;
    // Never nest reveals: an element inside a revealing block moves with it.
    if (targets.some((other) => other !== el && other.contains(el))) continue;
    const siblings = [...(el.parentElement?.children ?? [])].filter((child) =>
      set.has(child as HTMLElement),
    );
    const index = Math.max(0, siblings.indexOf(el));
    el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 80}ms`);
    el.classList.add('reveal', 'reveal-pre');
    observer.observe(el);
  }
}

// Course clips: play muted loops only while on screen.
const clips = document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]');
if (!reduceMotion && canObserve && clips.length) {
  const clipObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.muted = true;
          video.preload = 'auto';
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    },
    { threshold: 0.35 },
  );
  clips.forEach((clip) => clipObserver.observe(clip));
}
