import React from 'react';
import styles from './styles.module.css';

const features = [
  {
    icon: '🗄️',
    title: 'Persistent Logs',
    description:
      'Keep debug history beyond Salesforce\'s 24‑hour retention. Search, filter, and export with ease.',
  },
  {
    icon: '⏰',
    title: 'Auto‑Scheduling',
    description:
      'Schedule trace flags daily, weekly, or on a custom recurrence. Full history of past and upcoming traces.',
  },
  {
    icon: '📊',
    title: 'Coverage Monitoring',
    description:
      'Track Apex test coverage trends over time. Get alerts when coverage drops below your threshold.',
  },
  {
    icon: '🔍',
    title: 'Metadata Tracking',
    description:
      'Audit changes to Apex classes, triggers, VF pages, and more. See who changed what and when.',
  },
  {
    icon: '🖥️',
    title: 'CLI & Web UI',
    description:
      'Full‑featured CLI with auto‑completion, plus an optional web dashboard for visual monitoring.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Ready',
    description:
      'OAuth 2.0 authentication, encrypted secrets, and role‑based access control (coming soon).',
  },
];

function FeatureCard({icon, title, description}) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.icon}>{icon}</span>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Why apexium‑log?</h2>
        <p className={styles.sectionSub}>
          Everything you need to master Salesforce debugging, all in one place.
        </p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
