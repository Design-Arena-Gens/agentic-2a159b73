import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: {
          900: '#050608',
          800: '#090b0f',
          700: '#0e121a',
          600: '#151b25',
        },
      },
      fontFamily: {
        spectral: ['var(--font-spectral)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        veil: '0 0 80px 30px rgba(5, 10, 20, 0.85)',
      },
      backgroundImage: {
        noise: 'radial-gradient(circle at 10% 20%, rgba(80,80,100,0.1) 0, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        shiver: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(3px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        crawl: {
          '0%': { transform: 'translate3d(-5%, 5%, 0) scale(1)' },
          '50%': { transform: 'translate3d(5%, -5%, 0) scale(1.05)' },
          '100%': { transform: 'translate3d(-5%, 5%, 0) scale(1)' },
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.2' },
          '21%, 23%, 52%, 56%': { opacity: '0.8' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        shiver: 'shiver 8s ease-in-out infinite',
        crawl: 'crawl 16s ease-in-out infinite',
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
