export default {
  content: ["./index.html", "./src/**/*.{html,css,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['Zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sanf-serif'],
        'robert-medium': ['robert-medium', 'sanf-serif'],
        'robert-reguler': ['robert-regular', 'sanf-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#dfdff2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD'
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66'
        }
      }
    },
  },
  plugins: [],
};
