import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#5D9D96" />
                <path d="M24 10C18.5 10 14 14.5 14 20C14 26 18 34 21.5 38C22.5 39.2 24 39.2 24.5 38C25.5 36.8 26.5 35.5 27.5 34C25 32 23.5 28.5 23.5 25C23.5 19.5 27 15.5 31.5 14.5C29.5 11.5 26.8 10 24 10Z" fill="#F7F5EF" />
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.08em' }}>
                SMILEORA
              </span>
            </Link>
            <p>
              Where luxury wellness meets precision dental architecture. Delivering comfortable, bespoke cosmetic and restorative dentistry for discerning smiles.
            </p>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', color: 'var(--champagne)' }}>
              <ShieldCheck size={20} />
              <span style={{ fontSize: '0.85rem' }}>Board-Certified Specialists & Swiss-Standard Hygiene</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Our Clinic</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/dentists" className="footer-link">Specialist Doctors</Link></li>
              <li><Link to="/before-after" className="footer-link">Smile Transformations</Link></li>
              <li><Link to="/reviews" className="footer-link">Patient Stories</Link></li>
              <li><Link to="/blog" className="footer-link">Dental Journal</Link></li>
              <li><Link to="/faq" className="footer-link">Patient FAQ</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <div className="footer-heading">Treatments</div>
            <ul className="footer-links">
              <li><Link to="/services/cosmetic-dentistry" className="footer-link">Cosmetic Dentistry</Link></li>
              <li><Link to="/services/dental-implants" className="footer-link">Dental Implants</Link></li>
              <li><Link to="/services/orthodontics" className="footer-link">Clear Aligners (Invisalign)</Link></li>
              <li><Link to="/services/teeth-whitening" className="footer-link">Laser Teeth Whitening</Link></li>
              <li><Link to="/services/preventive-care" className="footer-link">Guided Biofilm Therapy</Link></li>
              <li><Link to="/services/general-dentistry" className="footer-link">General Dentistry</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <div className="footer-heading">Concierge & Hours</div>
            <ul className="footer-links" style={{ gap: '16px' }}>
              <li style={{ display: 'flex', gap: '10px', color: 'var(--text-inverse-subtle)' }}>
                <MapPin size={18} color="var(--champagne)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>450 Luxury Boulevard, Suite 800, Beverly Hills, CA 90210</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: 'var(--text-inverse-subtle)' }}>
                <Phone size={18} color="var(--champagne)" style={{ flexShrink: 0 }} />
                <a href="tel:+18005550199" style={{ color: '#FFFFFF', fontWeight: 600 }}>+1 (800) 555-0199</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: 'var(--text-inverse-subtle)' }}>
                <Mail size={18} color="var(--champagne)" style={{ flexShrink: 0 }} />
                <a href="mailto:concierge@smileoradental.com">concierge@smileoradental.com</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: 'var(--text-inverse-subtle)' }}>
                <Clock size={18} color="var(--champagne)" style={{ flexShrink: 0 }} />
                <span>Mon–Fri: 8:00am – 6:00pm<br />Sat: 9:00am – 3:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {currentYear} SMILEORA DENTAL STUDIO. All Rights Reserved. Modern Dentistry. Confident Smiles.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/contact" className="footer-link">Privacy Policy</Link>
            <Link to="/contact" className="footer-link">Terms of Service</Link>
            <Link to="/contact" className="footer-link">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
