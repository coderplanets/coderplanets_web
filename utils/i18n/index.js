// this is tmp, use react-intl .. later

const I18nDict = {
  posts: '帖子',
  map: '地图',
  news: '动态',
  cheatsheet: 'cheatsheet',
  meetups: 'meetups',
  users: '用户',
  videos: '视频',
  tuts: '教程',
  jobs: '招聘',
}

export const Trans = key => I18nDict[key] || key

export const holder = 1
