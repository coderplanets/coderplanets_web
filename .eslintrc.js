// see details:
// https://github.com/groupher/eslint-config-web/blob/master/index.js
module.exports = {
  extends: ['@groupher/eslint-config-web'],
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
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/no-named-as-default': 0,
  },
}
