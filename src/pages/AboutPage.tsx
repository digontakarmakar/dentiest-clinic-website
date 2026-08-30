import { useEffect } from 'react';
import { Heart, Shield, Award, Users } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { StatCounter } from '../components/common/StatCounter';
import { DentistCard } from '../components/cards/DentistCard';
import { CTASection } from '../components/common/CTASection';
import { dentistsData } from '../data/dentistsData';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'About Us — Our Story & Philosophy',
      'Discover the founding vision of Smileora Dental in Beverly Hills. Combining luxury architectural wellness, biomimetic dentistry, and Swiss-engineered hygiene.'
    );
  }, []);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'About Our Clinic' }]}
        eyebrow="Our Story & Philosophy"
        title="Elevating dentistry into an empowering wellness experience."
        subtitle="Founded on the conviction that exceptional oral care should be as calming, restorative, and dignified as a five-star private sanctuary."
      />

      {/* Story Narrative */}
      <section className="section-spacing">
        <div className="container">
          <div className="intro-split-grid">
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="/images/clinic-lounge.jpg"
                alt="Smileora flagship interior lounge"
                loading="lazy"
              />
            </div>

            <div>
              <div className="eyebrow-label">The Vision</div>
              <h2>A calmer, more human way to care for your smile.</h2>
              <p style={{ marginTop: '16px', fontSize: '1.05rem', lineHeight: 1.8 }}>
                For over a century, traditional dentistry was defined by clinical sterile whites, jarring acoustic drills, and hurried 10-minute appointments. Dr. Elena Vance and Dr. Marcus Chen established Smileora to dismantle this paradigm.
              </p>
              <p style={{ marginTop: '16px', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Every element of our flagship studio—from our sound-dampened travertine acoustics and private garden-view operatory suites to computerized needle-free anesthesia—was designed with one priority: your physical and emotional serenity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '32px' }}>
                <div style={{ borderLeft: '3px solid var(--teal-muted)', paddingLeft: '16px' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '4px' }}>Biomimetic Craft</h4>
                  <p style={{ fontSize: '0.9rem' }}>We preserve natural tooth biology using microscopic adhesive engineering.</p>
                </div>
                <div style={{ borderLeft: '3px solid var(--champagne)', paddingLeft: '16px' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '4px' }}>Sensory Comfort</h4>
                  <p style={{ fontSize: '0.9rem' }}>Aromatherapy, heated memory-foam chairs, and acoustic audio therapy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Milestones */}
      <section className="trust-strip" style={{ backgroundColor: 'var(--surface-cream)' }}>
        <div className="container">
          <div className="trust-stats-grid">
            <StatCounter end={16} suffix="+" label="Years of Excellence" />
            <StatCounter end={5000} suffix="+" label="Patients Cared For" />
            <StatCounter end={99} suffix=".1%" label="Implant Integration Rate" />
            <StatCounter end={100} suffix="%" label="Digital Scanning Protocol" />
          </div>
        </div>
      </section>

      {/* Our Mission & Core Values */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our Core Values"
            title="The principles that guide every consultation."
            subtext="We believe true aesthetic excellence is born from technical precision and deep human empathy."
          />

          <div className="pillars-grid">
            <div className="pillar-card">
              <Heart size={32} color="var(--teal-muted)" style={{ marginBottom: '16px' }} />
              <h3 className="pillar-title">Radical Empathy</h3>
              <p className="pillar-desc">
                We never judge, rush, or dismiss your concerns. Your comfort and voice lead every step of treatment.
              </p>
            </div>

            <div className="pillar-card">
              <Shield size={32} color="var(--teal-muted)" style={{ marginBottom: '16px' }} />
              <h3 className="pillar-title">Biological Preservation</h3>
              <p className="pillar-desc">
                We practice conservative dentistry—protecting healthy enamel and living tooth structure whenever possible.
              </p>
            </div>

            <div className="pillar-card">
              <Award size={32} color="var(--champagne-dark)" style={{ marginBottom: '16px' }} />
              <h3 className="pillar-title">Artisan Ceramics</h3>
              <p className="pillar-desc">
                Every restoration is individually hand-layered by master Swiss ceramists for lifelike light refraction.
              </p>
            </div>

            <div className="pillar-card">
              <Users size={32} color="var(--teal-muted)" style={{ marginBottom: '16px' }} />
              <h3 className="pillar-title">Complete Transparency</h3>
              <p className="pillar-desc">
                Clear 3D visual walkthroughs, honest medical advice, and upfront treatment costs without surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Directors */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-ivory-light)' }}>
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Leadership Team"
            title="Guided by world-class specialists."
            subtext="Our clinical directors combine decades of research, international academic training, and hundreds of cosmetic transformations."
          />

          <div className="dentists-grid">
            {dentistsData.map((dentist) => (
              <DentistCard key={dentist.id} dentist={dentist} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="The Studio"
            title="Designed for complete tranquility."
            subtext="Explore our Beverly Hills facilities crafted with warm travertine marble, Japanese zen gardens, and private acoustic treatment suites."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '280px', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/clinic-lounge.jpg" alt="Clinic Lounge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '280px', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/treatment-suite.jpg" alt="Operatory Suite" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '280px', boxShadow: 'var(--shadow-card)' }}>
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Digital Diagnostics Suite" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
