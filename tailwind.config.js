/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: '"Krona One", sans-serif',
        base: "Poppins, sans-serif",
      },
      colors: {
        dark: "#0c080b",
        green: "#1e3329",
        yellow: "#ffd470",
        "dark-grey": "#b8b8b8",
        "light-grey": "#ececec",
        light: "#fafafa",
      },
    },
  },
  plugins: [],
};
