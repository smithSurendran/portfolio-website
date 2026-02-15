import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',  // 4.5:1 contrast on white
          600: '#2563eb',  // 5.5:1 contrast on white
          700: '#1d4ed8',  // 7:1 contrast on white
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        //display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        //'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // slideDown: {
        //   '0%': { transform: 'translateY(-10px)', opacity: '0' },
        //   '100%': { transform: 'translateY(0)', opacity: '1' },
        // },
      },
    },
  },
  plugins: [],
}
export default config
