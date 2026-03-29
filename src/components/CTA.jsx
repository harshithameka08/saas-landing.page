import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" style={{
      /* Background gradient matching the image */
      background: 'linear-gradient(90deg, #5C32A8 0%, #76235C 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Decorative Circles matching the mockup */}
      {/* Top Left Circle */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '-100px',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: '#7042C4',
        opacity: 0.6,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Top Right Circle */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: '#832766',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Bottom Right Inner Circle */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '25%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: '#832766',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Content wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 32px'
        }}
      >
        
        {/* Heading */}
        <h2 style={{
          color: '#FFFFFF',
          fontSize: '44px',
          fontWeight: 800,
          lineHeight: 1.25,
          marginBottom: '24px',
          letterSpacing: '-0.5px'
        }}>
          Boost Productivity With FlowSaaS<br />
          Today
        </h2>
        
        {/* Subheading */}
        <p style={{
          color: '#F8FAFC', // Slightly off-white for visual hierarchy
          fontSize: '18px',
          fontWeight: 400,
          marginBottom: '40px',
          letterSpacing: '0.2px'
        }}>
          Start free for 14 days — no credit card needed.
        </p>

        {/* CTA Button */}
        <button style={{
          background: 'linear-gradient(90deg, #FF8966 0%, #F43F5E 100%)', // Light orange to pink/red
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 700,
          padding: '16px 36px',
          borderRadius: '30px', // Pill shape
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(244, 63, 94, 0.3)',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.opacity = '1';
        }}
        >
          Start Free Trial
        </button>

      </motion.div>
    </section>
  );
};

export default CTA;
