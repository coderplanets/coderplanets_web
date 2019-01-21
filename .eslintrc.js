module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'cypress'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'arrow-body-style': 0,
    // need for _store init
    'no-underscore-dangle': 0,
    // heavilly used in store.actions
    'no-param-reassign': 0,
    // heavilly used in store.views
    'no-use-before-define': 0,
    // force-return is unneeded
    'consistent-return': 0,
    'no-shadow': 0,
    // error could be object for parse by upfloor
    'prefer-promise-reject-errors': 0,
    'react/jsx-no-bind': 0,
    // allow JSX in js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    // no need sort
    'react/sort-comp': 0,
    'react/prop-types': [1, { skipUndeclared: true }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    // for cypress test usage
    'no-unused-expressions': 0,

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
      },
    ],
  },
}
