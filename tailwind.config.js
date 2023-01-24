/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "blue": "#255187",
      "light-blue": "#cfd8e4",
      "lighter-blue": "#e7ecf2",
      "dark-blue": "#214878",
      "purple": "#7a58a3",
      "dark-purple": "#6c4e91",
      "cyan": "#578bc9",
      "light-cyan": "#ecf2f9",
      "dark-cyan": "#4d7cb3",
      "red": "#c53e3b",
      "dark-red": "#af3734",
      "green": "#a6c761",
      "orange": "#fa8c2b",
      "black": "#000000",
      "white": "#ffffff",
      "gray": "#808080",
    },
    extend: {
      screens: {
        "xxs": "400px",
        "xs": "480px",
        "sm": "670px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "xxl": "1400px"
      }
    },
  },
  plugins: [],
}
