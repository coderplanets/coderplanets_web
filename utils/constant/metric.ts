import type { TMetric } from '@/spec'
// NOTE:  the value is mapping to @/utils/media's key
// so do not change to lowercase etc...
const METRIC = {
  COMMUNITY: 'COMMUNITY' as TMetric,
  USER: 'USER' as TMetric,
  // article
  ARTICLE: 'ARTICLE' as TMetric,
  WORKS_ARTICLE: 'WORKS_ARTICLE' as TMetric,

  // 版块
  WORKS: 'WORKS' as TMetric,
  TRENDING: 'TRENDING' as TMetric,
  COOL_GUIDE: 'COOL_GUIDE' as TMetric,
  HAVE_A_DRINK: 'HAVE_A_DRINK' as TMetric,
  RECIPES: 'RECIPES' as TMetric,
  DISCOVERY: 'DISCOVERY' as TMetric,
  SPONSOR: 'SPONSOR' as TMetric,
  SUPPORT_US: 'SUPPORT_US' as TMetric,
  SUBSCRIBE: 'SUBSCRIBE' as TMetric,
  MEETUPS: 'MEETUPS' as TMetric,
  MEMBERSHIP: 'MEMBERSHIP' as TMetric,
  HELP_CENTER: 'HELP_CENTER' as TMetric,

  // eidtors
  WORKS_EDITOR: 'WORKS_EDITOR' as TMetric,
  COMMUNITY_EDITOR: 'COMMUNITY_EDITOR' as TMetric,
  ARTICLE_EDITOR: 'ARTICLE_EDITOR' as TMetric,
}

export default METRIC
