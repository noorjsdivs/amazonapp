/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: '#131921',
        amazon_light: '#232F3E',
        amazon_yellow: '#f3a847',
        whiteText: '#ffffff',
        lightText: '#ccc',
        quantity_box: '#F0F2F2',
        footerBottom: '#131A22',
      },
    },
  },
  plugins: [],
};
