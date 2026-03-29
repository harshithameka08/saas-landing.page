import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  // 1. Gmail Envelope
  <svg width="60" height="60" viewBox="0 0 48 48">
    <rect x="4" y="12" width="40" height="26" rx="3" fill="#E2E8F0" />
    <path d="M4 14l20 12 20-12v-2c0-1.6-1.4-3-3-3H7c-1.6 0-3 1.4-3 3v2z" fill="#EF4444" />
    <path d="M4 15l20 12 20-12" stroke="#EF4444" strokeWidth="4" strokeLinejoin="round" fill="none" />
    <path d="M4 38l14-12" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    <path d="M44 38L30 26" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // 2. Chat Bubbles
  <svg width="60" height="60" viewBox="0 0 48 48">
    {/* Back Bubble (Dark Blue) */}
    <path d="M12 18c0-3.3 2.7-6 6-6h14c4.4 0 8 3.6 8 8v10l5 5v-5h1c2.2 0 4-1.8 4-4V16c0-4.4-3.6-8-8-8H18c-4.4 0-8 3.6-8 8v2z" fill="#4338CA" />
    {/* Front Bubble (Light Blue) */}
    <path d="M12 20C12 15.6 15.6 12 20 12H30C34.4 12 38 15.6 38 20V30C38 34.4 34.4 38 30 38H18L10 44V38H8C3.6 38 0 34.4 0 30V20Z" fill="#3B82F6" transform="translate(4,4)" />
    <circle cx="18" cy="28" r="1.5" fill="#FFFFFF" />
    <circle cx="24" cy="28" r="1.5" fill="#FFFFFF" />
    <circle cx="30" cy="28" r="1.5" fill="#FFFFFF" />
    <circle cx="36" cy="28" r="1.5" fill="#FFFFFF" />
  </svg>,
  // 3. Clipboard
  <svg width="60" height="60" viewBox="0 0 48 48" style={{ overflow: 'visible' }}>
    <rect x="12" y="6" width="24" height="36" rx="2" fill="#FBBF24" />
    <rect x="15" y="12" width="18" height="28" fill="#F8FAFC" />
    <rect x="20" y="3" width="8" height="6" rx="1" fill="#94A3B8" />
    
    {/* Items */}
    <rect x="17" y="16" width="4" height="4" rx="1" fill="#34D399" />
    <path d="M18 18l1 1 1.5-2" stroke="#FFF" strokeWidth="1" fill="none" />
    <rect x="23" y="17" width="8" height="2" fill="#E2E8F0" />
    
    <rect x="17" y="24" width="4" height="4" rx="1" fill="#34D399" />
    <path d="M18 26l1 1 1.5-2" stroke="#FFF" strokeWidth="1" fill="none" />
    <rect x="23" y="25" width="8" height="2" fill="#E2E8F0" />
    
    <rect x="17" y="32" width="4" height="4" rx="1" fill="#34D399" />
    <path d="M18 34l1 1 1.5-2" stroke="#FFF" strokeWidth="1" fill="none" />
    <rect x="23" y="33" width="6" height="2" fill="#E2E8F0" />
    
    {/* Pencil */}
    <g transform="translate(24, 18) rotate(45)">
      <rect x="0" y="0" width="4" height="16" rx="1" fill="#F87171" />
      <polygon points="0,16 4,16 2,21" fill="#FCA5A5" />
      <polygon points="1.5,19.5 2.5,19.5 2,21" fill="#1E293B" />
    </g>
  </svg>,
  // 4. Folder
  <svg width="60" height="60" viewBox="0 0 48 48">
    <path d="M2 12C2 9.8 3.8 8 6 8H18L22 12H42C44.2 12 46 13.8 46 16V36C46 38.2 44.2 40 42 40H6C3.8 40 2 38.2 2 36V12Z" fill="#F59E0B" />
    <path d="M2 18C2 15.8 3.8 14 6 14H42C44.2 14 46 15.8 46 18V36C46 38.2 44.2 40 42 40H6C3.8 40 2 38.2 2 36V18Z" fill="#FBBF24" />
  </svg>,
  // 5. Monitor/Chart
  <svg width="60" height="60" viewBox="0 0 48 48">
    <path d="M20 36H28V42H34V44H14V42H20V36Z" fill="#94A3B8" />
    <rect x="2" y="6" width="44" height="30" rx="3" fill="#E2E8F0" />
    <rect x="4" y="8" width="40" height="24" rx="1" fill="#F8FAFC" />
    {/* Chart Bars */}
    <rect x="8" y="22" width="5" height="8" rx="1" fill="#0EA5E9" />
    <rect x="15" y="16" width="5" height="14" rx="1" fill="#FBBF24" />
    <rect x="22" y="20" width="5" height="10" rx="1" fill="#A855F7" />
    {/* Pie Chart */}
    <circle cx="34" cy="16" r="5" fill="#10B981" />
    <path d="M34 16L34 11A5 5 0 0 1 39 16Z" fill="#F87171" />
    {/* Line */}
    <path d="M10 14L16 10L24 14L32 24" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="10" cy="14" r="2" fill="#EF4444" />
    <circle cx="16" cy="10" r="2" fill="#EF4444" />
    <circle cx="24" cy="14" r="2" fill="#EF4444" />
  </svg>,
  // 6. Target
  <svg width="60" height="60" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="#EF4444" />
    <circle cx="24" cy="24" r="14" fill="#F8FAFC" />
    <circle cx="24" cy="24" r="8" fill="#EF4444" />
    <g transform="translate(24, 24) rotate(45)">
      <rect x="-1" y="-24" width="2" height="24" fill="#64748B" />
      <polygon points="-4,-28 0,-24 4,-28 0,-20" fill="#94A3B8" />
    </g>
  </svg>,
  // 7. Bell
  <svg width="60" height="60" viewBox="0 0 48 48">
    <path d="M24 6a10 10 0 0 0-10 10v10c0 2-2 4-2 6h24c0-2-2-4-2-6V16a10 10 0 0 0-10-10z" fill="#FACC15" />
    <circle cx="24" cy="36" r="4" fill="#EAB308" />
    <path d="M24 2V6" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
    <path d="M14 32h20" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16A12 12 0 0 0 6 28" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M36 16A12 12 0 0 1 42 28" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>,
  // 8. Smartphone
  <svg width="60" height="60" viewBox="0 0 48 48">
    <rect x="12" y="4" width="24" height="40" rx="4" fill="#E2E8F0" />
    <rect x="14" y="6" width="20" height="36" rx="2" fill="#F8FAFC" />
    <rect x="22" y="6" width="4" height="3" rx="1.5" fill="#94A3B8" />
    <rect x="17" y="12" width="4" height="4" rx="1" fill="#34D399" />
    <rect x="22" y="12" width="4" height="4" rx="1" fill="#FBBF24" />
    <rect x="27" y="12" width="4" height="4" rx="1" fill="#60A5FA" />
    <rect x="17" y="18" width="4" height="4" rx="1" fill="#EF4444" />
    <rect x="22" y="18" width="4" height="4" rx="1" fill="#A855F7" />
    <rect x="27" y="18" width="4" height="4" rx="1" fill="#F472B6" />
    <rect x="17" y="24" width="4" height="4" rx="1" fill="#8B5CF6" />
    <rect x="22" y="24" width="4" height="4" rx="1" fill="#14B8A6" />
    <rect x="27" y="24" width="4" height="4" rx="1" fill="#F87171" />
    <rect x="17" y="32" width="14" height="6" rx="2" fill="#CBD5E1" />
  </svg>
];

const Integrations = () => {
  return (
    <section id="integrations" style={{ background: '#111111', paddingTop: '20px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '32px',
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '-0.3px'
          }}>
            Integrates With Your Favorite Tools
          </h2>
          <p style={{
            color: '#A1A1AA',
            fontSize: '15px',
          }}>
            Integrates With Your Favorite Tools
          </p>
        </motion.div>

        {/* 4x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {icons.map((icon, i) => (
            <motion.div key={i} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              background: '#1A1A1E',
              border: '1px solid rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '1.2 / 1', // Maintains proportional box-model sizing 
              cursor: 'pointer',
              transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.background = '#1E1E24';
              e.currentTarget.style.borderColor = 'rgba(255, 69, 125, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = '#1A1A1E';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
            }}
            >
              {/* Scale icon wrapper slightly to compensate for box size */}
              <div style={{ transform: 'scale(1.2)' }}>
                {icon}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      <style>{`
        @media (max-width: 900px) {
          #integrations > div > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #integrations > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Integrations;
