import { colors } from "../styles/theme";

export default function Footer({ setPage }) {
  return (
    <footer
      style={{
        background: colors.navy,
        borderTop: `3px solid ${colors.gold}`,
        padding: "3rem 2.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                color: colors.goldLight,
                fontSize: "1.3rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              EduAdmissiongrow.com
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.84rem",
                lineHeight: 1.6,
              }}
            >
              Complete Admission Solutions for Schools & Colleges across India.
              Trusted since 2012.
            </div>
          </div>
          <div>
            <div
              style={{
                color: colors.goldLight,
                fontWeight: "600",
                fontSize: "0.85rem",
                marginBottom: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Pages
            </div>
            {["Home", "How It Works", "Services", "Contact"].map((p) => (
              <div
                key={p}
                onClick={() => setPage(p)}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.85rem",
                  marginBottom: "0.4rem",
                  cursor: "pointer",
                }}
              >
                {p}
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                color: colors.goldLight,
                fontWeight: "600",
                fontSize: "0.85rem",
                marginBottom: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </div>
            {[
              ["📍", "Plot No: 500, 2nd Floor, Madhapur, Hyderabad – 500081"],
              ["📞", "9381791038"],
              ["✉️", "contact@graviitycloud.com"],
              ["🌐", "www.eduadmissiongrow.com"],
            ].map(([icon, val]) => (
              <div
                key={val}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.82rem",
                  marginBottom: "0.5rem",
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <span>{icon}</span>
                <span>{val}</span>
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                color: colors.goldLight,
                fontWeight: "600",
                fontSize: "0.85rem",
                marginBottom: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Powered by
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.7)",
                fontWeight: "600",
                fontSize: "0.95rem",
                marginBottom: "0.25rem",
              }}
            >
              🎓 EduAdmissiongrow
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.8rem",
              }}
            >
              .COM
            </div>
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.75rem" }}>
              {["📷", "👥", "▶"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(200,148,26,0.2)",
                    border: `1px solid rgba(200,148,26,0.4)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.25rem",
            textAlign: "center",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.78rem",
          }}
        >
          © 2024 EduAdmissiongrow.COM · All rights reserved
        </div>
      </div>
    </footer>
  );
}
