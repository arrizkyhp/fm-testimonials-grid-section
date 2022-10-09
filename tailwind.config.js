/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        primary: {
          moderateViolet: '#7541c8',
          veryDarkGrayBlue: '#48556a',
          verDarkBlackBlue: '#19212e',
        },
        neutral: {
          lightGray: '#cfcfcf',
          lightGrayBlue: '#ecf2f8',
        },
      },
    },
  },
  plugins: [],
};
