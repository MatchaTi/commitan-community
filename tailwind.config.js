/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'speed-dial': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'speed-dial': 'speed-dial .3s ease-in-out alternate',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'commitan-main': '#0ea5e9',
        'commitan-secondary': '#0369a1',
        'light-base': '#f1f5f9',
        'light-main': '#ffffff',
        'light-secondary': '#f8fafc',
        'light-accent': '#e2e8f0',
        'light-text': '#94a3b8',
        'light-code-editor': '#FBFCFD',
        'dark-base': '#0f172a',
        'dark-main': '#152239',
        'dark-secondary': '#18273F',
        'dark-accent': '#1b3152',
        'dark-text': '#f1f5f9',
        'dark-code-editor': '#121d2f',
      },
    },
  },
  plugins: [],
};
