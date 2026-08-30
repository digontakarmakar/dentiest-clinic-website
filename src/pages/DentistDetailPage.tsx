import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { dentistsData } from '../data/dentistsData';

export const DentistDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dentist = dentistsData.find((d) => d.slug === slug);

  useEffect(() => {
    if (dentist) {
      updatePageSEO(
        `${dentist.name} — ${dentist.role}`,
        dentist.bio
      );
    }
  }, [dentist]);

  if (!dentist) {
    return <Navigate to="/dentists" replace />;
  }

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[
          { label: 'Dentists', to: '/dentists' },
          { label: dentist.name }
        ]}
        eyebrow={dentist.role}
        title={dentist.name}
        subtitle={dentist.title}
      />

      <section className="section-spacing">
        <div className="container">
          <div className="intro-split-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left Doctor Photo & Stats Card */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-float)',
                  marginBottom: '28px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--surface-cream)'
                }}
              >
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  style={{ width: '100%', aspectRatio: '1 / 1.05', objectFit: 'cover' }}
                />
              </div>

              {/* Doctor Highlights */}
              <div className="luxury-card" style={{ padding: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', textAlign: 'center' }}>
                  <div style={{ borderRight: '1px solid var(--border-color)', paddingRight: '12px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--navy-deep)', fontWeight: 600 }}>
                      {dentist.experienceYears}+
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Years Clinical Exp.</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--teal-muted)', fontWeight: 600 }}>
                      {dentist.casesCount.toLocaleString()}+
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Smiles Completed</div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--border-color)' }}>
                  <Button to="/appointment" variant="primary" size="lg" icon={<Calendar size={18} />} className="w-full" style={{ width: '100%' }}>
                    Book With {dentist.name.split(' ')[1]}
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Doctor Biography & Credentials */}
            <div>
              {/* Philosophy Quote */}
              <div
                style={{
                  padding: '28px',
                  background: 'var(--surface-white)',
                  borderLeft: '4px solid var(--champagne)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  boxShadow: 'var(--shadow-subtle)',
                  marginBottom: '36px'
                }}
              >
                <Quote size={24} color="var(--champagne-dark)" style={{ marginBottom: '8px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--navy-deep)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  "{dentist.philosophy}"
                </p>
              </div>

              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Clinical Biography</h2>
              {dentist.extendedBio.map((para, i) => (
                <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
                  {para}
                </p>
              ))}

              {/* Education & Fellowships */}
              <div style={{ marginTop: '36px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <GraduationCap size={24} color="var(--teal-muted)" /> Academic Education & Fellowships
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {dentist.education.map((edu, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.98rem', color: 'var(--navy-deep)' }}>
                      <CheckCircle2 size={18} color="var(--teal-muted)" /> {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Board Certifications */}
              <div style={{ marginTop: '36px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={24} color="var(--champagne-dark)" /> Certifications & Accreditations
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {dentist.certifications.map((cert, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.98rem', color: 'var(--navy-deep)' }}>
                      <Sparkles size={16} color="var(--champagne-dark)" /> {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Clinical Focus Areas */}
              <div style={{ marginTop: '36px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Specialist Focus Areas</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {dentist.specializations.map((spec, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '8px 16px',
                        background: 'var(--teal-light)',
                        color: 'var(--navy-deep)',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Request a consultation with ${dentist.name}`}
        subtitle="Enjoy dedicated one-on-one time with our clinical leadership in Beverly Hills."
      />
    </div>
  );
};
