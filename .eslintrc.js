// see details:
// https://github.com/groupher/eslint-config-web/blob/master/index.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@groupher/eslint-config-web',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // extends: ['@groupher/eslint-config-web'],
  settings: {
    // see if the import lib exsit or not
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {},
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@/config': 'config',
          '@/containers': 'src/containers',
          '@/components': 'src/components',
          '@/services': 'src/services',
          '@/constant': 'utils/constant',
          '@/hooks': 'src/hooks',
          '@/hoc': 'src/hoc',
          '@/stores': 'src/stores',
          '@/model': 'src/stores/SharedModel',
          '@/utils': 'utils',
          '@/schemas': 'src/schemas',
          '@/Img': 'src/components/Img',
          '@/SvgIcons': 'src/components/SvgIcons',
          '@/icons': 'src/components/Icons',
          '@/i18n': 'i18n',
          '@/spec': 'src/spec',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-setter-return': 0,
    'no-dupe-else-if': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-named-as-default': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
