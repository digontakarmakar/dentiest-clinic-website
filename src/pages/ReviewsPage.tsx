import { useEffect } from 'react';
import { Star } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ReviewCard } from '../components/cards/ReviewCard';
import { CTASection } from '../components/common/CTASection';
import { reviewsData } from '../data/reviewsData';

export const ReviewsPage: React.FC = () => {

  useEffect(() => {
    updatePageSEO(
      'Patient Reviews & Testimonials — Verified Experiences',
      'Read authentic reviews and heartfelt stories from patients at Smileora Dental in Beverly Hills.'
    );
  }, []);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'Reviews & Stories' }]}
        eyebrow="Patient Voices"
        title="Trusted by over 5,000 smiling patients."
        subtitle="Discover why patients from across Southern California choose Smileora for comfortable, anxiety-free dentistry."
      />

      {/* Ratings Overview Banner */}
      <section className="section-spacing-sm" style={{ backgroundColor: 'var(--surface-cream)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--navy-deep)', lineHeight: 1 }}>
                4.98
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#D4AF37', margin: '8px 0' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Overall Clinical Rating</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--navy-deep)', lineHeight: 1 }}>
                98%
              </div>
              <div style={{ color: 'var(--teal-muted)', fontWeight: 600, margin: '8px 0' }}>Zero Anxiety Experience</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Comfort-First Protocol</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--navy-deep)', lineHeight: 1 }}>
                500+
              </div>
              <div style={{ color: 'var(--teal-muted)', fontWeight: 600, margin: '8px 0' }}>5-Star Google & Yelp Reviews</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>100% Verified Patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Genuine Feedback"
            title="What Our Patients Say"
            subtext="Every story reflects our team's commitment to gentle care and life-changing aesthetics."
          />

          <div className="reviews-grid">
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
