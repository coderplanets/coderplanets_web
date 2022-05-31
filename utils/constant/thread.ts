import type { TArticleThread, TThread } from '@/spec'

export const CARD_THREAD = {
  JOB: 'job',
  RADAR: 'radar',
  MEETUP: 'meetup',
}

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
  MAP: 'map',
  INTERVIEW: 'interview',
  TEAM: 'team',
  PRODUCT: 'product',
  GUIDE: 'guide',
  ACCOUNT: 'account',
  // for groupher
  KANBAN: 'kanban',
  CHANGELOG: 'changelog',
  HELP: 'help',
  ABOUT: 'about',
  DASHBOARD: 'dashboard',
} as Record<Uppercase<TThread>, TThread>
