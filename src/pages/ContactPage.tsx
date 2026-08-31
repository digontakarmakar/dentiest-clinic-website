import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { updatePageSEO } from "../utils/seo";
import { PageHero } from "../components/common/PageHero";
import { Button } from "../components/common/Button";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO(
      "Contact Our Concierge — Beverly Hills Flagship",
      "Reach the Smileora Dental team in Beverly Hills. Phone, email, location map, and concierge inquiry form.",
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please complete all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="page-transition-enter-active">
      <PageHero
        breadcrumbs={[{ label: "Contact Us" }]}
        eyebrow="Concierge & Location"
        title="We are here to assist your journey."
        subtitle="Whether you have questions about a specific treatment, require immediate assistance, or wish to schedule a private tour of our facility."
      />

      <section className="section-spacing">
        <div className="container">
          <div
            className="intro-split-grid"
            style={{ alignItems: "flex-start" }}
          >
            {/* Left: Contact Info & Opening Hours */}
            <div>
              <div className="eyebrow-label">Get in Touch</div>
              <h2 style={{ fontSize: "2.2rem", marginBottom: "24px" }}>
                Visit Our Studio
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  marginBottom: "36px",
                }}
              >
                <div
                  className="luxury-card"
                  style={{ padding: "24px", display: "flex", gap: "16px" }}
                >
                  <MapPin
                    size={24}
                    color="var(--teal-muted)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{ color: "var(--navy-deep)", marginBottom: "4px" }}
                    >
                      Flagship Location
                    </h4>
                    <p style={{ fontSize: "0.95rem", margin: 0 }}>
                      450 Luxury Boulevard, Suite 800
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        display: "block",
                        marginTop: "6px",
                      }}
                    >
                      Valet parking available at private clinic entrance.
                    </span>
                  </div>
                </div>

                <div
                  className="luxury-card"
                  style={{ padding: "24px", display: "flex", gap: "16px" }}
                >
                  <Phone
                    size={24}
                    color="var(--teal-muted)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{ color: "var(--navy-deep)", marginBottom: "4px" }}
                    >
                      Direct Concierge Phone
                    </h4>
                    <a
                      href="tel:+18005550199"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--navy-deep)",
                        display: "block",
                      }}
                    >
                      +1 (800) 555-0199
                    </a>
                    <span
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                    >
                      Available Mon–Sat for patient inquiries & emergency
                      scheduling.
                    </span>
                  </div>
                </div>

                <div
                  className="luxury-card"
                  style={{ padding: "24px", display: "flex", gap: "16px" }}
                >
                  <Mail
                    size={24}
                    color="var(--teal-muted)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{ color: "var(--navy-deep)", marginBottom: "4px" }}
                    >
                      Email Concierge
                    </h4>
                    <a
                      href="mailto:concierge@smileoradental.com"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--teal-muted)",
                      }}
                    >
                      concierge@smileoradental.com
                    </a>
                  </div>
                </div>

                <div
                  className="luxury-card"
                  style={{ padding: "24px", display: "flex", gap: "16px" }}
                >
                  <Clock
                    size={24}
                    color="var(--champagne-dark)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{ color: "var(--navy-deep)", marginBottom: "4px" }}
                    >
                      Opening Hours
                    </h4>
                    <div
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <div>
                        Monday – Friday: <strong>8:00 AM – 6:00 PM</strong>
                      </div>
                      <div>
                        Saturday: <strong>9:00 AM – 3:00 PM</strong>
                      </div>
                      <div>
                        Sunday: <strong>Closed (Emergency on-call)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="luxury-card" style={{ padding: "40px" }}>
              <div className="eyebrow-label">Direct Message</div>
              <h2 style={{ fontSize: "2rem", marginBottom: "8px" }}>
                Send Us an Inquiry
              </h2>
              <p style={{ marginBottom: "28px" }}>
                Our team responds to all digital inquiries within 2 hours during
                business hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "var(--teal-light)",
                      color: "var(--teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3
                    style={{ color: "var(--navy-deep)", marginBottom: "8px" }}
                  >
                    Thank You for Reaching Out
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      marginBottom: "24px",
                    }}
                  >
                    Your message has been received. One of our concierge
                    coordinators will get in touch with you shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-name">
                      Your Full Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Katherine Sterling"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">
                        Email Address *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        className="form-input"
                        placeholder="katherine@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-phone">
                        Phone Number
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        className="form-input"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-subject">
                      Subject
                    </label>
                    <select
                      id="c-subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option value="General Consultation">
                        General Aesthetic Consultation
                      </option>
                      <option value="Porcelain Veneers">
                        Porcelain Veneers Inquiry
                      </option>
                      <option value="Dental Implants">
                        Dental Implants & Surgery
                      </option>
                      <option value="Invisalign Aligners">
                        Invisalign Clear Aligners
                      </option>
                      <option value="Emergency Care">
                        Emergency Dental Request
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-msg">
                      Your Message *
                    </label>
                    <textarea
                      id="c-msg"
                      className="form-textarea"
                      rows={4}
                      placeholder="How can we assist you today?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send size={16} />}
                    style={{ width: "100%" }}
                  >
                    Send Message to Concierge
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Map Embed Visual Container */}
          <div
            style={{
              marginTop: "64px",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                background: "var(--navy-deep)",
                color: "#FFFFFF",
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                <MapPin size={16} color="var(--champagne)" /> Beverly Hills
                Studio Navigation
              </div>
              <a
                href="https://maps.google.com/?q=Beverly+Hills+CA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--champagne)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                Open in Google Maps ↗
              </a>
            </div>
            <div
              style={{
                height: "340px",
                background: "var(--bg-ivory-dark)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <iframe
                title="Smileora Dental Studio Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                src="https://www.google.com/maps?q=Beverly%20Hills%2C%20CA%2090210&z=13&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
