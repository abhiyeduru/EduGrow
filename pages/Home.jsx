import { colors } from "../styles/theme";
import Hero3D from "../components/Hero3D";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Counter Component
function CounterComponent({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: colors.gold }}>
      {count.toLocaleString()}+
    </div>
  );
}

// Contact Form Component
function ContactFormComponent() {
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
      const message = `Hi, I'm ${form.name} from ${form.institution || "an institution"}. I'm interested in your admission services for ${form.type || "our institution"}. Please contact me at ${form.phone}. ${form.message ? `Additional info: ${form.message}` : ""}`;
      const whatsappUrl = `https://wa.me/919381791038?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setTimeout(() => setSent(true), 500);
    }
  };

  return (
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
          <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>✅</div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: colors.navy, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: "700", marginBottom: "0.5rem" }}>Opening WhatsApp...</div>
          <div style={{ color: colors.textMuted, fontSize: "clamp(0.85rem, 2vw, 0.9rem)", lineHeight: 1.6, marginBottom: "1rem" }}>Your message is being sent to our team.</div>
          <button onClick={() => { const message = `Hi, I'm ${form.name} from ${form.institution || "an institution"}. I'm interested in your admission services for ${form.type || "our institution"}. Please contact me at ${form.phone}. ${form.message ? `Additional info: ${form.message}` : ""}`; const whatsappUrl = `https://wa.me/919381791038?text=${encodeURIComponent(message)}`; window.open(whatsappUrl, "_blank"); }} style={{ background: "#25D366", color: colors.white, border: "none", padding: "0.8rem 1.5rem", borderRadius: "8px", fontWeight: "600", fontSize: "0.9rem", cursor: "pointer", marginRight: "0.5rem" }}>📱 Open WhatsApp</button>
          <button onClick={() => setSent(false)} style={{ background: colors.navy, color: colors.white, border: "none", padding: "0.8rem 1.5rem", borderRadius: "8px", fontWeight: "600", fontSize: "0.9rem", cursor: "pointer" }}>Send Another</button>
        </div>
      ) : (
        <>
          {[["name", "Your Name *", "text"], ["institution", "Institution Name", "text"], ["phone", "Phone Number *", "tel"], ["email", "Email Address", "email"]].map(([key, label, type]) => (
            <div key={key} style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.78rem", color: colors.textMuted, marginBottom: "0.35rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</label>
              <input type={type} value={form[key]} onChange={(e) => handle(key, e.target.value)} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${colors.border}`, background: colors.offWhite, fontSize: "clamp(0.85rem, 2vw, 0.9rem)", color: colors.text, outline: "none", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
            </div>
          ))}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.78rem", color: colors.textMuted, marginBottom: "0.35rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.06em" }}>Institution Type</label>
            <select value={form.type} onChange={(e) => handle("type", e.target.value)} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${colors.border}`, background: colors.offWhite, fontSize: "clamp(0.85rem, 2vw, 0.9rem)", color: form.type ? colors.text : colors.textMuted, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }}>
              <option value="">Select type…</option>
              {["School", "Junior College", "Degree College", "B.Tech / Engineering", "MBBS / Medical", "Other"].map((o) => (<option key={o} value={o}>{o}</option>))}
            </select>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.78rem", color: colors.textMuted, marginBottom: "0.35rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.06em" }}>Message (Optional)</label>
            <textarea value={form.message} onChange={(e) => handle("message", e.target.value)} rows={3} style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: "8px", border: `1px solid ${colors.border}`, background: colors.offWhite, fontSize: "clamp(0.85rem, 2vw, 0.9rem)", color: colors.text, resize: "vertical", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} placeholder="Tell us about your institution and admission goals…" />
          </div>
          <button className="cta-btn" onClick={submit} style={{ width: "100%", background: "#25D366", color: colors.white, border: "none", padding: "0.9rem", borderRadius: "8px", fontWeight: "700", fontSize: "0.95rem", transition: "all 0.2s", cursor: "pointer" }}>📱 Send via WhatsApp</button>
        </>
      )}
    </div>
  );
}

