// this is tmp, use react-intl .. later

const I18nDict = {
  posts: '帖子',
  map: '地图',
  news: '动态(wiki)',
  cheatsheet: 'cheatsheet',
  meetups: 'meetups',
  users: '用户',
  videos: '视频',
  repos: '开源项目',
  jobs: '招聘',
}

export const Trans = key => I18nDict[key] || key

export const holder = 1
