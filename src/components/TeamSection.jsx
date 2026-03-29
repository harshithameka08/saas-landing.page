import React from 'react';
import { motion } from 'framer-motion';
import teamImg from '../assets/team.png';

const benefits = [
  'Rapid deployment in minutes',
  'Affordable pricing for early-stage teams',
  'Scalable infrastructure that grows with you',
  'Built-in analytics and reporting'
];

const TeamSection = () => {
  return (
    <section id="team" style={{ background: '#111111', paddingTop: '20px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px' }}>
        
        {/* Top Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            Built For Every Team
          </h2>
          <p style={{
            color: '#A1A1AA',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Experience the power of intelligent workflow automation
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          alignItems: 'center',
          gap: '80px'
        }}>
          
          {/* Left - Content List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '-0.3px'
            }}>
              Perfect for Growing Startups
            </h3>
            <p style={{
              color: '#A1A1AA',
              fontSize: '15px',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '440px'
            }}>
              Track growth and automate reports so you can focus on building<br/>
              your product and scaling your business.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {benefits.map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%',
                    background: '#6366F1', // Bright blue/indigo background for the check
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5L5 9L9.5 3.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ 
                    fontSize: '16px', 
                    fontWeight: 700, 
                    color: '#FFFFFF' 
                  }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <img 
              src={teamImg} 
              alt="Team Illustration" 
              style={{
                width: '100%',
                display: 'block',
                position: 'relative',
                zIndex: 2,
              }} 
            />
          </motion.div>

        </div>
      </div>
      
      {/* Responsive scaling for mobile */}
      <style>{`
        @media (max-width: 960px) {
          #team > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
