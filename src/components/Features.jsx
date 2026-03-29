import React from 'react';
import { motion } from 'framer-motion';

// Highly detailed pixel-perfect SVGs exactly mimicking the user's image icons
const IconSmartAuto = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="24" fill="#1C202E" /> {/* Very dark navy circle bg */}
    {/* Blue Cloud top left */}
    <path d="M16 23c0-2.2 1.8-4 4-4h2c0-3.3 2.7-6 6-6s6 2.7 6 6h1c2.2 0 4 1.8 4 4s-1.8 4-4 4H20c-2.2 0-4-1.8-4-4z" fill="#0EA5E9" />
    {/* Yellow robot face slightly offset to bottom right */}
    <rect x="20" y="25" width="14" height="10" rx="1.5" fill="#FBBF24" />
    {/* Robot Eyes (Orange) */}
    <rect x="23" y="27" width="2" height="3" rx="1" fill="#EA580C" />
    <rect x="29" y="27" width="2" height="3" rx="1" fill="#EA580C" />
    {/* Robot Mouth (Red) */}
    <rect x="24" y="32" width="6" height="1" fill="#EF4444" />
    {/* Small floating elements on the left */}
    <circle cx="15" cy="27" r="1.5" fill="#38BDF8" />
    <circle cx="14" cy="31" r="1" fill="#F87171" />
  </svg>
);

const IconAnalytics = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="24" fill="#1C202E" />
    {/* Bars going up right */}
    <rect x="18" y="24" width="4" height="10" rx="1" fill="#F87171" /> {/* Red */}
    <rect x="25" y="19" width="4" height="15" rx="1" fill="#0EA5E9" /> {/* Blue */}
    <rect x="32" y="13" width="4" height="21" rx="1" fill="#22C55E" /> {/* Green */}
    {/* White magnifying glass/circle crossing it */}
    <circle cx="20" cy="20" r="5" fill="#FFFFFF" opacity="0.9" />
    <circle cx="20" cy="20" r="3" fill="#3B82F6" />
    <path d="M24 24l-1-1" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
    {/* Tiny red gear indicator */}
    <circle cx="16" cy="16" r="1.5" fill="#EF4444" />
  </svg>
);

const IconSecurity = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="24" fill="#1C202E" />
    {/* Yellow Building */}
    <rect x="14" y="16" width="16" height="18" rx="1" fill="#F59E0B" />
    {/* Building windows */}
    <rect x="17" y="24" width="3" height="10" fill="#1E293B" />
    <rect x="24" y="24" width="3" height="10" fill="#1E293B" />
    <rect x="20" y="18" width="4" height="4" fill="#1E293B" />
    {/* Purple lock overlapping right side */}
    <circle cx="32" cy="22" r="6" fill="#8B5CF6" />
    <rect x="30" y="20" width="4" height="5" fill="#F1F5F9" rx="1" />
    <rect x="31" y="20" width="2" height="3" fill="#8B5CF6" />
  </svg>
);

const IconTeam = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="24" fill="#1C202E" />
    {/* Connections */}
    <path d="M24 18v12M18 24h12M20 20l8 8" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* Central yellow node */}
    <circle cx="24" cy="24" r="3.5" fill="#FBBF24" />
    {/* Satellite nodes */}
    <circle cx="24" cy="15" r="3" fill="#F97316" />
    <circle cx="33" cy="24" r="3" fill="#0EA5E9" />
    <circle cx="24" cy="33" r="3" fill="#EF4444" />
    <circle cx="15" cy="24" r="3" fill="#22C55E" />
  </svg>
);

const IconCloud = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="24" fill="#1C202E" />
    {/* Bright yellow sun/star peeking from left */}
    <circle cx="17" cy="27" r="4.5" fill="#FBBF24" />
    <path d="M17 21v2M13 27h2" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
    {/* Blue Cloud centrally positioned */}
    <path d="M15 25c0-2.8 2.2-5 5-5h2c0-4 3.3-7 7-7s7 3 7 7h1c2.8 0 5 2.2 5 5s-2.2 5-5 5H20c-2.8 0-5-2.2-5-5z" fill="#0EA5E9" />
    {/* Sparkle dots above */}
    <circle cx="21" cy="15" r="1.5" fill="#F87171" />
    <circle cx="34" cy="16" r="1" fill="#FBBF24" />
    <circle cx="38" cy="20" r="1.5" fill="#0EA5E9" />
  </svg>
);

