import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 9L7 13L15 5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" style={{ background: '#111111', paddingTop: '20px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '-0.3px',
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{
            color: '#9CA3AF',
            fontSize: '16px',
            lineHeight: 1.6,
          }}>
            Choose the plan that fits your needs
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '16px', 
          marginBottom: '60px' 
        }}>
          <span style={{ fontSize: '16px', fontWeight: 500, color: '#FFFFFF' }}>Monthly</span>
          
          <button 
            onClick={() => setAnnual(!annual)}
            style={{
              width: '48px', 
              height: '24px', 
              borderRadius: '24px',
              background: '#FF457D', // Pink switch bg
              position: 'relative', 
              cursor: 'pointer',
              border: 'none',
              transition: 'background 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
            }}
          >
            <div style={{
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              background: '#1A1A1E', // Dark knob
              position: 'absolute',
              left: annual ? 'calc(100% - 22px)' : '2px',
              transition: 'left 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
            }} />
          </button>
          
          <span style={{ fontSize: '16px', fontWeight: 500, color: '#FFFFFF' }}>
            Annual <span style={{ color: '#22C55E' }}>(Save 20%)</span>
          </span>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', alignItems: 'stretch' }}>
          
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
            background: '#1A1A1E',
            borderRadius: '16px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '32px' }}>Basic</h3>
            
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '20px', fontWeight: 500, color: '#9CA3AF' }}>$29/month</span>
            </div>
            
            <p style={{ color: '#9CA3AF', fontSize: '16px', marginBottom: '40px' }}>
              Perfect for small teams
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '48px', display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Up to 5 team members</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>10 GB storage</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Basic analytics</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Email support</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Core integrations</span>
              </li>
            </ul>
            
            <button style={{
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              background: '#16161A',
              border: '1px solid rgba(255, 69, 125, 0.4)',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1E1E24'}
            onMouseLeave={e => e.currentTarget.style.background = '#16161A'}
            >
              Get Started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            {/* Most Popular Badge overlay wrapper */}
            {/* Outline Gradient effect through a padded wrapper layer */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 69, 125, 0.7), rgba(99, 102, 241, 0.2))',
              borderRadius: '16px',
              padding: '1px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(255, 69, 125, 0.1)',
            }}>
              <div style={{
                background: '#18181C', // Dark background of pro card
                borderRadius: '15px',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
              }}>
                
                {/* Badge placed directly on the top border */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #60A5FA 0%, #F472B6 100%)', // Blue to Pink gradient match
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '6px 20px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                  zIndex: 10,
                }}>
                  Most Popular
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '32px' }}>Pro</h3>
                
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 500, color: '#9CA3AF' }}>$79/month</span>
                </div>
                
                <p style={{ color: '#9CA3AF', fontSize: '16px', marginBottom: '40px' }}>
                  For growing businesses
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '48px', display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Up to 25 team members</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>100 GB storage</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Advanced analytics</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Priority support</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>All integrations</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check /> <span style={{ color: '#9CA3AF', fontSize: '15px' }}>Custom workflows</span>
                  </li>
                </ul>
                
                <button style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '8px',
                  background: 'linear-gradient(90deg, #FF7B72, #FF457D)', // Red/Pink to Orange-Pink gradient
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'opacity 0.3s',
                  boxShadow: '0 6px 16px rgba(255, 69, 125, 0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Mobile formatting */}
      <style>{`
        @media (max-width: 800px) {
          #pricing > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
