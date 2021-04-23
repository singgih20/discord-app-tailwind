module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-750": "#3f495a",
        "gray-850": "#222733",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
