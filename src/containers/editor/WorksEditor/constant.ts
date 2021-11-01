import type { TStep } from './spec'

export const STEP = {
  ZERO: '0' as TStep,
  ONE: '1' as TStep,
  TWO: '2' as TStep,
  THREE: '3' as TStep,
  FOUR: '4' as TStep,
}

export const PROFIT_MODE = {
  AD: 'AD',
  FREEMIUM: 'FREEMIUM',
  PRODUCT: 'PRODUCT',
  FREE: 'FREE',
  OTHRES: 'OTHERS',
}

export const WORKING_MODE = {
  FULLTIME: 'FULLTIME',
  SIDE_PROJECT: 'SIDE_PROJECT',
}

export const DEFAULT_SOCIAL_INFO = [
  { platform: 'github', link: 'https://github.com/' },
]

export const SOCIAL_OPTIONS = [
  { value: 'github', label: 'Github' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'blog', label: 'Blog' },
  { value: 'wechat', label: '微信' },
  { value: 'weibo', label: '微博' },
  { value: '邮箱', label: 'E-mail' },
]
