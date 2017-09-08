module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react'],
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
  },
  rules: {
    'arrow-body-style': 0,
    'no-param-reassign': 0, // heavilly used in store.actions
    'no-use-before-define': 0, // heavilly used in store.views
    'no-nested-ternary': 0, // TODO
    'no-shadow': 0, //TODO: currently just for entry
    'no-return-assign': 0, //TODO currently only for BookStore
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'jsx-a11y/href-no-hash': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,

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
