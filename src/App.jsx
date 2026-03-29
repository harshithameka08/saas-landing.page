import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TeamSection from './components/TeamSection';
import Comparison from './components/Comparison';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#0D0D14', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TeamSection />
      <Comparison />
      <Integrations />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
