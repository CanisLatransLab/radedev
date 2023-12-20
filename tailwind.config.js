/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB4B4B',
        secondary: '#DDDCD4',
        clWhite: '#EFEFEF',
        clGrey: '#A4A49E',
        clBlack: '#222222',
      },
      backgroundImage: {
        // 'gradient-to-br': 'linear-gradient(to bottom right, #EFEFEF, transparent)',
      },

      screens: {
        mobile: { raw: '(max-width: 640px)' },
        // ipadPro: { raw: '(width: 1024px) and (height: 1366px)' },
        // iphoneProMax: { raw: '(max-width: 428px) and (max-height: 926px)' },
        // iphonePro: { raw: '(max-width: 414px) and (max-height: 736px)' },
        // iphone: { raw: '(max-width: 375px) and (max-height: 667px)' },
        fullHd: { raw: '(min-width: 1920px)' },
        // retina: { raw: '(min-width: 1728px) and (max-height: 1117px)' },
      },
    },
  },
  plugins: [],
};
