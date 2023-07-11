/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      portfolioPrimary: "#3D3D3D",
      portfolioSecondary: "#777D92",
      portfolioHighlight: "#E36D6B",
      portfolioBackground: "#EFEFEF",
    },
  },
  plugins: [],
};
