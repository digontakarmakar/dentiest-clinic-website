import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import type { DentistProfile } from '../../types';

interface DentistCardProps {
  dentist: DentistProfile;
}

export const DentistCard: React.FC<DentistCardProps> = ({ dentist }) => {
  return (
    <div className="dentist-card">
      <Link to={`/dentists/${dentist.slug}`} className="dentist-photo-wrap" aria-label={`View profile of ${dentist.name}`}>
        <img src={dentist.image} alt={dentist.name} loading="lazy" />
      </Link>

      <div className="dentist-card-body">
        <h3 className="dentist-name">
          <Link to={`/dentists/${dentist.slug}`}>{dentist.name}</Link>
        </h3>
        <div className="dentist-role">{dentist.role}</div>
        <div className="dentist-exp-badge">
          <Award size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
          {dentist.experienceYears}+ Years Clinical Experience
        </div>
        <p style={{ fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>{dentist.bio}</p>

        <Link
          to={`/dentists/${dentist.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--navy-deep)',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-muted)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--navy-deep)')}
        >
          View Full Credentials <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};
