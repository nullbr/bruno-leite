const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#11bcc7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        "fade-up": "fade-up 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 1s ease-in-out forwards",
        "fade-right": "fade-right 1s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-up": {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
          },
          "80%": {
            transform: "translateX(-10%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "80%": {
            transform: "translateX(10%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
