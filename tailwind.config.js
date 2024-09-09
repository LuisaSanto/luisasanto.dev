module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",    // Dark blue-cyan tone
        secondary: "#7fb8da",  // Softer cyan tone
        tertiary: "#151030",   // Deep blue
        "black-100": "#100d25",  // Dark cyan-blue
        "black-200": "#090325",  // Even darker cyan-blue
        "white-100": "#f3f3f3",  // Keeping white as it is        
        red: {
          500: "#f56565",
        },
        orange: {
          500: "#ed8936", 
        },
        green: {
          500: "#48bb78",
        },
        purple: {
          500: "#9f7aea",
        },
        blue: {
          500: "#4299e1",
        },
        yellow: {
          500: "#ecc94b",
        },
        pink: {
          500: "#ed64a6",
        },
        teal: {
          500: "#38b2ac",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/banner-bg.png')",
      },
    },
  },
  safelist: [
    'text-red-500',
    'text-orange-500',
    'text-green-500',
    'text-purple-500',
    'text-blue-500',
    'text-yellow-500',
    'text-pink-500',
    'text-teal-500',
  ],
  plugins: [],
}