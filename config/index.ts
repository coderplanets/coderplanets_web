import type { TThemeName } from '@/spec'

import CONFIG from './config.json'

export { default as LABEL_POOL } from './label_pool'
export { default as SEO } from './next_seo'

export const DEFAULT_THEME = CONFIG.DEFAULT_THEME as TThemeName

export const SITE_LOGO =
  'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/static/new-logo.jpg'

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
  GITHUB,
  GITHUB_WEB_ADDR,
  GITHUB_SERVER_ADDR,
  API_SERVER_ADDR,
  GITHUB_ME,
  GITHUB_CPS_TEAM,
  ISSUE_ADDR,
  MENTION_USER_ADDR,
  EMAIL_CLUB,
  EMAIL_SUPPORT,
  EMAIL_HELLO,
  EMAIL_BUSINESS,
  BUILD_VERSION,
} = CONFIG
