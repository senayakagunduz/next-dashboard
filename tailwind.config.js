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
        'purpleLight': '#EDE7F6',
        'purpleDark': '#5E35B1',
        'lightBlue': '#E3F2FD',
        'darkBlue': '#1E88E5',
        'textGrey':'rgb(75 85 99 / var(--tw-text-opacity))'
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
