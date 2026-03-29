import { useState } from "react";
import { colors } from "../styles/theme";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    institution: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  
  const submit = () => {
    if (form.name && form.phone) {
      // Create message
      const message = `Hi, I'm ${form.name} from ${form.institution || "an institution"}. I'm interested in your admission services for ${form.type || "our institution"}. Please contact me at ${form.phone}. ${form.message ? `Additional info: ${form.message}` : ""}`;
      
      // Open WhatsApp directly with message
      const whatsappUrl = `https://wa.me/919381791038?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      // Show success message after a short delay
      setTimeout(() => {
        setSent(true);
      }, 500);
    }
  };

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
          Let's Connect
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
          Start Growing Your Admissions Today
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          Ready to scale your institution's reach? Get in touch with our team.
        </p>
      </div>

      <div
        style={{
          height: "4px",
          background: `linear-gradient(90deg, ${colors.navy}, ${colors.gold}, ${colors.navy})`,
        }}
      />

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        {/* Enquiry form - shown first */}
        <div
          style={{
            background: colors.white,
            borderRadius: "16px",
            padding: "clamp(1.5rem, 3vw, 2rem)",
            border: `1px solid ${colors.border}`,
            borderTop: `4px solid ${colors.gold}`,
            marginBottom: "2rem",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>✅</div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: colors.navy,
                  fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                }}
              >
                Opening WhatsApp...
              </div>
              <div
                style={{
                  color: colors.textMuted,
                  fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                Your message is being sent to our team. If WhatsApp doesn't open, please click the button below.
              </div>
              <button
                onClick={() => {
                  const message = `Hi, I'm ${form.name} from ${form.institution || "an institution"}. I'm interested in your admission services for ${form.type || "our institution"}. Please contact me at ${form.phone}. ${form.message ? `Additional info: ${form.message}` : ""}`;
                  const whatsappUrl = `https://wa.me/919381791038?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                style={{
                  background: "#25D366",
                  color: colors.white,
                  border: "none",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                📱 Open WhatsApp
              </button>
              <button
                onClick={() => setSent(false)}
                style={{
                  background: colors.navy,
                  color: colors.white,
                  border: "none",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: colors.navy,
                  fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                }}
              >
                Institution Enquiry Form
              </h2>
              {[
                ["name", "Your Name *", "text"],
                ["institution", "Institution Name", "text"],
                ["phone", "Phone Number *", "tel"],
                ["email", "Email Address", "email"],
              ].map(([key, label, type]) => (
                <div key={key} style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      color: colors.textMuted,
                      marginBottom: "0.35rem",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[key]}
                    onChange={(e) => handle(key, e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.7rem 0.9rem",
                      borderRadius: "8px",
                      border: `1px solid ${colors.border}`,
                      background: colors.offWhite,
                      fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                      color: colors.text,
                      outline: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.78rem",
                    color: colors.textMuted,
                    marginBottom: "0.35rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Institution Type
                </label>
                <select
                  value={form.type}
                  onChange={(e) => handle("type", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.9rem",
                    borderRadius: "8px",
                    border: `1px solid ${colors.border}`,
                    background: colors.offWhite,
                    fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                    color: form.type ? colors.text : colors.textMuted,
                    fontFamily: "'DM Sans', sans-serif",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="">Select type…</option>
                  {[
                    "School",
                    "Junior College",
                    "Degree College",
                    "B.Tech / Engineering",
                    "MBBS / Medical",
                    "Other",
                  ].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.78rem",
                    color: colors.textMuted,
                    marginBottom: "0.35rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Message (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handle("message", e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.9rem",
                    borderRadius: "8px",
                    border: `1px solid ${colors.border}`,
                    background: colors.offWhite,
                    fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                    color: colors.text,
                    resize: "vertical",
                    fontFamily: "'DM Sans', sans-serif",
                    boxSizing: "border-box",
                  }}
                  placeholder="Tell us about your institution and admission goals…"
                />
              </div>
              <button
                className="cta-btn"
                onClick={submit}
                style={{
                  width: "100%",
                  background: "#25D366",
                  color: colors.white,
                  border: "none",
                  padding: "0.9rem",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                📱 Send via WhatsApp
              </button>
            </>
          )}
        </div>

        {/* Contact info below form */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {[
            ["📍", colors.navyLight, "Our Office", "Madhapur, Hyderabad – 500081"],
            ["📞", colors.gold, "Phone", "9381791038"],
            ["✉️", "#1A6B4A", "Email", "contact@graviitycloud.com"],
            ["🌐", "#8B2FC9", "Website", "www.graviitycloud.com"],
          ].map(([icon, color, label, val]) => (
            <div
              key={label}
              style={{
                background: colors.white,
                borderRadius: "14px",
                padding: "clamp(1rem, 3vw, 1.4rem)",
                border: `1px solid ${colors.border}`,
                borderLeft: `4px solid ${color}`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: "0.5rem" }}>
                {icon}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: colors.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.3rem",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: colors.navy,
                  fontWeight: "600",
                  fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                }}
              >
                {val}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div
          style={{
            marginTop: "2rem",
            background: colors.navy,
            borderRadius: "14px",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: colors.goldLight,
              fontWeight: "700",
              fontSize: "0.9rem",
              marginBottom: "1rem",
            }}
          >
            Follow @graviitycloud
          </div>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
            {[
              ["📷", "Instagram"],
              ["👥", "Facebook"],
              ["▶", "YouTube"],
            ].map(([icon, label]) => (
              <div
                key={label}
                style={{
                  width: "60px",
                  height: "60px",
                  background: "rgba(200,148,26,0.18)",
                  border: "1px solid rgba(200,148,26,0.35)",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: "1.5rem" }}>{icon}</div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.6rem",
                    marginTop: "0.2rem",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
