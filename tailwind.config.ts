import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
          DEFAULT: "hsl(var(--primary))", // Deep Navy
          foreground: "hsl(var(--primary-foreground))", // Light Grey for text on primary
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Charcoal Grey
          foreground: "hsl(var(--secondary-foreground))", // Light Grey for text on secondary
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Electric Blue
          foreground: "hsl(var(--accent-foreground))", // White/Light Grey for text on accent
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Lighter Charcoal Grey
          foreground: "hsl(var(--muted-foreground))", // Charcoal Grey
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Light Grey
          foreground: "hsl(var(--popover-foreground))", // Deep Navy
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Light Grey
          foreground: "hsl(var(--card-foreground))", // Deep Navy
        },
        // Removed sidebar specific colors as they can be derived from the main palette
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Secondary Font (Body)
        heading: ["'Inter Tight'", "sans-serif"], // Primary Font (Headings) - using Inter Tight as Satoshi is not freely available
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;