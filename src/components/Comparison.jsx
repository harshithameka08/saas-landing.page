import React from 'react';
import { motion } from 'framer-motion';

const rows = [
  { feature: 'AI-powered automation', us: true, them: false },
  { feature: 'Unlimited projects', us: true, them: false },
  { feature: '24/7 support', us: true, them: null },
  { feature: 'No extra fees', us: true, them: false },
  { feature: 'Real-time collaboration', us: true, them: false },
];

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Cross = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Comparison = () => {
  return (
    <section id="comparison" style={{ background: '#111111', paddingTop: '20px', paddingBottom: '100px', position: 'relative' }}>
      {/* Background dashed grid pattern (subtle) */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.1,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 0
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '-0.3px'
          }}>
            Why Choose FlowSaaS?
          </h2>
          <p style={{
            color: '#9CA3AF',
            fontSize: '16px',
            lineHeight: 1.6,
          }}>
            See how we compare to traditional solutions
          </p>
        </motion.div>

        {/* Comparison Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#1A1A1E',
          borderRadius: '16px',
          border: '1px solid rgba(255, 69, 125, 0.25)', // Subtle pink-red boundary
          padding: '40px 48px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        }}>
          
          {/* Table Header Row */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'minmax(0, 1fr) 200px 200px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#F3F4F6' }}>Feature</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#F3F4F6', textAlign: 'center' }}>FlowSaaS</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#F3F4F6', textAlign: 'center' }}>Others</div>
          </div>

          {/* Table Body Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{
              display: 'grid', 
              gridTemplateColumns: 'minmax(0, 1fr) 200px 200px',
              padding: '24px 0',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
              transition: 'background 0.3s ease',
            }}>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: 600, 
                color: '#FFFFFF', 
                alignSelf: 'center' 
              }}>
                {row.feature}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {row.us && <Check />}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {row.them === false && <Cross />}
                {row.them === null && null /* Explicit blank entry */}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #comparison > div > div:last-child {
            padding: 30px 24px !important;
          }
          #comparison > div > div:last-child > div {
            grid-template-columns: minmax(0, 1fr) 90px 90px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Comparison;
