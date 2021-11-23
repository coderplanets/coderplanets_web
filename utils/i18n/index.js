// this is tmp, use react-i18n .. later

const I18nDict = {
  community: '社区',
  posts: '帖子',
  post: '帖子',
  radar: '雷达',
  city: '同城',
  share: '分享',
  users: '用户',
  jobs: '工作',
  job: '工作',
  blog: '博客',
  works: '作品',
  user: '用户',
  profile: '主页',

  AD: '广告',
  FREEMIUM: '会员增值 / 订阅',
  FULLTIME: '全职项目',
  SIDE_PROJECT: '副业项目',
  PRODUCT: '物品交易',
  FREE: '用爱发电',
  OTHRES: '其他',
}

export const Trans = (key) => I18nDict[key] || key

export const holder = 1
