import React, { useState, useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { BlogCard } from '../components/cards/BlogCard';
import { CTASection } from '../components/common/CTASection';
import { blogData } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updatePageSEO(
      'The Dental Journal — Aesthetics, Science & Oral Wellness',
      'Read clinical essays, patient guides, and cutting-edge research on cosmetic dentistry and implantology from Smileora specialists.'
    );
  }, []);

  const categories = ['All', 'Cosmetic Dentistry', 'Dental Implants', 'Oral Health', 'Patient Guide'];

  const featuredPost = blogData.find((p) => p.featured) || blogData[0];
  const otherPosts = blogData.filter((p) => p.id !== featuredPost.id);

  const filteredPosts = selectedCategory === 'All'
    ? otherPosts
    : otherPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: 'Journal' }]}
        eyebrow="The Smileora Journal"
        title="Aesthetic Science & Modern Dental Insights"
        subtitle="Exploring the intersections of facial harmony, biomimetic ceramics, guided surgical technology, and preventive wellness."
      />

      <section className="section-spacing">
        <div className="container">
          {/* Featured Post */}
          <BlogCard post={featuredPost} featured={true} />

          {/* Category Filter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              margin: '56px 0 40px'
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

          {/* Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
