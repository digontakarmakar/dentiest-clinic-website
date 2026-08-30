import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import type { ReviewItem } from '../../types';

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="review-card">
      <div>
        <div className="review-stars">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
          ))}
        </div>
        <div className="review-quote">"{review.quote}"</div>
        <p className="review-detail">{review.detailedReview}</p>
      </div>

      <div className="review-author">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="author-name">{review.patientName}</span>
            {review.verified && <CheckCircle2 size={13} color="var(--teal-muted)" />}
          </div>
          <div className="author-treatment">{review.treatment}</div>
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{review.date}</span>
      </div>
    </div>
  );
};
