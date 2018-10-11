// this is tmp, use react-intl .. later

const I18nDict = {
  posts: '帖子',
  post: '帖子',
  map: '地图',
  cheatsheet: 'cheatsheet',
  users: '社友',
  videos: '视频',
  video: '视频',
  repos: '开源项目',
  repo: '开源项目',
  jobs: '招聘',
  job: '招聘',
}

export const Trans = key => I18nDict[key] || key

export const holder = 1
