import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'on-surface': '#e3e2e7',
        'outline-variant': '#44474a',
        'tertiary': '#ffffff',
        'surface-container-highest': '#343439',
        'surface-container-low': '#14151a',
        'on-background': '#e3e2e7',
        'primary-fixed': '#e1e2e5',
        'outline': '#8f9194',
        'surface-variant': '#23252d',
        'primary': '#ffffff',
        'surface-container-lowest': '#08090c',
        'surface': '#090a0e',
        'surface-container': '#191a20',
        'secondary-container': '#202a42',
        'primary-container': '#e1e2e5',
        'surface-container-high': '#23242c',
        'on-surface-variant': '#c5c6ca',
        'secondary': '#c0c6d7',
        'background': '#090a0e',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.5rem',
        'DEFAULT': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
      },
    },
  },
  plugins: [],
}
export default config
