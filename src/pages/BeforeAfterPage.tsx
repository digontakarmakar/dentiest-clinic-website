import { useState, useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { DraggableSlider } from '../components/common/DraggableSlider';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { beforeAfterData } from '../data/beforeAfterData';
import { Calendar } from 'lucide-react';

export const BeforeAfterPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    updatePageSEO(
      'Before & After Gallery — Smile Transformations',
      'Inspect genuine before and after smile makeover results. Porcelain veneers, dental implants, Invisalign, and teeth whitening in Beverly Hills.'
    );
  }, []);

  const categories = ['All', 'Veneers', 'Whitening', 'Implants', 'Orthodontics', 'Smile Makeover'];

  const filteredCases = activeCategory === 'All'
    ? beforeAfterData
    : beforeAfterData.filter((c) => c.category === activeCategory);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'Smile Transformations' }]}
        eyebrow="Clinical Results"
        title="Real Transformations. Luminous Confidence."
        subtitle="Explore our cosmetic and restorative smile gallery. Every case reflects individualized facial architecture, minimal tooth reduction, and artisan ceramics."
      />

      <section className="section-spacing">
        <div className="container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '56px'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--navy-deep)' : 'var(--border-color)',
                  background: activeCategory === cat ? 'var(--navy-deep)' : 'var(--surface-white)',
                  color: activeCategory === cat ? 'var(--bg-ivory)' : 'var(--navy-deep)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                {cat} {cat === 'All' ? `(${beforeAfterData.length})` : ''}
              </button>
            ))}
          </div>

          {/* Cases List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="luxury-card"
                style={{
                  padding: 'clamp(24px, 4vw, 48px)',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '40px',
                  alignItems: 'center'
                }}
              >
                {/* Interactive Slider */}
                <div>
                  <DraggableSlider
                    beforeImage={caseItem.beforeImage}
                    afterImage={caseItem.afterImage}
                    beforeLabel="Before"
                    afterLabel="After Result"
                  />
                  <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    ⇄ Drag slider left and right to inspect results
                  </div>
                </div>

                {/* Case Story Details */}
                <div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {caseItem.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          background: 'var(--teal-light)',
                          color: 'var(--navy-deep)',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-pill)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.8rem', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                    {caseItem.title}
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
                    {caseItem.description}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      padding: '16px',
                      background: 'var(--bg-ivory)',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '28px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Lead Doctor</div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy-deep)' }}>{caseItem.doctor}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Treatment Timeline</div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy-deep)' }}>{caseItem.duration}</div>
                    </div>
                  </div>

                  <Button to="/appointment" variant="primary" icon={<Calendar size={16} />}>
                    Plan Similar Makeover
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to design your personal transformation?"
        subtitle="Schedule a 3D digital simulation and trial mock-up with Dr. Elena Vance."
      />
    </div>
  );
};
