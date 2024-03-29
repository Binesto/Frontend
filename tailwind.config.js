module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-100': '#111111',
        'dark-200': '#191919',
        'primary': '#B53BFE',
        'bn-pink': '#FE457E',
        'bn-red': '#FF5353',
        'bn-yellow': '#FFDB45',
        'bn-blue': '#4694FF',
        'bn-green': '#30E584',
        'bn-orange': '#FF8F4B',
        'bn-gray-100': '#E5E9EB',
        'bn-gray-200': '#CBD2D6',
        'bn-gray-300': '#B2B7BA',
        'bn-gray-400': '#B2B7BA',
        'bn-gray-500': '#97979B',
        'bn-gray-600': '#747576',
        'bn-gray-700': '#535355',
        'bn-gray-800': '#2F2F30',
        'bn-gray-900': '#191919',
      },
      fontSize: {
        'heading': '64px',
        'h3': '24px',
        'h4': '16px',
        'p16': '16px',
        'p14': '14px',
        'p12': '12px',
        'l12': '12px',
      }
    },
  },
  plugins: [],
};
