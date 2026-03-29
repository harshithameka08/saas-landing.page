import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.image.png';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#7B22C8',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Background Blobs — matched to design ── */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '50%',
        background: 'radial-gradient(circle, #52108A 0%, transparent 70%)',
        zIndex: 1, filter: 'blur(50px)', opacity: 0.8
      }} />
      <div style={{
        position: 'absolute', top: '0%', right: '-5%', width: '45%', height: '60%',
        background: 'radial-gradient(circle, #52108A 0%, transparent 70%)',
        zIndex: 1, filter: 'blur(50px)', opacity: 0.8
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '5%', width: '60%', height: '70%',
        background: 'radial-gradient(circle, #4A0D8F 0%, transparent 70%)',
        zIndex: 1, filter: 'blur(60px)', opacity: 0.7
      }} />
      <div style={{
        position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%',
        background: 'radial-gradient(circle, rgba(168, 80, 255, 0.2) 0%, transparent 70%)',
        zIndex: 1, filter: 'blur(40px)'
      }} />

      {/* ── Main Content Container ── */}
      <div style={{
        maxWidth: 1140,
        margin: '0 auto',
        width: '100%',
        padding: '120px 36px 120px 36px', // Reduced top padding to condense space below navbar
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', // Give text more space
        alignItems: 'center', // Center vertically within the padded area
        gap: 40,
        position: 'relative',
        zIndex: 10,
        flex: 1,
        boxSizing: 'border-box',
      }}>
        {/* Left: Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h1 style={{
            margin: 0,
            fontSize: '48px',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#fff',
            letterSpacing: '-1.5px',
            marginBottom: '24px',
            maxWidth: '540px', // Prevent too much wrapping
          }}>
            Transform The Way You Manage Your Business —{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FF5B36 0%, #FF8040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block', // Ensure gradient applies cleanly
            }}>
              Smarter, Faster, Simpler.
            </span>
          </h1>

          <p style={{
            margin:0,
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '440px',
          }}>
            A powerful SaaS platform to automate, analyze, and scale your workflow with ease.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #FF5F40 0%, #FF8B4E 100%)',
              color: '#fff', border: 'none', borderRadius: '50px',
              padding: '13px 32px', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer', boxShadow: '0 6px 22px rgba(255, 80, 50, 0.45)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(255, 80, 50, 0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 22px rgba(255, 80, 50, 0.45)';
              }}
            >
              Start Free Trial
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff', border: '2px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '50px', padding: '11px 30px', fontSize: '15px', fontWeight: 600,
              cursor: 'pointer', backdropFilter: 'blur(10px)',
              transition: 'border-color 0.2s, background 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              View Demo
            </button>
          </div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <img
            src={heroImg}
            alt="Hero Illustration"
            style={{
              width: '100%', maxWidth: '600px',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.4))',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Wave Transition */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, zIndex: 15 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100px' }}>
          <path d="M0 120L1440 120L1440 40C1440 40 1080 120 720 40C360 -40 0 40 0 40L0 120Z" fill="#0D0D14"/>
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
