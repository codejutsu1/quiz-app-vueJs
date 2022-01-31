module.exports = {
  content: [
    './public/index.html',
    './src/views/*.vue',
    './src/components/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        main: '#141933',
        subMain: '#EDF4F6',
        white: '#FFFFFF',
        green: '#10C69B',
        red: '#8B1D49',
        blue: '#05D3F6'
      }
    },
  },
  plugins: [],
}
