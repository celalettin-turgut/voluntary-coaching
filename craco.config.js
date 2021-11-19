const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@context': path.resolve(__dirname, 'src/_context'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@UI': path.resolve(__dirname, 'src/UI'),
    },
  },
};
