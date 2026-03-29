import { useState } from "react";
import { colors } from "../styles/theme";

export default function Nav({ page, setPage }) {
  const links = ["Home", "How It Works", "Services", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    setPage(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: colors.navy,
          borderBottom: `2px solid ${colors.gold}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          height: "66px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleNavClick("Home")}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${colors.gold}, ${colors.goldLight})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            🎓
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colors.white,
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            Edu Admission grow
          </div>
        </div>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            gap: "0.25rem",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
          className="desktop-menu"
        >
          {links.map((l) => (
            <button
              key={l}
              className="nav-btn"
              onClick={() => handleNavClick(l)}
              style={{
                border: "none",
                padding: "0.5rem 1.1rem",
                borderRadius: "6px",
                fontSize: "0.84rem",
                fontWeight: page === l ? "600" : "400",
                color: page === l ? colors.goldLight : "rgba(255,255,255,0.72)",
                background:
                  page === l ? "rgba(200,148,26,0.18)" : "transparent",
                transition: "all 0.18s",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: colors.white,
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="hamburger-btn"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "66px",
            left: 0,
            right: 0,
            background: colors.navy,
            borderBottom: `2px solid ${colors.gold}`,
            zIndex: 99,
            display: "none",
            flexDirection: "column",
            animation: "slideDown 0.3s ease",
          }}
          className="mobile-menu"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNavClick(l)}
              style={{
                border: "none",
                padding: "1rem 2.5rem",
                background:
                  page === l ? "rgba(200,148,26,0.18)" : "transparent",
                color: page === l ? colors.goldLight : "rgba(255,255,255,0.72)",
                fontSize: "0.95rem",
                fontWeight: page === l ? "600" : "400",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.18s",
                borderBottom: `1px solid rgba(200,148,26,0.2)`,
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
}
