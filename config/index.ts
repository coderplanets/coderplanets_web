import type { TThemeName } from '@/spec'

import CONFIG from './config.json'

export { default as LABEL_POOL } from './label_pool'
export { default as SEO } from './next_seo'

export const DEFAULT_THEME = CONFIG.DEFAULT_THEME as TThemeName

export { APP_VERSION } from './version'

export const SITE_LOGO = 'https://assets.groupher.com/icons/static/new-logo.jpg'

export const {
  GRAPHQL_ENDPOINT,
  SENIOR_AMOUNT_THRESHOLD,
  SPONSOR_AMOUNT_THRESHOLD,
  PAGE_SIZE,
  WORD_LIMIT,
  AVATARS_LIST_LENGTH,
  TAG_COLORS,
  TAG_COLOR_ORDER,
  ASSETS_ENDPOINT,
  ICON,
  ICON_BASE,
  ICON_CMD,
  DEFAULT_ICON,
  DEFAULT_USER_AVATAR,
  SITE_URL,
  SITE_URL_SHORT,
  GITHUB,
  GITHUB_WEB_ADDR,
  ABOUT_LINK,
  ISSUE_ADDR,
  MENTION_USER_ADDR,
  EMAIL_SUPPORT,
} = CONFIG
