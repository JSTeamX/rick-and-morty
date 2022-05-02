module.exports = {
  content: [
    "apps/**/pages/**/*.{js,ts,jsx,tsx}",
    "apps/**/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'portal': '#38d247',
      'white': '#fff',
    },
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
    extend: {
      fontFamily: {
        'schoolbell': [ 'Schoolbell', 'cursive'],
        'ocr': ['ocr-a-std', 'sans-serif']
      },
    },
  },
  plugins: [],
}
