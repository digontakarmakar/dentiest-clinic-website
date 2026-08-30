import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { PageHero } from '../components/common/PageHero';
import { BlogCard } from '../components/cards/BlogCard';
import { CTASection } from '../components/common/CTASection';
import { blogData } from '../data/blogData';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      updatePageSEO(post.title, post.excerpt);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogData.filter((p) => post.relatedSlugs.includes(p.slug));

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[
          { label: 'Journal', to: '/blog' },
          { label: post.category }
        ]}
        eyebrow={post.category}
        title={post.title}
      />

      <article className="section-spacing">
        <div className="container-narrow">
          {/* Metadata bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border-color)',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--navy-deep)', fontSize: '0.95rem' }}>
                  {post.author.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {post.author.role} • {post.publishedDate}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--teal-muted)', fontWeight: 600 }}>
              <Clock size={16} /> {post.readTime}
            </div>
          </div>

          {/* Hero Cover Image */}
          <div
            style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-float)',
              marginBottom: '48px',
              aspectRatio: '16 / 9'
            }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Table of Contents */}
          <div
            style={{
              padding: '24px 32px',
              background: 'var(--surface-cream)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              marginBottom: '40px'
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '12px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Table of Contents
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {post.content.sections.map((sec, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    style={{ color: 'var(--navy-deep)', fontSize: '0.92rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span style={{ color: 'var(--teal-muted)', fontWeight: 700 }}>0{i + 1}.</span> {sec.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Typography */}
          <div style={{ fontSize: '1.12rem', lineHeight: 1.85, color: 'var(--text-primary)' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: 'var(--navy-deep)', fontStyle: 'italic', marginBottom: '36px' }}>
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--navy-deep)', marginBottom: '16px', marginTop: '32px' }}>
                  {section.heading}
                </h2>
                {section.subheading && (
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--teal-muted)', marginBottom: '16px' }}>
                    {section.subheading}
                  </h3>
                )}

                {section.body.map((bText, bIdx) => (
                  <p key={bIdx} style={{ marginBottom: '18px' }}>
                    {bText}
                  </p>
                ))}

                {section.keyTakeaway && (
                  <div
                    style={{
                      margin: '28px 0',
                      padding: '20px 24px',
                      background: 'var(--teal-light)',
                      borderLeft: '4px solid var(--teal-muted)',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      fontSize: '1rem',
                      color: 'var(--navy-deep)',
                      fontWeight: 500
                    }}
                  >
                    <strong>Key Insight:</strong> {section.keyTakeaway}
                  </div>
                )}
              </div>
            ))}

            <div style={{ padding: '32px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginTop: '48px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '12px' }}>Conclusion</h3>
              <p>{post.content.conclusion}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section-spacing" style={{ backgroundColor: 'var(--bg-ivory-light)' }}>
          <div className="container">
            <div style={{ marginBottom: '32px' }}>
              <div className="eyebrow-label">Recommended Reading</div>
              <h2>Related Clinical Articles</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
};
