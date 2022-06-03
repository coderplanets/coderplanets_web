import type {
  TUpvoteLayout,
  TDashboardLayout,
  TPostLayout,
  SnakeUpperCase,
} from '@/spec'

export const UPVOTE_LAYOUT = {
  DEFAULT: 'default',
  COMMENT: 'comment',
  ARTICLE: 'article',
  POST_LIST: 'post-list',
  BLOG_LIST: 'blog-list',
  WORKS_ARTICLE: 'works-article',
  WORKS_CARD: 'works-card',
  GUIDE_LIST: 'guide-list',
  KANBAN: 'kanban',
  FIXED_HEADER: 'fixed-header',
  STICKER: 'sticker',
} as Record<SnakeUpperCase<TUpvoteLayout>, TUpvoteLayout>

export const POST_LAYOUT = {
  UPVOTE_FIRST: 'upvote_first',
  COMMENT_FIRST: 'comment_first',
} as Record<SnakeUpperCase<TPostLayout>, TPostLayout>

export const DASHBOARD_DESC_LAYOUT = {
  POST_LIST: 'post_list',
  BANNER: 'banner',
  CHANGELOG_LIST: 'changelog_list',
} as Record<SnakeUpperCase<TDashboardLayout>, TDashboardLayout>
