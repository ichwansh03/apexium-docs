import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

/**
 * Every PNG placed in `static/img` is picked up automatically
 * (served as `/img/*.png`, copied into `build/img` on build).
 */
const pngContext = require.context('../../../static/img', false, /\.png$/);

const titles = {
  apex_class: 'Apex Class',
  debug_levels: 'Debug Levels',
  logs: 'Debug Logs',
  metadata_class: 'Metadata Class',
  reports: 'Reports',
  soql_reports: 'SOQL Reports',
  trace_man: 'Trace Job · Manager',
  trace_user: 'Trace Job · User',
  users: 'Users',
};

function prettify(name) {
  return name
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const slides = pngContext.keys().map((key) => {
  const name = key.replace(/^\.\//, '').replace(/\.png$/, '');
  const title = titles[name] ?? prettify(name);
  const mod = pngContext(key);
  const src = typeof mod === 'string' ? mod : mod.default;
  return {src, title, alt: `apexium-log screenshot — ${title}`};
});

const AUTOPLAY_MS = 5000;

export default function GallerySlider() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next) => {
    const track = trackRef.current;
    if (!track || slides.length === 0) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    const el = track.children[clamped];
    if (!el) return;
    const left =
      track.scrollLeft +
      el.getBoundingClientRect().left -
      track.getBoundingClientRect().left;
    track.scrollTo({left, behavior: 'smooth'});
    setIndex(clamped);
  }, []);

  /* Track active slide while user swipes/scrolls. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        let closest = 0;
        let min = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const delta = Math.abs(
            child.getBoundingClientRect().left - trackRect.left,
          );
          if (delta < min) {
            min = delta;
            closest = i;
          }
        });
        setIndex(closest);
      });
    };
    track.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* Autoplay — paused on hover/focus, disabled for reduced-motion users. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || slides.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    let timer = null;
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const start = () => {
      stop();
      timer = setInterval(() => {
        const next = (index + 1) % slides.length;
        const el = track.children[next];
        if (!el) return;
        const left =
          track.scrollLeft +
          el.getBoundingClientRect().left -
          track.getBoundingClientRect().left;
        track.scrollTo({left, behavior: 'smooth'});
        setIndex(next);
      }, AUTOPLAY_MS);
    };
    const pause = () => stop();
    start();
    track.addEventListener('pointerenter', pause);
    track.addEventListener('pointerleave', start);
    track.addEventListener('focusin', pause);
    track.addEventListener('focusout', start);
    return () => {
      stop();
      track.removeEventListener('pointerenter', pause);
      track.removeEventListener('pointerleave', start);
      track.removeEventListener('focusin', pause);
      track.removeEventListener('focusout', start);
    };
  }, [index]);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1);
    }
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className={styles.gallerySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Inside apexium‑log</h2>
        <p className={styles.sectionSub}>
          A quick tour of the interfaces of Apexium-log.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <div
          ref={trackRef}
          className={styles.track}
          role="region"
          aria-roledescription="carousel"
          aria-label="apexium-log screenshots"
          tabIndex={0}
          onKeyDown={onKeyDown}>
          {slides.map((slide, i) => (
            <figure
              key={slide.src}
              className={styles.slide}
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}>
              <div className={styles.frame}>
                <img
                  className={styles.image}
                  src={slide.src}
                  alt={slide.alt}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className={styles.caption}>{slide.title}</figcaption>
              </div>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.prev}`}
          aria-label="Previous screenshot"
          onClick={() => goTo(index - 1)}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.next}`}
          aria-label="Next screenshot"
          onClick={() => goTo(index + 1)}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              fill="currentColor"
              d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </svg>
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.dots} role="tablist" aria-label="Choose screenshot">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to screenshot ${i + 1}: ${slide.title}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className={styles.counter} aria-live="polite">
          {index + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
}
