// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5E4E', // Forest Green
        secondary: '#4F8A63', // Leaf Green
        accent: '#8B6A4E', // Earth Brown
        background: '#F7F6F2', // Off White
        text: '#2A2A2A', // Charcoal
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
