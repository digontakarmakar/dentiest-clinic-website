import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Your best smile starts with a conversation.',
  subtitle = 'Schedule your private consultation with our aesthetic directors. Experience anxiety-free, state-of-the-art dental care tailored around you.'
}) => {
  return (
    <section className="section-dark section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(93, 157, 150, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(205, 187, 145, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(205, 187, 145, 0.15)',
            border: '1px solid var(--champagne-border)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-pill)',
            color: 'var(--champagne)',
            fontSize: '0.82rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '20px'
          }}
        >
          <Sparkles size={14} /> Private Consultations Available
        </div>

        <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', maxWidth: '850px', margin: '0 auto 20px', color: '#FFFFFF' }}>
          {title}
        </h2>

        <p style={{ maxWidth: '640px', margin: '0 auto 36px', fontSize: '1.15rem', color: 'var(--text-inverse-subtle)' }}>
          {subtitle}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <Button to="/appointment" variant="champagne" size="lg" icon={<Calendar size={18} />}>
            Book Your Appointment
          </Button>
          <Button to="/contact" variant="outline-light" size="lg" icon={<ArrowRight size={18} />}>
            Contact Our Concierge
          </Button>
        </div>

        <div style={{ marginTop: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', fontSize: '0.9rem', color: 'var(--text-inverse-subtle)' }}>
          <span>Direct Concierge: <a href="tel:+18005550199" style={{ color: 'var(--champagne)', fontWeight: 600 }}>+1 (800) 555-0199</a></span>
          <span>•</span>
          <span>Beverly Hills, CA</span>
        </div>
      </div>
    </section>
  );
};
