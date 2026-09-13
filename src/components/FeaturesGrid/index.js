import React from 'react';
import styles from './styles.module.css';

const features = [
  {
    icon: '🚀',
    title: 'Centralized Debugging',
    description:
      'Manage, search, download, and delete Salesforce Debug Logs from a single interface, making debugging more efficient.',
  },
  {
    icon: '⏰',
    title: 'Extended Recurring Trace Flags',
    description:
      'Automatically extend user trace sessions beyond Salesforce\'s 24-hour Trace Flag limitation.',
  },
  {
    icon: '🧩',
    title: 'Report-SOQL Conversion',
    description:
      'Translate a Salesforce Report\'s filters and columns into an equivalent SOQL query automatically, useful for reproducing report logic in code or debugging data discrepancies.',
  },
  {
    icon: '🔍',
    title: 'Metadata Tracking',
    description:
      'Detect changes in Apex Classes and Triggers through scheduled polling, with a timeline view and body diff comparison via MinIO-stored snapshots. History records include who made the change and when.',
  },
  {
    icon: '♻️',
    title: 'Trace Job History & Adoption',
    description:
      'Browse all past and active Trace Jobs, and adopt any existing Salesforce TraceFlag (created manually via Setup) as a managed job.',
  },
  {
    icon: '🎯',
    title: 'Built for Salesforce Developers',
    description:
      'Who need an all-in-one solution for debugging, monitoring, and tracking Apex code changes.',
  },
];

function FeatureCard({icon, title, description}) {
  return (
    <div className={styles.featureCard}>
      <h4 className={styles.defaultTitle}>{title}</h4>
      <div className={styles.cardHover}>
        <span className={styles.hoverIcon}>{icon}</span>
        <h4 className={styles.hoverTitle}>{title}</h4>
        <p className={styles.hoverDescription}>{description}</p>
      </div>
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
