import { SVG, PUBLISH_MODE } from '@/constant'

export const MORE_MENU = {
  [PUBLISH_MODE.DEFAULT]: [
    {
      key: 'feedback',
      icon: SVG.FEATURE,
      title: '功能建议',
    },
    {
      key: 'question',
      icon: SVG.QUESTION,
      title: '问题 / 求助',
    },
    {
      key: 'bug',
      icon: SVG.BUG,
      title: 'Bug / 吐槽',
    },
    {
      key: 'other',
      icon: SVG.MORE,
      title: '其它话题',
    },
  ],
  [PUBLISH_MODE.CHANGELOG]: [],
}

export const holder = 1
