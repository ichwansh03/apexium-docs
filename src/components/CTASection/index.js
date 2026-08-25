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
        Get Started →
      </Link>
    </section>
  );
}
