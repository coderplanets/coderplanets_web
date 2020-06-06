// export * from './config.json'
// import * as CONFIG from './config.json'

export { default as LABEL_POOL } from './label_pool'
export { default as SEO } from './next_seo'

// explicit export to avoid eslint warning
export {
  GRAPHQL_ENDPOINT,
  DEFAULT_THEME,
  SENIOR_AMOUNT_THRESHOLD,
  SPONSOR_AMOUNT_THRESHOLD,
  PAGE_SIZE,
  WORD_LIMIT,
  ATATARS_LIST_LENGTH,
  TAG_COLORS,
  TAG_COLOR_ORDER,
  ASSETS_ENDPOINT,
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
