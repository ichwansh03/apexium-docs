import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Ready to get started?</h2>
      <p className={styles.ctaSub}>
        Install apexium‑log locally or with Docker and start debugging like a pro
        in minutes.
      </p>
      <Link to="/docs/intro" className={styles.ctaButton}>
        <span className={styles.circle} />
        <span className={styles.text}>Get Started</span>
        <svg
          className={styles.arr1}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <svg
          className={styles.arr2}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </Link>
    </section>
  );
}
