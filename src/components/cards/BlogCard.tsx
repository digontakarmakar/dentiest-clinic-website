import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <article
        className="luxury-card"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          overflow: 'hidden',
          marginBottom: '48px',
          borderRadius: 'var(--radius-xl)'
        }}
      >
        <div style={{ position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'var(--navy-deep)',
              color: 'var(--bg-ivory)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            Featured Editorial
          </div>
        </div>

        <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--teal-muted)', fontWeight: 600, marginBottom: '12px' }}>
            <span>{post.category}</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          <h2 style={{ fontSize: '2.1rem', marginBottom: '16px', lineHeight: 1.25 }}>
            <Link to={`/blog/${post.slug}`} style={{ color: 'var(--navy-deep)' }}>
              {post.title}
            </Link>
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.7 }}>
            {post.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy-deep)' }}>{post.author.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{post.publishedDate}</div>
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--teal-muted)'
              }}
            >
              Read Article <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="luxury-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
        <img
          src={post.coverImage}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
          loading="lazy"
        />
        <span
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(18, 52, 59, 0.85)',
            color: '#FFFFFF',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}
        >
          {post.category}
        </span>
      </div>

      <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
          <span>{post.publishedDate}</span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} /> {post.readTime}
          </span>
        </div>

        <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', lineHeight: 1.3, flexGrow: 1 }}>
          <Link to={`/blog/${post.slug}`} style={{ color: 'var(--navy-deep)' }}>
            {post.title}
          </Link>
        </h3>

        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
          {post.excerpt}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-deep)' }}>
            {post.author.name}
          </div>
          <Link
            to={`/blog/${post.slug}`}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--teal-muted)', fontWeight: 600 }}
          >
            Read <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};
