import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtext?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtext,
  align = 'left',
  className = '',
  dark = false
}) => {
  return (
    <div className={`section-heading-wrapper ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && <div className="eyebrow-label">{eyebrow}</div>}
      <h2 style={{ color: dark ? '#FFFFFF' : 'var(--navy-deep)' }}>{title}</h2>
      {subtext && <p className="section-subtext" style={{ color: dark ? 'var(--text-inverse-subtle)' : 'var(--text-secondary)' }}>{subtext}</p>}
    </div>
  );
};
