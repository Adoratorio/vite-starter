module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  ignorePatterns: ['dist/**/*', 'node_modules/**/*'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['~', './src'],
        ],
      },
    },
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
