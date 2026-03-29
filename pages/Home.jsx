import { colors } from "../styles/theme";
import Hero3D from "../components/Hero3D";

export default function Home({ setPage }) {
  return (
    <div style={{ paddingTop: "66px" }}>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(145deg, ${colors.navy} 0%, ${colors.navyMid} 60%, #1E4D9A 100%)`,
          padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 2.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage: `linear-gradient(${colors.white} 1px, transparent 1px), linear-gradient(90deg, ${colors.white} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left content */}
          <div>
            <div
              className="fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(200,148,26,0.18)",
                border: `1px solid rgba(200,148,26,0.45)`,
                borderRadius: "100px",
                padding: "0.35rem 1.1rem",
                marginBottom: "1.75rem",
                fontSize: "clamp(0.65rem, 2vw, 0.7rem)",
              }}
            >
              <span
                style={{
                  color: colors.goldLight,
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                ✦ Trusted Since 2012 · All India Admissions Support
              </span>
            </div>
            <h1
              className="fade-up-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 6vw, 3.8rem)",
                fontWeight: "800",
                color: colors.white,
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Complete Admission
              <br />
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldLight}, ${colors.gold})`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Solutions for Schools &amp; Colleges
              </span>
            </h1>
            <p
              className="fade-up-2"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              From Leads to Admissions — We Handle Everything. Digital
              marketing, automation, inside sales, and counselling under one
              roof.
            </p>
            <div
              className="fade-up-3"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <button
                className="cta-btn"
                onClick={() => setPage("Contact")}
                style={{
                  background: colors.gold,
                  color: colors.white,
                  border: "none",
                  padding: "0.9rem 2.2rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  transition: "all 0.2s",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                Get Started Now →
              </button>
              <button
                className="outline-btn"
                onClick={() => setPage("How It Works")}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: colors.white,
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  transition: "all 0.2s",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Right 3D - Hidden on mobile */}
          <div
            style={{
              height: "400px",
              display: "none",
            }}
            className="hero-3d"
          >
            <Hero3D />
          </div>
        </div>

        <style>{`
          @media (min-width: 769px) {
            .hero-3d {
              display: block !important;
            }
          }
        `}</style>
      </div>

      {/* Stats bar */}
      <div
        style={{
          background: colors.gold,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          ["Since 2012", "Proven Track Record"],
          ["All India", "Admissions Support"],
          ["Schools & Colleges", "All Institution Types"],
          ["End-to-End", "Complete Service"],
        ].map(([v, l]) => (
          <div
            key={l}
            style={{
              padding: "1.3rem 1.5rem",
              textAlign: "center",
              borderRight: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                color: colors.white,
                fontWeight: "700",
                fontSize: "clamp(0.9rem, 3vw, 1.15rem)",
              }}
            >
              {v}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "clamp(0.65rem, 2vw, 0.72rem)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginTop: "0.2rem",
              }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* Who We Serve */}
      <div style={{ background: colors.white, padding: "clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                color: colors.gold,
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Who We Serve
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                color: colors.navy,
                fontWeight: "700",
              }}
            >
              Admission Solutions For Every Institution
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              ["🏫", "Schools", "Primary, Secondary & CBSE/State Board"],
              ["🏛️", "Junior Colleges", "Intermediate & Pre-University"],
              ["🎓", "Degree Colleges", "UG & PG Programs"],
              ["💻", "B.Tech / Engineering", "Technical Admissions"],
              ["🏥", "MBBS / Medical", "Medical Seats Across India"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  background: colors.sky,
                  borderRadius: "14px",
                  padding: "1.75rem 1.25rem",
                  textAlign: "center",
                  border: `1px solid ${colors.skyMid}`,
                  borderTop: `4px solid ${colors.navy}`,
                }}
              >
                <div style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: "0.75rem" }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontWeight: "700",
                    color: colors.navy,
                    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.75rem, 2vw, 0.8rem)",
                    color: colors.textMuted,
                    lineHeight: 1.55,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Services Preview */}
      <div style={{ background: colors.offWhite, padding: "clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                color: colors.gold,
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Our Strength
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                color: colors.navy,
                fontWeight: "700",
              }}
            >
              Everything Under One Roof
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              [
                "📢",
                colors.navyLight,
                "Digital Marketing",
                "Google Ads, Meta Ads, SEO campaigns targeting parents and students.",
              ],
              [
                "📞",
                "#1A6B4A",
                "Inside Sales Team",
                "Dedicated telecalling team with high-conversion follow-up strategy.",
              ],
              [
                "⚙️",
                colors.gold,
                "Automation Systems",
                "IVR, WhatsApp API, CRM lead tracking and automated workflows.",
              ],
              [
                "🎨",
                "#8B2FC9",
                "Creative Team",
                "Graphic design and ad creatives crafted for maximum engagement.",
              ],
            ].map(([icon, accent, title, desc]) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  background: colors.white,
                  borderRadius: "14px",
                  padding: "1.75rem",
                  border: `1px solid ${colors.border}`,
                  borderLeft: `4px solid ${accent}`,
                }}
              >
                <div style={{ fontSize: "clamp(1.5rem, 4vw, 1.8rem)", marginBottom: "0.85rem" }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontWeight: "700",
                    color: colors.navy,
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.86rem)",
                    color: colors.textMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button
              className="cta-btn"
              onClick={() => setPage("Services")}
              style={{
                background: colors.navy,
                color: colors.white,
                border: "none",
                padding: "0.85rem 2.2rem",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "0.95rem",
                transition: "all 0.2s",
              }}
            >
              View All Services →
            </button>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyLight} 100%)`,
          padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 2.5rem)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            color: colors.goldLight,
            fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
            marginBottom: "0.75rem",
            fontWeight: "700",
          }}
        >
          Partner with Us for Guaranteed Admission Growth
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            marginBottom: "2rem",
            fontSize: "clamp(0.9rem, 2vw, 0.95rem)",
          }}
        >
          Ready to scale your institution's reach and impact? Let's connect.
        </p>
        <button
          className="cta-btn"
          onClick={() => setPage("Contact")}
          style={{
            background: colors.gold,
            color: colors.white,
            border: "none",
            padding: "0.9rem 2.4rem",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "0.95rem",
            transition: "all 0.2s",
          }}
        >
          Get Started Now →
        </button>
      </div>
    </div>
  );
}
