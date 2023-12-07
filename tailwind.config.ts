import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration:{
        '400': '400ms',
        '600': '600ms'
      },
      height: {
        '120' : '480px',
        '185' : '740px',
        '225' : '900px'
      }
    },
    fontFamily: {
      handwrite: 'Satisfy',
      exo2: ['Exo 2', 'sans-serif'],
      Bebas: ['Bebas Neue', "cursive"],
      Shadows: ['Shadows Into Light', "cursive"],
      Fira: ['Fira Sans Condensed', "sans-serif"],
      Source: ['Source Code Pro', 'monospace'],
    }
  },
  plugins:[
    require('@tailwindcss/typography'),
  ]
}
export default config
