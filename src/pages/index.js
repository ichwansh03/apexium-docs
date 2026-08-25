import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import FeaturesGrid from '@site/src/components/FeaturesGrid';
import CTASection from '@site/src/components/CTASection';

export default function Home() {
  return (
    <Layout
      title="apexium‑log · Salesforce Debugging Powerhouse"
      description="Automate trace flags, persist logs beyond Salesforce limits, track coverage, and monitor metadata — all in one powerful toolkit."
    >
      <HeroSection />
      <main style={{padding: '0 2rem', maxWidth: '1100px', margin: '0 auto'}}>
        <FeaturesGrid />
        <CTASection />
      </main>
    </Layout>
  );
}
