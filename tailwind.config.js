/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        ogg: ["Ogg", "sans"],
      },
      colors: {
        MenuC: "#BCBBB3",
        MenuC2: "#A4A297",
        BodyC: "#F4F2EE",
        TextN: "#1A1B1A",
        TextW: "#F4F2EE",
        Line: "#BCBBB3",
      },
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.10)",
        md: "0 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "0 10px 20px rgba(0, 0, 0, 0.25)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.30)",
        strong: "0 4px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(fill|stroke|border|bg|text)-(white|gray|blue|indigo|sky|teal|emerald|amber|orange|red|pink|purple|stone|black)(-(100|200|300|400|500|600|700|800|900))?$/,
    },
  ],
  plugins: [],
};
