/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          panel: "#111A2C",
          raised: "#16213A",
          border: "#22304A",
        },
        signal: {
          DEFAULT: "#4FD1C5",
          dim: "#2C7A72",
          glow: "#8CF2E6",
        },
        alert: {
          DEFAULT: "#F5A623",
          dim: "#8A5C10",
        },
        muted: "#8CA0B8",
        ink_text: "#E8ECF1",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
        pulse_ring: {
          "0%": { boxShadow: "0 0 0 0 rgba(79,209,197,0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(79,209,197,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(79,209,197,0)" },
        },
        pulse_ring_alert: {
          "0%": { boxShadow: "0 0 0 0 rgba(245,166,35,0.55)" },
          "70%": { boxShadow: "0 0 0 8px rgba(245,166,35,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(245,166,35,0)" },
        },
      },
      animation: {
        sweep: "sweep 3.2s ease-in-out infinite",
        blip: "pulse_ring 2.2s ease-out infinite",
        blip_alert: "pulse_ring_alert 1.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};
