import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';

export const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Auto rotate every 6.5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = reviewsData[activeIndex];

  return (
    <div className="container" style={{ position: 'relative' }}>
      <div
        className="luxury-card"
        style={{
          padding: 'clamp(32px, 5vw, 64px)',
          position: 'relative',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F4 100%)',
          borderRadius: 'var(--radius-xl)'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '32px', alignItems: 'flex-start' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--teal-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--teal-muted)',
              flexShrink: 0
            }}
          >
            <Quote size={32} />
          </div>

          <div>
            <div style={{ display: 'flex', gap: '4px', color: '#D4AF37', marginBottom: '20px' }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                color: 'var(--navy-deep)',
                lineHeight: 1.35,
                marginBottom: '24px',
                fontStyle: 'italic'
              }}
            >
              "{current.quote}"
            </blockquote>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
              {current.detailedReview}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy-deep)' }}>
                    {current.patientName}
                  </span>
                  {current.verified && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--teal-muted)', fontWeight: 600 }}>
                      <CheckCircle2 size={14} /> Verified Patient
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {current.treatment} • {current.location}
                </div>
              </div>

              {/* Navigation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--navy-deep)',
                    background: 'var(--surface-white)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--navy-deep)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--surface-white)';
                    e.currentTarget.style.color = 'var(--navy-deep)';
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--navy-deep)',
                    background: 'var(--surface-white)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--navy-deep)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--surface-white)';
                    e.currentTarget.style.color = 'var(--navy-deep)';
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
