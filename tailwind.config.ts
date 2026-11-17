import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070614",
        surface: {
          50: "rgba(255, 255, 255, 0.03)",
          100: "rgba(255, 255, 255, 0.06)",
          200: "rgba(255, 255, 255, 0.09)",
          300: "rgba(255, 255, 255, 0.15)",
        },
        navy: {
          950: "#070614",
          900: "#0B0A21",
          850: "#100E2E",
          800: "#16133C",
          700: "#221E54",
        },
        brand: {
          purple: "#9333EA",
          electric: "#A855F7",
          pink: "#EC4899",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          gold: "#F59E0B",
          goldLight: "#FDE68A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(147, 51, 234, 0.18), rgba(59, 130, 246, 0.12) 40%, transparent 70%)",
        "gold-glow": "radial-gradient(circle at center, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "neon-purple": "0 0 25px -5px rgba(168, 85, 247, 0.4)",
        "neon-blue": "0 0 25px -5px rgba(59, 130, 246, 0.4)",
        "neon-pink": "0 0 25px -5px rgba(236, 72, 153, 0.4)",
        "neon-gold": "0 0 30px -5px rgba(245, 158, 11, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
