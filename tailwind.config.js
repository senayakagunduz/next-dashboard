/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  theme: {
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purpleBackground': '#EDE7F6',
        'purpleHover': '#5E35B1',
        'lightBlue': '#E3F2FD',
        'darkBlue': '#1E88E5',
        'textGrey':'#text-gray-600'
      },
      spacing:{
        128 : '32rem'
      },
      text:{
        default:'text-current'
      }
    },
  },
  plugins: [],
}
