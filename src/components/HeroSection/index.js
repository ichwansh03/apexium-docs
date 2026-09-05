import React from 'react';
import Link from '@docusaurus/Link';
import TerminalMockup from '../TerminalMockup';
import styles from './styles.module.css';

const stats = [
  { number: '∞', label: 'Persistent Logs' },
  { number: '24/7', label: 'Auto‑Scheduling' },
  { number: '87%', label: 'Avg. Coverage' },
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
            <Link to="/docs/intro" className={styles.btnWhite}>
              Get Started →
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
