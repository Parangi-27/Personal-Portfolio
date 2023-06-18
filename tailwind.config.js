module.exports = {
  content: ["./src/**/*.{html,js}",],
  purge: [],
  theme: {
    extend: {
      margin: {
        '2080px': '2080px',
      },
      height: {
        '128': '22rem',
      },
      colors:{
        'otherBlack': '#0b0c10', 
        'midnight': '#040622', 
      }
    }
  }
}
