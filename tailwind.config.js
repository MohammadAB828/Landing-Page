/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        gery: '#e8f0f1'
      },
      backgroundImage: {
        services: 'url(../public/img/services/bg.svg)',
        news: 'url(../public/img/newsletter/bg.svg)',
        testimonials: 'url(../public/img/testimonials/bg.svg)',
        departments: 'url(../public/img/departments/bg.svg)',
        quoteLeft: 'url(../public/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../public/icons/testimonials/quote-right.svg)',

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
