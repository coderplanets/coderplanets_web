// see details:
// https://github.com/groupher/eslint-config-web/blob/master/index.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@groupher/eslint-config-web',
  ],
  // extends: ['@groupher/eslint-config-web'],
  settings: {
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
          '@/config': 'config',
          '@/stores': 'src/stores',
          '@/model': 'src/stores/SharedModel',
          '@/utils': 'utils',
          '@/schemas': 'src/schemas',
          '@/Img': 'src/components/Img',
          '@/SvgIcons': 'src/components/SvgIcons',
          '@/i18n': 'i18n',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
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