export default function Home({ setPage }) {
  return (
    <div style={{ paddingTop: "66px" }}>
      {/* Marquee Banner */}
      <div
        style={{
          background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldLight})`,
          padding: "0.75rem 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .marquee-text {
            animation: marquee 20s linear infinite;
            white-space: nowrap;
            display: inline-block;
            padding: 0 2rem;
          }
        `}</style>
        <div style={{ display: "flex" }}>
          <div className="marquee-text" style={{ color: colors.navy, fontWeight: "700", fontSize: "0.9rem" }}>
            🎓 Complete Admission Solutions • Digital Marketing • Lead Generation • Inside Sales • Automation • Counselling • Campus Visits • Final Admissions
          </div>
          <div className="marquee-text" style={{ color: colors.navy, fontWeight: "700", fontSize: "0.9rem" }}>
            🎓 Complete Admission Solutions • Digital Marketing • Lead Generation • Inside Sales • Automation • Counselling • Campus Visits • Final Admissions
          </div>
        </div>
      </div>

      {/* Highlighted Stats Section */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyLight} 100%)`,
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 2.5rem)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.gold} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.gold} 0%, transparent 50%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            ✨ Our Achievement
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 6vw, 3.2rem)",
              color: colors.white,
              fontWeight: "800",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            2026: <span style={{ color: colors.gold }}>15,000+</span> Admissions Completed
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            We've successfully guided over 15,000 students to their dream institutions across India. Now it's your turn to join our success story!
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              ["🎓", "15,000+", "Students Admitted"],
              ["🏫", "500+", "Institutions Partnered"],
              ["📈", "98%", "Success Rate"],
            ].map(([icon, stat, label]) => (
              <div
                key={label}
                style={{
                  background: "rgba(200, 148, 26, 0.15)",
                  border: `2px solid ${colors.gold}`,
                  borderRadius: "12px",
                  padding: "1.5rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    color: colors.gold,
                    fontWeight: "700",
                  }}
                >
                  {stat}
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("Contact")}
              style={{
                background: colors.gold,
                color: colors.navy,
                border: "none",
                padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: `0 6px 20px rgba(200, 148, 26, 0.4)`,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 8px 25px rgba(200, 148, 26, 0.6)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = `0 6px 20px rgba(200, 148, 26, 0.4)`;
              }}
            >
              🚀 Start Your Journey Now
            </button>
            <button
              onClick={() => setPage("Contact")}
              style={{
                background: "transparent",
                color: colors.gold,
                border: `2px solid ${colors.gold}`,
                padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = colors.gold;
                e.target.style.color = colors.navy;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = colors.gold;
              }}
            >
              📞 Contact Us Today
            </button>
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background: "rgba(200, 148, 26, 0.1)",
              borderRadius: "12px",
              border: `1px solid rgba(200, 148, 26, 0.3)`,
            }}
          >
            <div style={{ color: colors.goldLight, fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              ⏰ Limited Time Offer
            </div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
              Get 20% discount on our premium admission packages when you enquire today!
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ background: colors.white, padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.75rem", color: colors.gold, fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Live Statistics</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: colors.navy, fontWeight: "700" }}>Our Growth & Impact</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {/* Admissions Counter */}
            <div style={{ background: `linear-gradient(135deg, ${colors.navyLight}, ${colors.navy})`, borderRadius: "16px", padding: "2rem", textAlign: "center", color: colors.white }}>
              <div style={{ fontSize: "0.85rem", color: colors.goldLight, fontWeight: "600", marginBottom: "1rem", textTransform: "uppercase" }}>Total Admissions</div>
              <CounterComponent target={15000} />
              <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginTop: "1rem" }}>& Still Counting...</div>
            </div>

            {/* Colleges Pie Chart */}
            <div style={{ background: colors.offWhite, borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.85rem", color: colors.gold, fontWeight: "600", marginBottom: "1rem", textTransform: "uppercase" }}>Colleges by Type</div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={[{ name: "Schools", value: 150 }, { name: "Jr Colleges", value: 120 }, { name: "Degree", value: 130 }, { name: "B.Tech", value: 80 }, { name: "MBBS", value: 20 }]} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                    <Cell fill={colors.navy} />
                    <Cell fill={colors.navyLight} />
                    <Cell fill={colors.gold} />
                    <Cell fill={colors.goldLight} />
                    <Cell fill="#25D366" />
                  </Pie>
                  <Tooltip formatter={(value) => `${value} colleges`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Admissions Distribution */}
            <div style={{ background: colors.offWhite, borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.85rem", color: colors.gold, fontWeight: "600", marginBottom: "1rem", textTransform: "uppercase" }}>Admissions Distribution</div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={[{ name: "School", value: 4500 }, { name: "Jr College", value: 3200 }, { name: "Degree", value: 3800 }, { name: "B.Tech", value: 2400 }, { name: "MBBS", value: 1100 }]} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                    <Cell fill={colors.navy} />
                    <Cell fill={colors.navyLight} />
                    <Cell fill={colors.gold} />
                    <Cell fill={colors.goldLight} />
                    <Cell fill="#25D366" />
                  </Pie>
                  <Tooltip formatter={(value) => `${value} admissions`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ background: colors.offWhite, padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              Get in Touch
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                color: colors.navy,
                fontWeight: "700",
              }}
            >
              Quick Enquiry Form
            </h2>
          </div>

          {/* Contact Form */}
          <ContactFormComponent setPage={setPage} />
        </div>
      </div>
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
                  cursor: "pointer",
                }}
              >
                Get Started Now →
              </button>
              <button
                className="outline-btn"
                onClick={() => setPage("Contact")}
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
                  cursor: "pointer",
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
                onClick={() => setPage("Contact")}
                style={{
                  background: colors.sky,
                  borderRadius: "14px",
                  padding: "1.75rem 1.25rem",
                  textAlign: "center",
                  border: `1px solid ${colors.skyMid}`,
                  borderTop: `4px solid ${colors.navy}`,
                  cursor: "pointer",
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
            cursor: "pointer",
          }}
        >
          Get Started Now →
        </button>
      </div>
    </div>
  );
}
