import type { TArticleThread, TThread } from '@/spec'

export const ARTICLE_THREAD = {
  REPO: 'repo',
  POST: 'post',
  BLOG: 'blog',
  JOB: 'job',
  RADAR: 'radar',
  WORKS: 'works',
  MEETUP: 'meetup',
} as Record<Uppercase<TArticleThread>, TArticleThread>

export const THREAD = {
  ...ARTICLE_THREAD,
  CPER: 'cper',
  SETTING: 'setting',
} as Record<Uppercase<TThread>, TThread>
