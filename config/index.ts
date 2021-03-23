// export * from './config.json'
// import * as CONFIG from './config.json'

import type { TThemeName } from '@/spec'
import { DEFAULT_THEME as DEFAULT_THEME_CONFIG } from './config.json'

export { default as LABEL_POOL } from './label_pool'
export { default as SEO } from './next_seo'

export const DEFAULT_THEME = DEFAULT_THEME_CONFIG as TThemeName

// explicit export to avoid eslint warning
export {
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
  COMMUNITY_WIKI,
  COMMUNITY_CHEATSHEET,
  EMAIL_CLUB,
  EMAIL_SUPPORT,
  EMAIL_HELLO,
  EMAIL_BUSINESS,
  BUILD_VERSION,
} from './config.json'
