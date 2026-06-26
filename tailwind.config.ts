import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0E7A35",
          50: "#EAF6EE",
          100: "#CDEAD7",
          400: "#1E9A4C",
          500: "#0E7A35",
          600: "#0B5F2A",
          700: "#08471F",
          900: "#062F15",
        },
        charcoal: {
          DEFAULT: "#111827",
          800: "#1A2233",
          700: "#222B3D",
        },
        mist: "#E5E7EB",
        hazard: {
          DEFAULT: "#F2A900",
          600: "#D69200",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hazard-stripe":
          "repeating-linear-gradient(135deg, var(--tw-gradient-from) 0 14px, var(--tw-gradient-to) 14px 28px)",
        "forest-radial":
          "radial-gradient(circle at 50% 0%, rgba(14,122,53,0.18), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bg-drift": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 28s linear infinite",
        "bg-drift": "bg-drift 18s ease-in-out infinite",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};
export default config;
