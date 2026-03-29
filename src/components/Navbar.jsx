import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.image.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'Pricing', 'Resources', 'About', 'Contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(90, 20, 170, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
    }}>
      <div style={{
        maxWidth: 1140,
        margin: '0 auto',
        padding: '16px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>

        {/* ── Logo ── */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src={logoImg}
            alt="FlowSaaS"
            style={{ height: 38, width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* ── Nav Links ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 36,
          flex: 1,
          justifyContent: 'center',
        }}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.88)'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <button style={{
          flexShrink: 0,
          background: 'linear-gradient(135deg, #FF5F40 0%, #FF8B55 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 50,
          padding: '11px 26px',
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 18px rgba(255,80,50,0.45)',
          transition: 'all 0.25s ease',
          letterSpacing: '0.01em',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,80,50,0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 18px rgba(255,80,50,0.45)';
          }}
        >
          Start Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
