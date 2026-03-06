import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        atl: {
          espresso: '#1A0E08',
          dark:     '#2B1A11',
          brown:    '#6B3A2A',
          copper:   '#B5622A',
          amber:    '#D4874A',
          cream:    '#F2EBE0',
          milk:     '#FAF6F0',
          muted:    '#7A6558',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        wide:    ['var(--font-bebas)', 'sans-serif'],
      },
      animation: {
        'fade-up':     'fadeUp 0.8s ease forwards',
        'fade-in':     'fadeIn 0.8s ease forwards',
        'scroll-pulse':'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scrollPulse: {
          '0%, 100%': { transform: 'scaleX(1)', opacity: '1' },
          '50%':       { transform: 'scaleX(0.5)', opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}

export default config
