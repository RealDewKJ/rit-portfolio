/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        video: {
          bg: '#0a0a0a',
          surface: '#111111',
          border: '#222222',
          accent: '#00d4ff',
          accent2: '#ff4d4d',
          muted: '#666666',
        },
      },
    },
  },
  plugins: [],
};
