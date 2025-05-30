/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        'vs': '211px',
      },
    },
  },
  plugins: [
    function  ({addUtilities}) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar':{
          display: "none"
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          'scrollbar-width':'none',
        },
      }; 

      addUtilities(newUtilities)
    }
  ],
};
