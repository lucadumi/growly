import { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
        },
        coral: {
          DEFAULT: "hsl(var(--coral))",
        },
        "yellow-soft": {
          DEFAULT: "hsl(var(--yellow-soft))",
        },
        "green-soft": {
          DEFAULT: "hsl(var(--green-soft))",
        },

        "light-yellow": {
          DEFAULT: "#fefbee",
        },
        "blue-400": {
          DEFAULT: "#60a5fa",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(20deg)" },
          "30%": { transform: "rotate(-18deg)" },
          "45%": { transform: "rotate(14deg)" },
          "60%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(6deg)" },
          "90%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        fadeInOut: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "10%": { opacity: "1", transform: "scale(1)" },
          "75%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
