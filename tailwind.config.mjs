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
  plugins: [],
}
