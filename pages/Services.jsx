import { colors } from "../styles/theme";

export default function Services() {
  const services = [
    {
      icon: "📢",
      color: colors.navyLight,
      title: "Strong Digital Marketing Team",
      tags: ["Google Ads", "Meta Ads", "SEO"],
      desc: "Our performance marketing team runs hyper-targeted campaigns on Google, Facebook, Instagram, and LinkedIn — specifically designed to reach parents and students searching for institutions like yours.",
    },
    {
      icon: "📞",
      color: "#1A6B4A",
      title: "Dedicated Inside Sales Team",
      tags: ["Telecalling", "Follow-ups", "Conversion Experts"],
      desc: "A trained inside sales squad handles all inbound and outbound calls. We qualify every lead, nurture cold prospects, and use proven high-conversion scripts to drive enrollments.",
    },
    {
      icon: "⚙️",
      color: colors.gold,
      title: "Automation Systems",
      tags: ["IVR Systems", "WhatsApp API", "CRM & Lead Tracking"],
      desc: "We deploy IVR auto-calling, WhatsApp Business API messaging, and a centralized CRM to track every lead's journey in real time — ensuring zero follow-up slips through.",
    },
    {
      icon: "🎨",
      color: "#8B2FC9",
      title: "Creative Team",
      tags: ["Graphic Design", "Ad Creatives", "Branding"],
      desc: "Our in-house design team creates scroll-stopping ad creatives, banners, brochures, and social media content crafted specifically for the education sector.",
    },
    {
      icon: "🎓",
      color: colors.navyMid,
      title: "Admission Services",
      tags: ["Schools", "Junior Colleges", "Degree", "B.Tech", "MBBS"],
      desc: "We cover admissions across all institution types and verticals — from primary schools to MBBS seats across India. Our network ensures seamless state-to-state coordination.",
    },
    {
      icon: "📊",
      color: "#B03A2E",
      title: "End-to-End Admission Team",
      tags: ["Full Process Tracking", "Transparency", "ROI Reporting"],
      desc: "You get complete visibility into every step — leads generated, calls made, walk-ins scheduled, and final admissions. Full transparency with real-time dashboards.",
    },
  ];

  return (
    <div style={{ paddingTop: "66px" }}>
      <div
        style={{
          background: `linear-gradient(145deg, ${colors.navy}, ${colors.navyMid})`,
          padding: "4.5rem 2.5rem 3.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            color: colors.goldLight,
            fontWeight: "600",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          What We Offer
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: colors.white,
            fontSize: "2.8rem",
            fontWeight: "800",
            marginBottom: "0.75rem",
          }}
        >
          Our Strength & Services
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          Six core capabilities working in sync to deliver admission results for
          schools and colleges across India.
        </p>
      </div>

      <div
        style={{
          height: "4px",
          background: `linear-gradient(90deg, ${colors.navy}, ${colors.gold}, ${colors.navy})`,
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map(({ icon, color, title, tags, desc }) => (
            <div
              key={title}
              className="card-hover"
              style={{
                background: colors.white,
                borderRadius: "16px",
                padding: "2rem",
                border: `1px solid ${colors.border}`,
                borderTop: `4px solid ${color}`,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: `${color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.7rem",
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "700",
                  color: colors.navy,
                  fontSize: "1.1rem",
                }}
              >
                {title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      color: color,
                      background: `${color}15`,
                      borderRadius: "100px",
                      padding: "0.2rem 0.65rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: colors.textMuted,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            [
              "🏆",
              colors.gold,
              "Trusted Since 2012",
              "Delivering proven results and industry experience for over a decade.",
            ],
            [
              "🗺️",
              colors.navyLight,
              "All India Admissions Support",
              "National outreach network with seamless state-to-state coordination.",
            ],
            [
              "🔄",
              "#1A6B4A",
              "Complete End-to-End System",
              "From lead generation to enrollment — full process tracking and transparency.",
            ],
          ].map(([icon, color, title, desc]) => (
            <div
              key={title}
              style={{
                background: colors.sky,
                borderRadius: "14px",
                padding: "1.5rem",
                border: `1px solid ${colors.skyMid}`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>
                {icon}
              </div>
              <div
                style={{
                  fontWeight: "700",
                  color,
                  fontSize: "0.95rem",
                  marginBottom: "0.4rem",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
