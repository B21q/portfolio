import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Ativar dark mode baseado em classes CSS

  theme: {    
    extend: {

      boxShadow: {
        '3xl': '0px 10px 20px -25px rgba(0, 0, 0, 1.0)',
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },

      colors: {
        'bg': '#121013',
        'bg-alt': '#171518',
        'iblue': '#9DB0C3',
        'icyan': '#9DC2C3',
        'iblue-10': '#6097F1',
        'iorange': '#C3A59D',
        'igreen': '#9DC39E',
        'ipurple': '#A39DC3',
        'ipink': '#BD9DC3',
        'ired': '#C39DAD',
        'iyellow': '#C2C39D',
        'iwhite': '#F7F7FA',
        'igray': '#161616',
        'igray-10': '#333333',
      },

      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
        'sora': ['Sora', 'sans-serif']
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
