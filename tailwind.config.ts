import daisy from 'daisyui'
import typos from '@tailwindcss/typography'
import type {Config} from 'tailwindcss'

const themes = {
  light: {
    'base-100': '#FFF',
    'base-content': '#000',
    'neutral': '#CCC',
    'neutral-content': '#999'
  },
  dark: {
    'base-100': '#000',
    'base-content': '#FFF',
    'neutral': '#444',
    'neutral-content': '#999'
  }
}

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [typos, daisy],
  darkMode: ['selector', '[data-theme="dark"]'],
  daisyui: {
    logs: false,
    themes: [themes]
  }
}

export default config
