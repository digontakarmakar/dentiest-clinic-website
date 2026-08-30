import { useState, useEffect } from 'react';
import { Search, HelpCircle } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { faqData } from '../data/faqData';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updatePageSEO(
      'Frequently Asked Questions — Patient Guidance',
      'Find answers to common questions regarding dental procedures, veneer longevity, sedation comfort, insurance, and scheduling.'
    );
  }, []);

  const categories = ['All', 'General', 'Cosmetic', 'Treatments', 'Appointments', 'Insurance & Pricing'];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'FAQ' }]}
        eyebrow="Help & Guidance"
        title="Everything you need to know about your care."
        subtitle="Transparent answers regarding treatment comfort, technology, appointment preparation, and financial arrangements."
      />

      <section className="section-spacing">
        <div className="container" style={{ maxWidth: '880px' }}>
          {/* Search bar */}
          <div
            style={{
              position: 'relative',
              marginBottom: '36px'
            }}
          >
            <Search
              size={20}
              color="var(--teal-muted)"
              style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Search your question (e.g. implants, whitening, veneers, anxiety, insurance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                paddingLeft: '56px',
                paddingRight: '20px',
                paddingTop: '16px',
                paddingBottom: '16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '1rem',
                boxShadow: 'var(--shadow-subtle)'
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--navy-deep)' : 'var(--border-color)',
                  background: selectedCategory === cat ? 'var(--navy-deep)' : 'var(--surface-white)',
                  color: selectedCategory === cat ? 'var(--bg-ivory)' : 'var(--navy-deep)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} />
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <HelpCircle size={48} color="var(--text-muted)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>No matching questions found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                We're always here to answer your personal inquiries directly.
              </p>
              <Button to="/contact" variant="primary">
                Contact Concierge
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
