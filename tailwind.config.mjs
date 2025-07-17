import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', // Scan these files for Tailwind classes
  ],
  theme: {
    extend: {
      lineHeight: {
        'tight-plus': '1.05', // You can call it whatever you want
      },
      colors: {
        accent: '#1757FF',
        content: '#181D27',
        background: '#F2F2F2',
        borderColor: '#E4E4E4',
        lightBg: '#F5F5F5',
        lightText: '#1757FF'
      },
    },
  },
  plugins: [],
}
