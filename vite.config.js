const vuePlugin = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [
    vuePlugin(),
  ],
  clearScreen: false,
  build: {
    minify: false
  },
};
