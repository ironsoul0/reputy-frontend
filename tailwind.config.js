/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "*",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: {
          650: "#202A38",
          750: "#192331",
          850: "#121D2A",
        },
        green: {
          550: "#94DD3C",
        },
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "none" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "pulse-fast": "pulse 6.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "smooth-appear": "appear 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
