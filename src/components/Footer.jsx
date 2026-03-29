import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.image.png';

const Footer = () => {
  return (
    <footer style={{
      background: '#0F0F0F', // Exactly matching the dark theme of the snapshot
      paddingTop: '60px',
      paddingBottom: '30px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 32px'
      }}>
        
        {/* Main 3 Column Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '60px',
          marginBottom: '50px',
        }}>
          
          {/* Column 1: Brand & Quote */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
              <img src={logoImg} alt="FlowSaaS" style={{ height: '42px', objectFit: 'contain' }} />
            </div>
            <p style={{
              color: '#9CA3AF',
              fontSize: '14px',
              lineHeight: 1.6,
              margin: 0
            }}>
              "Empowering teams to automate, analyze, and grow smarter."
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 style={{
              color: '#FFFFFF',
              fontSize: '20px',
              fontWeight: 800,
              marginBottom: '36px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              QUICK NAVIGATION
            </h3>
            
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Active Home Link */}
              <li style={{ display: 'inline-block' }}>
                <a href="#home" style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
                  Home
                </a>
                <div style={{ marginTop: '8px', height: '2px', background: 'linear-gradient(90deg, #F43F5E, #9D174D)', width: '45px' }} />
              </li>
              {/* Other Links */}
              <li><a href="#features" style={{ color: '#9CA3AF', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}>Features</a></li>
              <li><a href="#platform" style={{ color: '#9CA3AF', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}>Platform</a></li>
              <li><a href="#contact" style={{ color: '#9CA3AF', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}>Contact us</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Contact (Socials) */}
          <div>
            <h3 style={{
              color: '#FFFFFF',
              fontSize: '20px',
              fontWeight: 800,
              marginBottom: '36px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              QUICK CONTACT
            </h3>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              {/* LinkedIn */}
              <a href="#" style={socialCircleStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A0A0A">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" style={socialCircleStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A0A0A">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" style={socialCircleStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A0A0A">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" style={socialCircleStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A0A0A">
                  <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C6.254 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </motion.div>

        {/* Bottom Horizontal Layout: Copyright + Stretching Line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <p style={{
            color: '#FFFFFF',
            fontSize: '14px',
            margin: 0,
            whiteSpace: 'nowrap',
            fontWeight: 400
          }}>
            © 2025Flowsaas. All rights reserved.
          </p>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.08)' // Distinct thin horizontal line stretching fully to the right margin
          }} />
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            row-gap: 50px;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:last-child {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

// Inline base style to create the specific circular white cutout aesthetic for the socials
const socialCircleStyle = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  background: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
  textDecoration: 'none',
};

export default Footer;
