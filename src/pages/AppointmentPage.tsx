import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { AppointmentWizard } from '../components/booking/AppointmentWizard';
import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const AppointmentPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Book a Consultation — Reserve Your Private Visit',
      'Schedule your bespoke dental consultation at Smileora Dental in Beverly Hills. Unhurried care, comfort protocols, and digital smile planning.'
    );
  }, []);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'Book Appointment' }]}
        eyebrow="Private Reservations"
        title="Let’s plan your next step."
        subtitle="Reserve dedicated time with our clinical directors. We allot generous time for each patient to ensure thorough discussion and complete serenity."
      />

      <section className="section-spacing">
        <div className="container">
          <AppointmentWizard />

          {/* Reassurance strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              maxWidth: '860px',
              margin: '48px auto 0',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--navy-deep)', fontSize: '0.9rem' }}>
              <ShieldCheck size={20} color="var(--teal-muted)" />
              <span>Zero-Obligation Consultation</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--navy-deep)', fontSize: '0.9rem' }}>
              <Clock size={20} color="var(--teal-muted)" />
              <span>Dedicated 60–75 Min Time Block</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--navy-deep)', fontSize: '0.9rem' }}>
              <Sparkles size={20} color="var(--champagne-dark)" />
              <span>Comfort & Calming Amenities Included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
