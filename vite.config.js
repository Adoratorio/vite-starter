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
  build: {
    minify: false,
  },
};
