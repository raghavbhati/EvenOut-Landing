/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tangerine: {
          DEFAULT: '#F26A2E',
          50: '#FFF7F3',
          100: '#FEEEE6',
          200: '#FDD6C3',
          300: '#FBAC86',
          400: '#F78149',
          500: '#F26A2E',
          600: '#D95217',
          700: '#B4410F',
          800: '#8F340E',
          900: '#6E290C',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#2D2D2D',
          muted: '#6B6864',
          subtle: '#9A9690',
        },
        canvas: '#FAF8F5',
        surface: '#FFFFFF',
        tinted: '#F4F3EF',
        peach: '#FDD6C3',
        semantic: {
          owed: '#1F7A50',
          owedLight: '#E8F5EE',
          owedBright: '#2E9E68',
          owe: '#B93A33',
          oweLight: '#FDECEC',
          oweBright: '#DC5A52',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        logo: ['"Sora"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(17, 17, 17, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(17, 17, 17, 0.07)',
        'soft-lg': '0 16px 36px -6px rgba(17, 17, 17, 0.09)',
        'soft-xl': '0 24px 48px -12px rgba(17, 17, 17, 0.12)',
        'tangerine-glow': '0 8px 24px -4px rgba(242, 106, 46, 0.25)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
