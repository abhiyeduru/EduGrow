import { colors } from "../styles/theme";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "📣",
      title: "Digital Marketing Campaigns",
      sub: "Google Ads · Social Media Ads",
      desc: "We run targeted Google Ads and social media campaigns across Facebook, Instagram, and LinkedIn to reach the right students and parents at the right time.",
      color: colors.navyLight,
    },
    {
      num: "02",
      icon: "📲",
      title: "Lead Generation",
      sub: "Student & Parent Enquiries",
      desc: "Marketing campaigns drive inbound enquiries from prospective students and parents directly into our centralized lead management system.",
      color: "#1A6B4A",
    },
    {
      num: "03",
      icon: "⚙️",
      title: "Automated Systems",
      sub: "IVR · WhatsApp API · CRM Tracking",
      desc: "Every lead is instantly captured and nurtured through automated IVR calls, WhatsApp API messaging, and full CRM tracking — zero lead is missed.",
      color: colors.gold,
    },
    {
      num: "04",
      icon: "🎯",
      title: "Inside Sales Team Follow-Up",
      sub: "Automated Workflows · High Conversion",
      desc: "Our dedicated inside sales team uses proven scripts and follow-up workflows to convert enquiries into interested prospects through telecalling.",
      color: "#8B2FC9",
    },
    {
      num: "05",
      icon: "🤝",
      title: "Counselling & Qualification",
      sub: "Real-Time Tracking",
      desc: "Qualified leads are counselled by trained advisors. We assess student needs, guide them to the right program, and move them toward a campus visit.",
      color: "#B03A2E",
    },
    {
      num: "06",
      icon: "🏛️",
      title: "Walk-ins to Campus",
      sub: "Scheduled Visits",
      desc: "We schedule and coordinate campus visits for interested students, ensuring maximum footfall at your institution with proper preparation.",
      color: colors.navyMid,
    },
    {
      num: "07",
      icon: "🎓",
      title: "Final Admissions",
      sub: "Enrollment Complete",
      desc: "The funnel concludes with successful student enrollment. We track every conversion and provide full transparency on ROI and admission outcomes.",
      color: "#1A6B4A",
    },
  ];

  return (
    <div style={{ paddingTop: "66px" }}>
      <div
        style={{
          background: `linear-gradient(145deg, ${colors.navy}, ${colors.navyMid})`,
          padding: "clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 5vw, 2.5rem) clamp(2rem, 5vw, 3.5rem)",
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
          The Process
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: colors.white,
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: "800",
            marginBottom: "0.75rem",
          }}
        >
          How We Generate Admissions
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          A proven 7-step funnel from digital campaign to final enrollment —
          fully managed by our team.
        </p>
      </div>

      <div
        style={{
          height: "4px",
          background: `linear-gradient(90deg, ${colors.navy}, ${colors.gold}, ${colors.navy})`,
        }}
      />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
              {/* Left timeline */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "clamp(50px, 10vw, 64px)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "clamp(40px, 8vw, 48px)",
                    height: "clamp(40px, 8vw, 48px)",
                    borderRadius: "50%",
                    background: step.color,
                    color: colors.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                    border: `3px solid ${colors.white}`,
                    boxShadow: `0 0 0 2px ${step.color}40`,
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      flex: 1,
                      background: `linear-gradient(${step.color}, ${steps[i + 1].color})`,
                      minHeight: "32px",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="card-hover"
                style={{
                  flex: 1,
                  background: colors.white,
                  borderRadius: "14px",
                  padding: "clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 1.75rem)",
                  marginLeft: "clamp(0.75rem, 2vw, 1.25rem)",
                  marginBottom: i < steps.length - 1 ? "1.25rem" : 0,
                  border: `1px solid ${colors.border}`,
                  borderLeft: `4px solid ${step.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ fontSize: "clamp(1.5rem, 4vw, 1.8rem)", lineHeight: 1 }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: "700",
                        color: colors.navy,
                        fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)",
                        fontWeight: "600",
                        color: step.color,
                        background: `${step.color}18`,
                        borderRadius: "100px",
                        padding: "0.2rem 0.65rem",
                        marginBottom: "0.6rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {step.sub}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(0.8rem, 2vw, 0.87rem)",
                        color: colors.textMuted,
                        lineHeight: 1.65,
                      }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            background: colors.navy,
            borderRadius: "16px",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colors.goldLight,
              fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
              fontWeight: "700",
              marginBottom: "0.6rem",
            }}
          >
            Ready to Fill Your Institution?
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
              marginBottom: "1.5rem",
            }}
          >
            Our end-to-end process is designed to maximise your admission
            numbers every season.
          </div>
          <a
            href="tel:9381791038"
            style={{
              display: "inline-block",
              background: colors.gold,
              color: colors.white,
              padding: "0.85rem 2.2rem",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            📞 Call 9381791038
          </a>
        </div>
      </div>
    </div>
  );
}
