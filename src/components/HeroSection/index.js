import React from 'react';
import Link from '@docusaurus/Link';
import TerminalMockup from '../TerminalMockup';
import styles from './styles.module.css';

const stats = [
  { number: '30+', label: 'Days Log Retention' },
  { number: '24/7', label: 'Auto Trace Flags' },
  { number: 'Real-Time', label: 'Metadata Tracking' },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>apexium‑log</h1>
          <p className={styles.heroSub}>
            Automate trace flags, persist logs beyond Salesforce limits, track
            coverage, and monitor metadata — all in one powerful toolkit.
          </p>
          <div className={styles.heroActions}>
            <Link to="/docs/intro" className={styles.btnAnimated}>
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
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, idx) => (
              <div className={styles.stat} key={idx}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <TerminalMockup />
        </div>
      </div>
    </section>
  );
}
