import type { TUpvoteLayout } from '@/spec'
// eslint-disable-next-line import/no-unresolved
import type { ScreamingSnakeCase } from 'type-fest'

export const UPVOTE_LAYOUT = {
  DEFAULT: 'default',
  COMMENT: 'comment',
  ARTICLE: 'article',
  POST_LIST: 'post-list',
  BLOG_LIST: 'blog-list',
  WORKS_ARTICLE: 'works-article',
  WORKS_CARD: 'works-card',
  GUIDE_LIST: 'guide-list',
} as Record<ScreamingSnakeCase<TUpvoteLayout>, TUpvoteLayout>

export const holder = 1
