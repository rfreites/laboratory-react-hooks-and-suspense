module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'airbnb'],
  env: {
    jest: true,
  },
  globals: {
    __DEV__: true,
    window: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.web.js', '.native.js', '.ios.js', '.android.js'],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    'no-alert': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'class-methods-use-this': 0,
    'global-require': 0,
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
  },
}
