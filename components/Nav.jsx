import { colors } from "../styles/theme";

export default function Nav({ page, setPage }) {
  const links = ["Home", "How It Works", "Services", "Contact"];

  return (
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
        onClick={() => setPage("Home")}
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
        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colors.white,
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            EduGrow
          </div>
          <div
            style={{
              color: colors.goldLight,
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Admissions
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {links.map((l) => (
          <button
            key={l}
            className="nav-btn"
            onClick={() => setPage(l)}
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
    </nav>
  );
}
