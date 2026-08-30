import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Activity,
  CheckCircle2,
  Cpu,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      updatePageSEO(
        `${service.title} — Specialist Treatment Protocol`,
        service.shortDescription
      );
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title }
        ]}
        eyebrow={service.badge || service.category}
        title={service.title}
        subtitle={service.subtitle}
      />

      {/* Main Service Story Overview */}
      <section className="section-spacing">
        <div className="container">
          <div className="intro-split-grid">
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-float)', minHeight: '380px' }}>
              <img
                src={service.heroImage}
                alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <div className="eyebrow-label">Overview & Philosophy</div>
              <h2>{service.subtitle}</h2>
              <p style={{ marginTop: '16px', fontSize: '1.1rem', lineHeight: 1.8 }}>
                {service.fullDescription}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '28px 0 32px' }}>
                <div style={{ padding: '16px', background: 'var(--surface-white)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--teal-muted)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
                    <Clock size={16} /> Treatment Duration
                  </div>
                  <div style={{ color: 'var(--navy-deep)', fontWeight: 600, fontSize: '0.95rem' }}>{service.duration}</div>
                </div>

                <div style={{ padding: '16px', background: 'var(--surface-white)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--teal-muted)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
                    <Activity size={16} /> Recovery & Downtime
                  </div>
                  <div style={{ color: 'var(--navy-deep)', fontWeight: 600, fontSize: '0.95rem' }}>{service.recovery}</div>
                </div>
              </div>

              <Button to="/appointment" variant="primary" size="lg" icon={<Calendar size={18} />}>
                Book Consultation for {service.title}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidate & Key Benefits */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-ivory-light)' }}>
        <div className="container">
          <div className="intro-split-grid">
            <div>
              <div className="eyebrow-label">Candidate Profile</div>
              <h2>Is this treatment right for you?</h2>
              <p style={{ marginTop: '14px', marginBottom: '24px' }}>
                During your preliminary consultation, we analyze your facial structure, enamel density, and long-term aesthetic goals.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {service.idealCandidate.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1rem', color: 'var(--navy-deep)' }}>
                    <CheckCircle2 size={20} color="var(--teal-muted)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow-label">Clinical Advantages</div>
              <h2>Why choose Smileora for {service.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="luxury-card" style={{ padding: '20px' }}>
                    <h4 style={{ color: 'var(--navy-deep)', marginBottom: '6px' }}>{benefit.title}</h4>
                    <p style={{ fontSize: '0.92rem' }}>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Treatment Protocol */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="The Protocol"
            title="Step-by-Step Treatment Journey"
            subtext="Predictable, painless, and completely transparent from initial 3D optical scan to final reveal."
          />

          <div className="pillars-grid">
            {service.processSteps.map((step) => (
              <div key={step.step} className="pillar-card">
                <div className="pillar-num">{step.step}</div>
                <h3 className="pillar-title">{step.title}</h3>
                <p className="pillar-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--surface-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <div className="eyebrow-label">State of the Art</div>
            <h2>Technologies Utilized in This Procedure</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {service.technologiesUsed.map((tech, idx) => (
              <div key={idx} className="luxury-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Cpu size={28} color="var(--teal-muted)" />
                <span style={{ fontWeight: 700, color: 'var(--navy-deep)', fontSize: '0.95rem' }}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-spacing">
          <div className="container" style={{ maxWidth: '840px' }}>
            <SectionHeading
              align="center"
              eyebrow="Specific Questions"
              title={`${service.title} FAQs`}
            />
            <FAQAccordion items={service.faqs.map((f, i) => ({ id: `s-faq-${i}`, category: 'Treatments', ...f }))} />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-ivory-light)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Complementary Care"
            title="Related Treatment Specializations"
          />
          <div className="services-editorial-grid">
            {relatedServices.map((relSvc) => (
              <Link key={relSvc.id} to={`/services/${relSvc.slug}`} className="service-card">
                <div className="service-card-img-wrap">
                  <img src={relSvc.heroImage} alt={relSvc.title} />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{relSvc.title}</h3>
                  <p className="service-card-desc">{relSvc.shortDescription}</p>
                  <div className="service-card-footer">
                    <span>Learn More <ArrowRight size={15} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to discuss ${service.title}?`}
        subtitle="Book a private consultation with our specialists in Beverly Hills today."
      />
    </div>
  );
};
