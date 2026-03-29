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
    if (form.name && form.phone) setSent(true);
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

      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              [
                "📍",
                colors.navyLight,
                "Our Office",
                "Plot No: 500, 2nd Floor, Opposite Vivin Towers, Beside Taza Kitchen, Near YSR Statue, Madhapur, Hyderabad – 500081",
              ],
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
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: colors.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      color: colors.navy,
                      fontWeight: "600",
                      fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                      lineHeight: 1.5,
                    }}
                  >
                    {val}
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ background: colors.navy, borderRadius: "14px", padding: "1.5rem" }}>
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
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  ["📷", "Instagram"],
                  ["👥", "Facebook"],
                  ["▶", "YouTube"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    style={{
                      flex: 1,
                      background: "rgba(200,148,26,0.18)",
                      border: "1px solid rgba(200,148,26,0.35)",
                      borderRadius: "10px",
                      padding: "0.75rem 0.5rem",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.2rem" }}>{icon}</div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "clamp(0.6rem, 1.5vw, 0.68rem)",
                        marginTop: "0.3rem",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div
            style={{
              background: colors.white,
              borderRadius: "16px",
              padding: "clamp(1.5rem, 3vw, 2rem)",
              border: `1px solid ${colors.border}`,
              borderTop: `4px solid ${colors.gold}`,
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>🎉</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: colors.navy,
                    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                  }}
                >
                  Enquiry Submitted!
                </div>
                <div
                  style={{
                    color: colors.textMuted,
                    fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                    lineHeight: 1.6,
                  }}
                >
                  Thank you, {form.name}! Our team will reach out to you within
                  24 hours.
                </div>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: "1.5rem",
                    background: colors.navy,
                    color: colors.white,
                    border: "none",
                    padding: "0.7rem 1.75rem",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  Submit Another →
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
                    background: colors.navy,
                    color: colors.white,
                    border: "none",
                    padding: "0.9rem",
                    borderRadius: "8px",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    transition: "all 0.2s",
                  }}
                >
                  Submit Enquiry →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
