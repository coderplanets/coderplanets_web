// most of the cycle import error is caused by @/types, which is fine
// since @/types is used only when TS compiler, will not effect production code
/* eslint-disable import/no-cycle */

/*
 * utils functiosn
 */

export { default as asyncSuit } from './async/index'

export { buildLog } from './logger'

export { default as uid } from './uid'

export {
  Global,
  o2s,
  s2o,
  send,
  mapKeys,
  getRandomInt,
  cutRest,
  prettyNum,
  numberWithCommas,
  sortByColor,
  sortByIndex,
  Rlog,
  countWords,
  joinUS,
  closeDrawer,
  shareTo,
  report,
  errRescue,
  debounce,
  extractMentions,
  extractAttachments,
  isCypressRunning,
  multiClick,
  findDeepMatch,
  groupByKey,
  titleCase,
} from './helper'

export { errorForHuman, ssrRescue } from './errors'

export {
  cast,
  changeset,
  notEmpty,
  hasValue,
  isEmptyValue,
  nilOrEmpty,
  isObject,
  isString,
} from './validator'

export {
  makeGQClient,
  makeGithubExplore,
  later,
  pagedFilter,
  atomizeValues,
} from './graphql'

// export { default as githubAPI } from './github_api'

export {
  parseURL,
  ssrParseURL,
  akaTranslate,
  getParameterByName,
  getQueryFromUrl,
  queryStringToJSON,
  serializeQuery,
  parseDomain,
  extractThreadFromPath,
  getRoutePathList,
  getRouteMainPath,
  markRoute,
} from './route'

export {
  pluggedIn,
  storePlug,
  markStates,
  flashState,
  meteorState,
  toJS,
  updateEditing,
} from './mobx'

export {
  isServerSide,
  isClientSide,
  getJwtToken,
  ssrBaseStates,
  ssrFetchPrepare,
  ssrPagedArticleSchema,
  ssrPagedArticlesFilter,
  ssrHomePagedArticlesFilter,
  ssrError,
  ssrParseArticleThread,
  validCommunityFilters,
  parseTheme,
} from './ssr'

export {
  scrollIntoEle,
  scrollToHeader,
  scrollToTabber,
  scrollToTop,
  scrollDrawerToTop,
  scrollToComments,
  lockPage,
  unlockPage,
  focusDoraemonBar,
  hideDoraemonBarRecover,
  isBrowser,
  toggleGlobalBlur,
  clearGlobalBlur,
  isElementInViewport,
  pixelAdd,
  isDescendant,
} from './dom'
/*
 * theme related
 */
export {
  theme,
  themeMeta,
  themeSkins,
  themeCoverMap,
  themeCoverIndexMap,
} from './themes'

export { default as SOCIAL_LISTS } from './social'

// helpers
export { toast, toastBarColor } from './toast'
export { default as animate } from './animations'
export { default as css } from './css'
export { WIDTH } from './css/metric'
export { default as BStore } from './bstore'
export { Trans } from './i18n'
export { default as GA } from './analytics'

export { mockImage, mockImages, mockNaviCatalogMenu, mockWorks } from './mock'

export {
  communitySEO,
  exploreSEO,
  worksSEO,
  membershipSEO,
  meetupsSEO,
  sponsorSEO,
  trendingSEO,
  drinkSEO,
} from './seo'
