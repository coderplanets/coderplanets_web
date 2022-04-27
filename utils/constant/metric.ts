import type { TMetric } from '@/spec'
// NOTE:  the value is mapping to @/utils/media's key
// so do not change to lowercase etc...
const METRIC = {
  COMMUNITY: 'COMMUNITY',
  USER: 'USER',
  // article
  ARTICLE: 'ARTICLE',
  BLOG_ARTICLE: 'BLOG_ARTICLE',
  WORKS_ARTICLE: 'WORKS_ARTICLE',

  // 版块
  WORKS: 'WORKS',
  TRENDING: 'TRENDING',
  COOL_GUIDE: 'COOL_GUIDE',
  HAVE_A_DRINK: 'HAVE_A_DRINK',
  RECIPES: 'RECIPES',
  EXPLORE: 'EXPLORE',
  SPONSOR: 'SPONSOR',
  FRIENDS: 'FRIENDS',
  SUPPORT_US: 'SUPPORT_US',
  SUBSCRIBE: 'SUBSCRIBE',
  MEETUPS: 'MEETUPS',
  MEMBERSHIP: 'MEMBERSHIP',
  HELP_CENTER: 'HELP_CENTER',

  // eidtors
  WORKS_EDITOR: 'WORKS_EDITOR',
  COMMUNITY_EDITOR: 'COMMUNITY_EDITOR',
  ARTICLE_EDITOR: 'ARTICLE_EDITOR',
} as Record<Uppercase<TMetric>, Uppercase<TMetric>>

export default METRIC
