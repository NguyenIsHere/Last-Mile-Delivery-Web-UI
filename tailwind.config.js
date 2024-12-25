/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}' // Quét tất cả file trong thư mục src
  ],
  theme: {
    extend: {
      // colors: {
      //   main: {
      //     100: 'var(--main-color-100)',
      //     80: 'var(--main-color-80)',
      //     50: 'var(--main-color-50)',
      //     30: 'var(--main-color-30)'
      //   },
      //   secondary: {
      //     100: 'var(--secondary-color-100)'
      //   },
      //   font: {
      //     100: 'var(--font-color-100)',
      //     60: 'var(--font-color-60)'
      //   },
      //   orange: {
      //     100: 'var(--orange-color-100)'
      //   },
      //   blue: {
      //     100: 'var(--blue-color-100)',
      //     60: 'var(--blue-color-60)',
      //     30: 'var(--blue-color-30)'
      //   },
      //   white: {
      //     90: 'var(--white-color-90)',
      //     70: 'var(--white-color-70)',
      //     50: 'var(--white-color-50)',
      //     30: 'var(--white-color-30)'
      //   }
      // }
    }
  },
  plugins: []
}
