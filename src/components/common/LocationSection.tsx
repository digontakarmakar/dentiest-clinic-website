import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Car,
  Shield,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

interface LocationSectionProps {
  mapEmbedUrl?: string;
  className?: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  // Use an iframe-friendly map provider that renders reliably in browsers and local preview environments.
  mapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=-118.4569%2C34.0495%2C-118.3829%2C34.1080&layer=mapnik&marker=34.0736%2C-118.4208",
  className = "",
}) => {
  return (
    <section
      className={`section-spacing ${className}`}
      style={{ backgroundColor: "var(--bg-ivory-light)" }}
      id="location"
      aria-label="Studio Location & Arrival"
    >
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Flagship Studio"
          title="Visit Our Beverly Hills Sanctuary"
          subtext="Centrally located with discreet private access, complimentary valet parking, and an architecturally serene atmosphere."
        />

        <div
          className="luxury-card location-card-shell"
          style={{
            padding: "clamp(24px, 4vw, 48px)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
          }}
        >
          <div
            className="location-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left: Detailed Location & Arrival Guide */}
            <div className="location-info-panel">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  background: "var(--teal-light)",
                  color: "var(--navy-deep)",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                <Sparkles size={14} color="var(--teal-muted)" /> Private Patient
                Suites & Valet
              </div>

              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--navy-deep)",
                  marginBottom: "16px",
                }}
              >
                Smileora Dental Studio
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                Our flagship clinic is located on Luxury Boulevard in the heart
                of Beverly Hills. Designed as a tranquil haven away from the
                bustling city, our private floor provides complete discretion
                for all aesthetic and surgical appointments.
              </p>

              {/* Quick Info Grid */}
              <div
                className="location-info-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: "var(--surface-white)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--teal-muted)",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      marginBottom: "6px",
                    }}
                  >
                    <MapPin size={16} /> Address
                  </div>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--navy-deep)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    450 Luxury Boulevard
                    <br />
                    Suite 800 (8th Floor)
                    <br />
                    Beverly Hills, CA 90210
                  </div>
                </div>

                <div
                  style={{
                    padding: "16px",
                    background: "var(--surface-white)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--teal-muted)",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      marginBottom: "6px",
                    }}
                  >
                    <Clock size={16} /> Studio Hours
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--navy-deep)",
                      lineHeight: 1.4,
                    }}
                  >
                    <strong>Mon – Fri:</strong> 8:00am – 6:00pm
                    <br />
                    <strong>Saturday:</strong> 9:00am – 3:00pm
                    <br />
                    <span style={{ color: "var(--text-muted)" }}>
                      Sun: Emergency on-call
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrival Amenities & Parking Guidance */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "36px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.92rem",
                    color: "var(--navy-deep)",
                  }}
                >
                  <Car size={18} color="var(--champagne-dark)" />
                  <span>
                    <strong>Complimentary Valet:</strong> Available at the
                    private subterranean motor court entrance.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.92rem",
                    color: "var(--navy-deep)",
                  }}
                >
                  <Shield size={18} color="var(--champagne-dark)" />
                  <span>
                    <strong>Private Elevators:</strong> Direct, quiet elevator
                    access straight to the 8th floor reception.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="location-actions"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  href="https://maps.google.com/?q=Beverly+Hills+CA"
                  variant="primary"
                  size="sm"
                  icon={<Navigation size={16} />}
                >
                  Get Directions
                </Button>
                <a
                  href="tel:+18005550199"
                  className="location-cta-phone"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--navy-deep)",
                    padding: "12px 20px",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid var(--border-color)",
                    background: "var(--surface-white)",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--teal-muted)";
                    e.currentTarget.style.color = "var(--teal-muted)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.color = "var(--navy-deep)";
                  }}
                >
                  <Phone size={16} /> Concierge Hotline: +1 (800) 555-0199
                </a>
              </div>
            </div>

            {/* Right: Map Frame & Visual Container (Ready for custom Google Map replacement) */}
            <div className="location-map-panel">
              <div
                className="location-map-wrap"
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-float)",
                  backgroundColor: "var(--navy-deep)",
                  position: "relative",
                }}
              >
                {/* Map Header Toolbar */}
                <div
                  className="location-map-header"
                  style={{
                    background: "var(--navy-deep)",
                    color: "#FFFFFF",
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(221, 228, 225, 0.15)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    }}
                  >
                    <MapPin size={16} color="var(--champagne)" />
                    <span>Beverly Hills, CA 90210</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Beverly+Hills+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "var(--champagne)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    Open Live Map <ExternalLink size={13} />
                  </a>
                </div>

                {/* Google Map Iframe Container */}
                {/* NOTE FOR USER: You can replace the src below with your exact Google Maps embed URL */}
                <div
                  className="location-map-frame"
                  style={{
                    height: "380px",
                    width: "100%",
                    position: "relative",
                    background: "var(--bg-ivory)",
                  }}
                >
                  <iframe
                    title="Smileora Dental Studio Location Map"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    className="location-map-iframe"
                    style={{
                      border: 0,
                      filter: "grayscale(20%) contrast(1.08)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Map Footer Bar */}
                <div
                  className="location-map-footer"
                  style={{
                    padding: "12px 20px",
                    background: "var(--surface-white)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span>📍 450 Luxury Blvd, Suite 800</span>
                  <span style={{ color: "var(--teal-muted)", fontWeight: 600 }}>
                    Valet Parking Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
