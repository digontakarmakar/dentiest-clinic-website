import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-img-wrap">
        <img src={service.heroImage} alt={service.title} loading="lazy" />
        {service.badge && <span className="service-card-badge">{service.badge}</span>}
      </div>

      <div className="service-card-body">
        <div className="service-card-number">{formattedIndex}</div>
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDescription}</p>

        <div className="service-card-footer">
          <span>
            Explore Treatment <ArrowUpRight size={16} />
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{service.duration}</span>
        </div>
      </div>
    </Link>
  );
};
