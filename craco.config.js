const path = require(`path`);
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@context': path.resolve(__dirname, 'src/_context'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@UI': path.resolve(__dirname, 'src/UI'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'font-size-base': '18px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
