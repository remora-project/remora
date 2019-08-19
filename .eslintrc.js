module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  plugins: [
    'vue',
    'prettier',
  ],
  rules: {
    'generator-start-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
  },
};
