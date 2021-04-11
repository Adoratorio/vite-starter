const path = require('path');
const vuePlugin = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [
    vuePlugin(),
  ],
  clearScreen: false,
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '~', replacement: '/src' },
    ],
  },
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'src/scss/global.scss')}";`,
      },
    },
  },
  build: {
    minify: false,
  },
};
