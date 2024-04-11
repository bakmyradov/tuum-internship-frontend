/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      colors: {
        primary: "#a7d0d8",
      },
      fontFamily: {
        reckless: ["var(--reckless-neue)"],
        denim: ["var(--denim-font)"],
      },
    },
  },
  plugins: [],
};
