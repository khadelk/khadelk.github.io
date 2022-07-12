const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      serif: ['"DM Serif Display"', 'serif'],
      sans: ['"DM Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        'milk':'#FFFCF5',
        'denim-blue':'#2743B5',
        'denim-blue-hover':'#5C74D5',
        'mdgray':'#47535F'
      }
    },
  },

  plugins: [],
};

module.exports = config;
