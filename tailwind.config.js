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
      'palewhite': '#F1FAEE',
      'redish': '#E63946',
      'lightblue': '#A8DADC',
      'midblue': '#457B9D',
      'darkblue': '#1D3557',
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
