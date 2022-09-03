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
    // see: https://stackoverflow.com/a/56696478/4050784
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
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
          '@/widgets': 'src/widgets',
          '@/services': 'src/services',
          '@/constant': 'utils/constant',
          '@/hooks': 'src/hooks',
          '@/hoc': 'src/hoc',
          '@/stores': 'src/stores',
          '@/model': 'src/stores/Model',
          '@/utils': 'utils',
          '@/schemas': 'src/schemas',
          '@/Img': 'src/widgets/Img',
          '@/SvgIcons': 'src/widgets/SvgIcons',
          '@/icons': 'src/widgets/Icons',
          '@/i18n': 'i18n',
          '@/spec': 'src/spec',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/no-unknown-property': 0,
    'no-extra-boolean-cast': 0,
    'react/require-default-props': 0,
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
