// this is tmp, use react-i18n .. later

const I18nDict = {
  community: '社区',
  posts: '帖子',
  post: '帖子',
  map: '地图',
  radar: '雷达',
  city: '同城',
  share: '分享',
  users: '用户',
  repos: '开源项目',
  repo: '开源项目',
  jobs: '招聘',
  job: '招聘',
  group: '组织',
  company: '公司',
  user: '用户',
  profile: '主页',
}

export const Trans = (key) => I18nDict[key] || key

export const holder = 1
