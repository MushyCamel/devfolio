module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'palewhite': '#260716',
      'redish': '#E63946',
      'lightblue': '#26fee9',
      'midblue': '#26fee9',
      'darkblue': '#26fee9',
    },
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {},
  plugins: [],
};
