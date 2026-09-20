/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      // Pełna skala krycia co 5% — używana przez modyfikatory typu text-espresso/85
      opacity: Object.fromEntries(
        Array.from({ length: 21 }, (_, i) => [`${i * 5}`, `${(i * 5) / 100}`])
      ),
      colors: {
        // Paleta zaczerpnięta z kolorystyki znaczenia.com
        cream: "#FFF2EB",
        peach: "#FFEAE0",
        espresso: {
          DEFAULT: "#372824",
          soft: "#483834",
          deep: "#1C1716",
        },
        coral: {
          // Jasny koral — tylko na ciemnym tle lub jako wypełnienie (nie jako tekst na jasnym)
          DEFAULT: "#FF6556",
          deep: "#EB6459",
          // Przyciemniony wariant do tekstu i znaczników na kremie/brzoskwini:
          // 5.12:1 na #FFF2EB i 4.83:1 na #FFEAE0 — spełnia WCAG AA
          ink: "#BD372A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
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
        "rise-in": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "grow-x": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-18px,0) scale(1.03)" },
        },
        "cue-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.55" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rise-in": "rise-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease both",
        "grow-x": "grow-x 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "drift-slow": "drift-slow 14s ease-in-out infinite",
        "cue-bounce": "cue-bounce 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
