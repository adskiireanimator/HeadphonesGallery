/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: "#1E1E1E",
        50: "rgba(0, 0, 0, 0.5)",
      },
      white: {
        DEFAULT: "#FFFFFF",
        20: "rgba(255, 255, 255, 0.2)",
      },
      sky: {
        DEFAULT: "#346DFF",
        70: "rgba(52,109,255,0.7)",
        85: "rgba(52,109,255,0.85)",
      },
      gray: {
        DEFAULT: "#ADADAD",
        light: "#777",
      },
      select: {
        DEFAULT: "#DDD",
        contain: "#F8F8F8",
      },
      danger: {
        DEFAULT: "#FF4A4A",
      },
      transparent: "transparent",
    },
    fontSize: {
      sm: ["14px", "1.4"],
      base: ["18px", "1.4"],
      lg: ["20px", "1.4"],
      xl: ["30px", "1.4"],
    },

    extend: {
      screens: {
        sm: "640px",
        md: "960px",
        lg: "1200px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
