import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { DentistCard } from '../components/cards/DentistCard';
import { CTASection } from '../components/common/CTASection';
import { dentistsData } from '../data/dentistsData';

export const DentistsPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Our Dentists & Specialists — Master Clinical Directors',
      'Meet the world-class cosmetic dentists, implant surgeons, and orthodontists at Smileora Dental in Beverly Hills.'
    );
  }, []);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'Specialists' }]}
        eyebrow="Clinical Leadership"
        title="Master clinicians dedicated to the art & biology of your smile."
        subtitle="Our doctors bring together postgraduate training from Harvard, Columbia, UCLA, and the University of Geneva to deliver gentle, world-class dental care."
      />

      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Meet the Team"
            title="Our Resident Specialists"
            subtext="Select any doctor below to review their full academic credentials, published clinical research, and aesthetic philosophy."
          />

          <div className="dentists-grid">
            {dentistsData.map((dentist) => (
              <DentistCard key={dentist.id} dentist={dentist} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Consult with our clinical directors."
        subtitle="Experience an unhurried, personalized consultation in our private Beverly Hills suites."
      />
    </div>
  );
};
