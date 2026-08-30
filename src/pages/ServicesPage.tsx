import React, { useState, useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/cards/ServiceCard';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updatePageSEO(
      'Our Services — Comprehensive Dental Architecture',
      'Explore bespoke cosmetic dentistry, guided dental implants, Invisalign clear aligners, teeth whitening, and Guided Biofilm Therapy hygiene.'
    );
  }, []);

  const categories = ['All', 'Cosmetic', 'Restorative', 'Orthodontics', 'General', 'Preventive'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'Services' }]}
        eyebrow="Clinical Specializations"
        title="Comprehensive dental care engineered with artistic precision."
        subtitle="Every smile is a distinct anatomical masterpiece. Explore our full suite of minimally invasive aesthetic, restorative, and preventive treatments."
      />

      {/* Category Filter Pills */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--navy-deep)' : 'var(--border-color)',
                  background: selectedCategory === cat ? 'var(--navy-deep)' : 'var(--surface-white)',
                  color: selectedCategory === cat ? 'var(--bg-ivory)' : 'var(--navy-deep)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                {cat} {cat === 'All' ? `(${servicesData.length})` : ''}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services-editorial-grid">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Treatment FAQ */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-ivory-light)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <SectionHeading
            align="center"
            eyebrow="Common Inquiries"
            title="Frequently Asked Treatment Questions"
            subtext="Everything you need to know about preparing for your visit and treatment timelines."
          />
          <FAQAccordion items={faqData.slice(0, 5)} />
        </div>
      </section>

      <CTASection />
    </div>
  );
};
