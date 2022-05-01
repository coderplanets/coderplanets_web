import type { TUpvoteLayout, SnakeUpperCase } from '@/spec'

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
  STICKER: 'sticker',
} as Record<SnakeUpperCase<TUpvoteLayout>, TUpvoteLayout>

export const holder = 1
