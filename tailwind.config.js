/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-greyCustom': '#333333',
        'light-greyCustom': '#808080',
        'yellowCustom': '#FFB612',
        'redCustom': '#dc0a17',
        'greenCustom': '#2FC022',
      },
    },
  },
  plugins: [],
}