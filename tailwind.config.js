/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: "#FF3600",
          foreground: "#F5EDED",
          icon: "#FFEAE5",
        },
        secondary: {
          DEFAULT: "#3E3636",
          foreground: "#F5EDED",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F5EDED",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#3E3636",
          foreground: "#F5EDED",
        },
        popover: {
          DEFAULT: "#F5EDED",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#F5EDED",
          foreground: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

