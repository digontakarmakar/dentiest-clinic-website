import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
  dark?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  dark = false
}) => {
  return (
    <section
      style={{
        padding: '140px 0 60px',
        backgroundColor: dark ? 'var(--navy-deep)' : 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: dark ? 'var(--text-inverse-subtle)' : 'var(--text-secondary)',
              marginBottom: '20px'
            }}
          >
            <Link to="/" style={{ color: dark ? 'var(--champagne)' : 'var(--teal-muted)' }}>
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={14} style={{ opacity: 0.6 }} />
                {crumb.to ? (
                  <Link to={crumb.to} style={{ color: dark ? 'var(--champagne)' : 'var(--teal-muted)' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: dark ? '#FFFFFF' : 'var(--navy-deep)', fontWeight: 500 }}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {eyebrow && <div className="eyebrow-label" style={{ color: dark ? 'var(--champagne)' : 'var(--teal-muted)' }}>{eyebrow}</div>}
        <h1
          style={{
            color: dark ? '#FFFFFF' : 'var(--navy-deep)',
            maxWidth: '900px',
            marginBottom: '16px'
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: '1.15rem',
              maxWidth: '650px',
              color: dark ? 'var(--text-inverse-subtle)' : 'var(--text-secondary)',
              lineHeight: 1.7
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
