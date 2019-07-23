module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  rules: {
    // ESLint
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    camelcase: 'error',
  },
  settings: {},
};
