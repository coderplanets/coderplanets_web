export type TFooterView =
  | 'home_view'
  | 'community'
  | 'hosting_community'
  | 'article'

export const VIEW = {
  HOME: 'home_view' as TFooterView, // 只有在 home community 的
  // 常规社区, 类似 CP / javascript (+ 反馈与建议)
  COMMUNITY: 'community' as TFooterView,
  HOSTING_COMMUNITY: 'hosting_community' as TFooterView,
  ARTICLE: 'article' as TFooterView,
}
