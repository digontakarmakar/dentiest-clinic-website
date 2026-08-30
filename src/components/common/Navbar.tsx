import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Dentists", path: "/dentists" },
    { label: "Results", path: "/before-after" },
    { label: "Reviews", path: "/reviews" },
    { label: "Journal", path: "/blog" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="nav-brand" aria-label="Smileora Dental Home">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="#12343B" />
              <path
                d="M24 10C18.5 10 14 14.5 14 20C14 26 18 34 21.5 38C22.5 39.2 24 39.2 24.5 38C25.5 36.8 26.5 35.5 27.5 34C25 32 23.5 28.5 23.5 25C23.5 19.5 27 15.5 31.5 14.5C29.5 11.5 26.8 10 24 10Z"
                fill="#CDBB91"
              />
              <circle
                cx="28"
                cy="22"
                r="6"
                stroke="#5D9D96"
                stroke-width="2.5"
                stroke-dasharray="2 2"
              />
            </svg>
            <div>
              <span>SMILEORA</span>
              <span className="nav-brand-sub">LUXURY DENTAL STUDIO</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-item ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Nav Right CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="nav-cta-btn">
              <Button
                to="/appointment"
                variant="primary"
                size="sm"
                icon={<Calendar size={15} />}
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <Link
            to="/"
            className="nav-brand"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>SMILEORA</span>
            <span className="nav-brand-sub">LUXURY DENTAL STUDIO</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "var(--navy-deep)",
              padding: "8px",
            }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Button
            to="/appointment"
            variant="primary"
            size="lg"
            icon={<Calendar size={18} />}
          >
            Book Your Visit
          </Button>
          <a
            href="tel:+18005550199"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "var(--navy-deep)",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            <Phone size={16} /> +1 (800) 555-0199
          </a>
        </div>
      </div>
    </>
  );
};
