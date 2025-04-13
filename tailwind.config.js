// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom animation and keyframes for the arrow slide
      animation: {
        slideArrow: 'slideArrow 6s ease-in-out infinite', // Adjust duration (6s) as needed
      },
      keyframes: {
        slideArrow: {
          // Adjust percentages to align start/end with the line visually
          '0%':   { left: '10%', opacity: '0' },  // Start hidden near the first step
          '10%':  { left: '15%', opacity: '1' },  // Fade in
          '90%':  { left: '85%', opacity: '1' },  // Move across to near the last step
          '100%': { left: '90%', opacity: '0' },  // Fade out
        }
      },
    },
  },
  plugins: [],
}