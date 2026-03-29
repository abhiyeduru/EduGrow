export const colors = {
  navy: "#0F2A5C",
  navyMid: "#1A3F80",
  navyLight: "#2355A8",
  gold: "#C8941A",
  goldLight: "#E8B030",
  goldPale: "#FDF3DC",
  sky: "#E8F2FF",
  skyMid: "#C5DEFF",
  white: "#FFFFFF",
  offWhite: "#F7FAFF",
  text: "#0D1F40",
  textMid: "#3A5080",
  textMuted: "#6B82A8",
  border: "rgba(15,42,92,0.1)",
};

export const css = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');* { box-sizing: border-box; margin: 0; padding: 0; }body { font-family: 'DM Sans', sans-serif; background: ${colors.offWhite}; }button { cursor: pointer; font-family: 'DM Sans', sans-serif; }a { text-decoration: none; }@keyframes fadeUp {from { opacity: 0; transform: translateY(24px); }to { opacity: 1; transform: translateY(0); }}@keyframes shimmer {0% { background-position: -200% center; }100% { background-position: 200% center; }}@keyframes float {0%, 100% { transform: translateY(0px); }50% { transform: translateY(-20px); }}.fade-up { animation: fadeUp 0.55s ease both; }.fade-up-1 { animation: fadeUp 0.55s 0.1s ease both; }.fade-up-2 { animation: fadeUp 0.55s 0.2s ease both; }.fade-up-3 { animation: fadeUp 0.55s 0.3s ease both; }.float { animation: float 3s ease-in-out infinite; }.card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease; }.card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,42,92,0.14); }.nav-btn:hover { background: rgba(200,148,26,0.12) !important; color: ${colors.goldLight} !important; }.cta-btn:hover { background: ${colors.goldLight} !important; transform: translateY(-1px); }.outline-btn:hover { background: rgba(255,255,255,0.12) !important; }`;
