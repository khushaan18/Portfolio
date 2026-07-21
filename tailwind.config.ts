import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070C",
        },
        surface: {
          DEFAULT: "#0D1220",
          2: "#121A2C",
          border: "#1F2A40",
        },
        text: {
          primary: "#EAF0FA",
          muted: "#93A1B8",
          faint: "#54637C",
        },
        signal: {
          DEFAULT: "#2FE6C7",
          dim: "#1B7A6C",
        },
        violet: {
          DEFAULT: "#8B7CF6",
        },
        amber: {
          DEFAULT: "#F5A85B",
        },
        rose: {
          DEFAULT: "#F45B69",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #121A2C 1px, transparent 1px), linear-gradient(to bottom, #121A2C 1px, transparent 1px)",
        "radial-fade": "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)",
      },
      backgroundSize: {
        "grid-cell": "44px 44px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(22px) translateX(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(47, 230, 199, 0.35)" },
          "100%": { boxShadow: "0 0 0 14px rgba(47, 230, 199, 0)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        rise: "rise 0.7s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        marquee: "marquee 26s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
