module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#3F51B5',
          200: '#757de8',
          300: '#dedeff',
        },
        accent: {
          100: '#FFC107',
          200: '#916400',
        },
        text: {
          100: '#333333',
          200: '#5c5c5c',
        },
        bg: {
          100: '#F5F5F5',
          200: '#ebebeb',
          300: '#c2c2c2',
        },
      },
    },
  },
  plugins: [],
};