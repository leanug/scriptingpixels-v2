import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', // Scan these files for Tailwind classes
  ],
  safelist: [
    'w-full',
  ],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [typography],
}
