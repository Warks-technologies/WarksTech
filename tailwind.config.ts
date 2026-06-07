import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef4ff',
          100: '#d9e5ff',
          200: '#b6cbff',
          300: '#84a9ff',
          400: '#4f7eff',
          500: '#2f5df4',
          600: '#2448d0',
          700: '#203aa8',
          800: '#1e357f',
          900: '#10214d',
          950: '#07101f'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(16, 33, 77, 0.12)'
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(47,93,244,0.16) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
