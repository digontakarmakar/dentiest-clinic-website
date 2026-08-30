import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Star, Eye } from 'lucide-react';
import { Button } from '../common/Button';
import { Hero3DCanvas } from './Hero3DCanvas';

export const HeroSection: React.FC = () => {
  const [visualMode, setVisualMode] = useState<'3d' | 'photo'>('3d');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight || 800;
      setScrollProgress(Math.min(scrollY / heroHeight, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section hero-env-reveal" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content with Editorial Line-by-Line Reveal Masks */}
          <div
            className="hero-content"
            style={{
              transform: `translateY(${scrollProgress * 40}px)`,
              opacity: 1 - scrollProgress * 0.65,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            {/* Phase 1: Eyebrow Label */}
            <div className="eyebrow-label animate-fade-down">
              <Sparkles size={14} color="var(--champagne-dark)" /> Luxury Dental Studio • Beverly Hills
            </div>

            {/* Phase 2 & 3: Masked Line-by-Line Headline Reveal (Apple/Luxury Product Style) */}
            <h1 className="hero-headline" style={{ marginBottom: 'var(--space-md)' }}>
              <span className="reveal-mask">
                <span className="reveal-line delay-100">Precision Dentistry.</span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-line delay-300 serif-accent">Beautifully Personal.</span>
              </span>
            </h1>

            {/* Phase 4: Supporting Paragraph */}
            <p className="hero-subtext animate-fade-up delay-400">
              Advanced dental care designed around your comfort, confidence, and long-term smile. Combining 3D digital smile design with anxiety-free biological dentistry.
            </p>

            {/* Phase 5: Primary Action Buttons */}
            <div className="hero-actions animate-fade-up delay-500">
              <Button to="/appointment" variant="primary" size="lg" icon={<Calendar size={18} />}>
                Book an Appointment
              </Button>
              <Button to="/services" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
                Explore Our Services
              </Button>
            </div>

            {/* Phase 6: Trust & Accreditations Strip */}
            <div className="hero-trust-badges animate-fade-up delay-600">
              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <Star size={18} fill="#D4AF37" color="#D4AF37" />
                </div>
                <div className="trust-badge-text">
                  <strong>4.98 / 5.0 Rating</strong><br />
                  <span>500+ Verified Patient Reviews</span>
                </div>
              </div>

              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <ShieldCheck size={20} color="var(--teal-muted)" />
                </div>
                <div className="trust-badge-text">
                  <strong>Swiss-Engineered</strong><br />
                  <span>Guided Biofilm Protocol</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual — 3D Sculptural Presentation */}
          <div className="hero-visual-wrapper animate-scale-up delay-300">
            <div className="hero-canvas-container">
              {/* Visual Mode Switcher Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 30,
                  display: 'flex',
                  background: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '4px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <button
                  onClick={() => setVisualMode('3d')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: visualMode === '3d' ? 'var(--navy-deep)' : 'transparent',
                    color: visualMode === '3d' ? '#FFFFFF' : 'var(--navy-deep)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  3D Interactive Sculpture
                </button>
                <button
                  onClick={() => setVisualMode('photo')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: visualMode === 'photo' ? 'var(--navy-deep)' : 'transparent',
                    color: visualMode === 'photo' ? '#FFFFFF' : 'var(--navy-deep)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  Editorial Smile
                </button>
              </div>

              {visualMode === '3d' ? (
                <>
                  <Hero3DCanvas />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '20px',
                      zIndex: 25,
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <Eye size={12} color="var(--teal-muted)" /> Interactive 3D • Cursor & Scroll Parallax
                  </div>
                </>
              ) : (
                <img
                  src="/images/hero-smile.jpg"
                  alt="Smileora signature natural smile"
                  className="hero-image-overlay"
                />
              )}
            </div>

            {/* Floating Clinical Team Card */}
            <div className="hero-floating-card animate-fade-up delay-700">
              <div className="floating-avatar-group">
                <img src="/images/dr-elena.jpg" alt="Dr. Elena Vance" className="floating-avatar" />
                <img src="/images/dr-marcus.jpg" alt="Dr. Marcus Chen" className="floating-avatar" />
                <div
                  className="floating-avatar"
                  style={{
                    background: 'var(--champagne)',
                    color: 'var(--navy-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 700
                  }}
                >
                  +3
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy-deep)' }}>
                  Master Clinical Team
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--teal-muted)', fontWeight: 600 }}>
                  Harvard & Columbia Fellowship Directors
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
