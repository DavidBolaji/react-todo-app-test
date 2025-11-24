import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {},
      spacing: {}
},
  },
  plugins: [],
}

export default config
