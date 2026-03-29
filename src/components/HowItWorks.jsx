import React from 'react';
import { motion } from 'framer-motion';
import systemImg from '../assets/system.png';

const steps = [
  {
    num: '1',
    title: 'Intuitive Dashboard',
    desc: <>Monitor all your key metrics in one beautiful,<br/>customizable interface.</>,
  },
  {
    num: '2',
    title: 'Smart Workflows',
    desc: <>Automate repetitive tasks and focus on what matters<br/>most.</>,
  },
  {
    num: '3',
    title: 'Real-Time Collaboration',
    desc: <>Work together with your team in real-time, from<br/>anywhere.</>,
  },
];

const HowItWorks = () => {
  return (
    <section id="action" style={{ background: '#111111', paddingTop: '20px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px' }}>
        
        {/* Section Header */}
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
            See It In Action
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

        {/* Content Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', 
          alignItems: 'center', 
          gap: '80px' 
        }}>
          
          {/* Left - System Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <img 
              src={systemImg} 
              alt="System Graphic" 
              style={{
                width: '100%',
                display: 'block',
                position: 'relative',
                zIndex: 2,
                /* Using a softer drop shadow to match the flat 3D illustration style */
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.5))',
              }} 
            />
          </motion.div>

          {/* Right - Steps List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((step, i) => (
              <motion.div key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                alignItems: 'center',
                gap: '24px',
                background: '#17171A', // Dark subtle background like in image
                border: '1px solid rgba(255, 69, 125, 0.15)', // Faint pinkish border outline
                borderRadius: '16px',
                padding: '28px 32px',
                transition: 'transform 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={e => {
                 e.currentTarget.style.transform = 'translateY(-2px)';
                 e.currentTarget.style.background = '#1C1C22';
               }}
              onMouseLeave={e => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.background = '#17171A';
               }}
              >
                {/* Number Badge */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: 'linear-gradient(135deg, #FF7B8B 0%, #E83563 100%)', // Match the pink circle in the image
                  borderRadius: '50%',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '18px', 
                  fontWeight: 800, 
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(232, 53, 99, 0.3)'
                }}>
                  {step.num}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: 700, 
                    marginBottom: '8px', 
                    color: '#FFFFFF',
                    lineHeight: 1.2
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14.5px', 
                    color: '#9CA3AF', 
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #action > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
