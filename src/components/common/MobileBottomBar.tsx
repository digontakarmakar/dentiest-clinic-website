import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="mobile-bottom-bar" aria-label="Mobile quick action bar">
      <div className="mobile-bottom-items">
        <a href="tel:+18005550199" className="mobile-bottom-btn">
          <Phone size={18} color="var(--teal-muted)" />
          <span>Call Us</span>
        </a>
        <a
          href="https://wa.me/18005550199"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bottom-btn"
        >
          <MessageSquare size={18} color="var(--teal-muted)" />
          <span>WhatsApp</span>
        </a>
        <Link to="/appointment" className="mobile-bottom-btn primary">
          <Calendar size={18} />
          <span>Book Visit</span>
        </Link>
      </div>
    </div>
  );
};
