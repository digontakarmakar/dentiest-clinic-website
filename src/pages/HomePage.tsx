import { useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Scan,
  Layers,
  Activity,
} from "lucide-react";
import { updatePageSEO } from "../utils/seo";
import { HeroSection } from "../components/hero/HeroSection";
import { StatCounter } from "../components/common/StatCounter";
import { SectionHeading } from "../components/common/SectionHeading";
import { Button } from "../components/common/Button";
import { ServiceCard } from "../components/cards/ServiceCard";
import { DentistCard } from "../components/cards/DentistCard";
import { DraggableSlider } from "../components/common/DraggableSlider";
import { TestimonialCarousel } from "../components/common/TestimonialCarousel";
import { LocationSection } from "../components/common/LocationSection";
import { CTASection } from "../components/common/CTASection";
import { servicesData } from "../data/servicesData";
import { dentistsData } from "../data/dentistsData";
import { beforeAfterData } from "../data/beforeAfterData";
import { imageUrl } from "../utils/imagePaths";

export const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      "SMILEORA DENTAL | Modern Dentistry & Luxury Aesthetics",
      "Precision dentistry meets luxury wellness and advanced technology in Beverly Hills. Bespoke porcelain veneers, dental implants, clear aligners, and comfort-first dental care.",
    );
  }, []);

  const featuredCase = beforeAfterData[0];

  return (
    <div className="page-transition-enter-active">
      {/* 1. Hero Signature Experience */}
      <HeroSection />

      {/* 2. Trust Strip */}
      <section
        className="trust-strip"
        aria-label="Clinical Milestones & Statistics"
      >
        <div className="container">
          <div className="trust-stats-grid">
            <StatCounter
              end={16}
              suffix="+"
              label="Years Clinical Experience"
            />
            <StatCounter
              end={5000}
              suffix="+"
              label="Confident Smiles Restored"
            />
            <StatCounter
              end={98}
              suffix="%"
              label="Patient Satisfaction Rate"
            />
            <StatCounter end={100} suffix="%" label="Digital Swiss Hygiene" />
          </div>
        </div>
      </section>

      {/* 3. Introduction Split Section */}
      <section
        className="section-spacing"
        aria-label="About Smileora Philosophy"
      >
        <div className="container">
          <div className="intro-split-grid">
            {/* Left Image Frame */}
            <div className="intro-image-frame">
              <img
                src={imageUrl("clinic-lounge.jpg")}
                alt="Smileora luxury clinic reception lounge"
                loading="lazy"
              />
              <div className="intro-experience-pill">
                <Sparkles size={16} color="var(--champagne)" />
                <span>Beverly Hills Studio</span>
              </div>
            </div>

            {/* Right Story Content */}
            <div>
              <div className="eyebrow-label">About Smileora</div>
              <h2>Dentistry built around people, not procedures.</h2>
              <p style={{ marginTop: "16px", fontSize: "1.1rem" }}>
                We believe exceptional oral healthcare is an intimate balance of
                artistic aesthetics, biomimetic tooth preservation, and serene
                comfort. Our clinic was created to completely eliminate dental
                anxiety, replacing cold medical environments with warm,
                restorative wellness spaces.
              </p>

              <div className="intro-bullet-grid">
                <div className="intro-bullet-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <HeartHandshake size={20} color="var(--teal-muted)" />
                    <div className="intro-bullet-title">Personalized Care</div>
                  </div>
                  <p className="intro-bullet-desc">
                    Unhurried 1-on-1 consultations with your dedicated
                    specialist.
                  </p>
                </div>

                <div className="intro-bullet-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <Cpu size={20} color="var(--teal-muted)" />
                    <div className="intro-bullet-title">Digital Precision</div>
                  </div>
                  <p className="intro-bullet-desc">
                    Sub-millimeter 3D intraoral mapping and guided robotics.
                  </p>
                </div>

                <div className="intro-bullet-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <Award size={20} color="var(--teal-muted)" />
                    <div className="intro-bullet-title">Master Clinicians</div>
                  </div>
                  <p className="intro-bullet-desc">
                    Harvard and Columbia fellowship-trained directors.
                  </p>
                </div>

                <div className="intro-bullet-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <ShieldCheck size={20} color="var(--teal-muted)" />
                    <div className="intro-bullet-title">Comfort-First</div>
                  </div>
                  <p className="intro-bullet-desc">
                    Heated memory foam chairs and calming acoustic suites.
                  </p>
                </div>
              </div>

              <Button
                to="/about"
                variant="primary"
                icon={<ArrowRight size={16} />}
              >
                Discover Our Story & Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--bg-ivory-light)" }}
        aria-label="Comprehensive Dental Services"
      >
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our Services"
            title="Complete care for every stage of your smile."
            subtext="From subtle porcelain enhancements to computerized full arch implant restorations, our treatments are executed with microscopic precision."
          />

          <div className="services-editorial-grid">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={16} />}
            >
              View All Treatment Specializations
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Featured Cinematic Service Spotlight */}
      <section
        className="section-spacing"
        aria-label="Featured Cosmetic Dentistry"
      >
        <div className="container">
          <div
            className="luxury-card"
            style={{
              padding: "clamp(32px, 5vw, 64px)",
              background: "linear-gradient(145deg, #12343B, #0B2227)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <div className="intro-split-grid">
              <div>
                <div
                  className="eyebrow-label"
                  style={{ color: "var(--champagne)" }}
                >
                  Signature Aesthetic Craft
                </div>
                <h2 style={{ color: "#FFFFFF", marginBottom: "16px" }}>
                  Cosmetic Dentistry: Designed for the smile you’ve always
                  imagined.
                </h2>
                <p
                  style={{
                    color: "var(--text-inverse-subtle)",
                    marginBottom: "28px",
                    fontSize: "1.1rem",
                  }}
                >
                  Using facial-driven Digital Smile Design and hand-layered
                  Swiss ceramics, Dr. Elena Vance crafts porcelain veneers that
                  reflect natural light, balance lip contours, and celebrate
                  your organic individuality.
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginBottom: "36px",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-inverse-subtle)",
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--champagne)" />{" "}
                    Ultra-thin minimal preparation ceramic veneers
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-inverse-subtle)",
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--champagne)" /> Physical
                    3D trial mock-up in your mouth before placement
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-inverse-subtle)",
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--champagne)" /> 15–20+
                    year biological longevity with proper care
                  </li>
                </ul>

                <Button
                  to="/services/cosmetic-dentistry"
                  variant="champagne"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Explore Cosmetic Dentistry
                </Button>
              </div>

              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  minHeight: "380px",
                }}
              >
                <img
                  src={imageUrl("hero-smile.jpg")}
                  alt="Smileora Cosmetic Veneer Transformation"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Smileora (The Four Pillars) */}
      <section className="section-spacing" aria-label="Why Choose Smileora">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="The Smileora Standard"
            title="A higher standard of clinical excellence."
            subtext="Four enduring pillars define every patient encounter, treatment plan, and outcome."
          />

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">Advanced Technology</h3>
              <p className="pillar-desc">
                From low-radiation 3D CBCT scanners to Swiss Guided Biofilm
                Therapy, we invest in the vanguard of dental science.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">Specialist Leadership</h3>
              <p className="pillar-desc">
                Our clinicians hold advanced postgraduate fellowships from
                Harvard, Columbia, NYU, and the University of Geneva.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">Facial Harmony</h3>
              <p className="pillar-desc">
                We design restorations from the face inward—respecting your lip
                line, eye symmetry, and unique facial architecture.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">04</div>
              <h3 className="pillar-title">Comfort-First Care</h3>
              <p className="pillar-desc">
                Calming sensory suites, computerized painless anesthesia, and
                gentle sedation make fear a relic of the past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Dentist Team Spotlight */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--bg-ivory-light)" }}
        aria-label="Clinical Directors"
      >
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our Specialists"
            title="World-class expertise. Genuine empathy."
            subtext="Meet the renowned cosmetic directors, implantologists, and orthodontists behind our transformative clinical results."
          />

          <div className="dentists-grid">
            {dentistsData.map((dentist) => (
              <DentistCard key={dentist.id} dentist={dentist} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Button
              to="/dentists"
              variant="secondary"
              icon={<ArrowRight size={16} />}
            >
              View All Specialist Credentials & Bios
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Before & After Showcase (Interactive Slider) */}
      <section
        className="section-spacing"
        aria-label="Smile Transformation Gallery"
      >
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Transformations"
            title="Real smiles. Life-changing confidence."
            subtext="Drag the interactive slider below to inspect the precision and natural translucency of our aesthetic smile makeovers."
          />

          <div style={{ maxWidth: "920px", margin: "0 auto 40px" }}>
            <DraggableSlider
              beforeImage={featuredCase.beforeImage}
              afterImage={featuredCase.afterImage}
              beforeLabel="Before Treatment"
              afterLabel="After 10 Porcelain Veneers"
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <Button
              to="/before-after"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Explore Complete Smile Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Technology Showcase */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "var(--surface-cream)" }}
        aria-label="Advanced Technology"
      >
        <div className="container">
          <div className="intro-split-grid">
            <div>
              <div className="eyebrow-label">Clinical Innovation</div>
              <h2>Precision powered by technology.</h2>
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "1.08rem",
                  marginBottom: "24px",
                }}
              >
                We harness digital engineering to make procedures faster, more
                comfortable, and exceptionally predictable.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <Scan
                    size={24}
                    color="var(--teal-muted)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--navy-deep)",
                        marginBottom: "4px",
                      }}
                    >
                      3D Intraoral Optical Scanning
                    </h4>
                    <p style={{ fontSize: "0.92rem" }}>
                      No goopy impression trays. Capture 6,000 optical frames
                      per second in under 60 seconds.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <Layers
                    size={24}
                    color="var(--teal-muted)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--navy-deep)",
                        marginBottom: "4px",
                      }}
                    >
                      Guided Surgical Navigation
                    </h4>
                    <p style={{ fontSize: "0.92rem" }}>
                      Computer-assisted implant stents engineered with
                      sub-millimeter anatomical accuracy.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <Activity
                    size={24}
                    color="var(--teal-muted)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "1.15rem",
                        color: "var(--navy-deep)",
                        marginBottom: "4px",
                      }}
                    >
                      Swiss Guided Biofilm Therapy (GBT)
                    </h4>
                    <p style={{ fontSize: "0.92rem" }}>
                      Warm water and natural erythritol spray gently removes
                      100% of plaque bacteria without scraping.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-float)",
              }}
            >
              <img
                src={imageUrl("treatment-suite.jpg")}
                alt="Smileora high-tech treatment suite"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Patient Stories Carousel */}
      <section className="section-spacing" aria-label="Patient Testimonials">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Patient Experiences"
            title="Stories of restored joy & confidence."
            subtext="Discover how our comforting environment and master clinicians have turned fearful patients into lifelong advocates."
          />
        </div>
        <TestimonialCarousel />
      </section>

      {/* 11. Studio Location & Arrival */}
      <LocationSection />

      {/* 12. Appointment CTA */}
      <CTASection />
    </div>
  );
};