const IconIntegration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="24" fill="#1C202E" />
    {/* Radiating lines */}
    <path d="M19 24H12M36 24h-7M24 19v-7M24 36v-7" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
    {/* Corner diagonal traces */}
    <path d="M18 18l-3-3M30 18l3-3M18 30l-3 3" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
    {/* Central chip */}
    <rect x="19" y="19" width="10" height="10" rx="2" fill="#FBBF24" />
    <circle cx="24" cy="24" r="1.5" fill="#1E293B" />
    {/* Outer coloured connection points */}
    <circle cx="12" cy="24" r="2.5" fill="#F8FAFC" />
    <circle cx="36" cy="24" r="2.5" fill="#F8FAFC" />
    <circle cx="24" cy="12" r="2.5" fill="#F8FAFC" />
    <circle cx="24" cy="36" r="2.5" fill="#F8FAFC" />
    <circle cx="15" cy="15" r="2" fill="#EF4444" />
    <circle cx="33" cy="15" r="2" fill="#F87171" />
  </svg>
);

const featuresData = [
  {
    icon: <IconSmartAuto />,
    title: 'Smart Automation',
    desc: 'Save hours every week with AI-driven task automation that learns from your workflow.',
  },
  {
    icon: <IconAnalytics />,
    title: 'Real-Time Analytics',
    desc: 'Get instant insights with beautiful dashboards and customizable reports.',
  },
  {
    icon: <IconSecurity />,
    title: 'Enterprise Security',
    desc: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
  },
  {
    icon: <IconTeam />,
    title: 'Team Collaboration',
    desc: 'Work together seamlessly with real-time updates and integrated communication.',
  },
  {
    icon: <IconCloud />,
    title: 'Cloud-First Design',
    desc: 'Access your work anywhere, anytime with our reliable cloud infrastructure.',
  },
  {
    icon: <IconIntegration />,
    title: 'Easy Integrations',
    desc: 'Connect with your favorite tools through our extensive integration library.',
  },
];

const Features = () => {
  return (
    <section id="features" style={{ background: '#111111', padding: '90px 0' }}>
      <div style={{
        maxWidth: 1100, // Reduced max-width for a tighter grid
        margin: '0 auto',
        padding: '0 24px',
        boxSizing: 'border-box'
      }}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 50 }}
        >
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '34px',
            fontWeight: 800,
            marginBottom: '12px',
            lineHeight: 1.2,
            letterSpacing: '-0.3px'
          }}>
            Powerful Features For Modern Teams
          </h2>
          <p style={{
            color: '#9CA3AF',
            fontSize: '15px',
            lineHeight: 1.6,
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Everything you need to streamline your workflow and boost<br/>productivity
          </p>
        </motion.div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px', // Reduced gap for a tighter feel
        }}>
          {featuresData.map((feature, index) => (
            <motion.div key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: '#1A1A1E', // Match exact dark shade
              borderRadius: '16px',
              padding: '28px 24px', // Significantly reduced padding around the content
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              transition: 'transform 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={e => {
               e.currentTarget.style.transform = 'translateY(-2px)';
               e.currentTarget.style.background = '#1F1F24';
             }}
            onMouseLeave={e => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.background = '#1A1A1E';
             }}
            >
              <div style={{ marginBottom: '20px' }}>
                {feature.icon}
              </div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '18px', // Smaller font size for tighter card
                fontWeight: 700,
                marginBottom: '10px', // Tighter spacing
                lineHeight: 1.3
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#9CA3AF',
                fontSize: '14px', // Adjusted to match scale
                lineHeight: 1.6,
                margin: 0
              }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Responsive Styles via a style block to handle grid wrapping */}
      <style>{`
        @media (max-width: 960px) {
          #features > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #features > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
