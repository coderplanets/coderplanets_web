/*
 * utils functiosn
 */

export { default as asyncSuit } from './async'

export { buildLog } from './logger'

export { default as uid } from './uid'

export {
  Global,
  o2s,
  s2o,
  send,
  mapKeys,
  getRandomInt,
  cutFrom,
  prettyNum,
  numberWithCommas,
  sortByColor,
  sortByIndex,
  Rlog,
  countWords,
  joinUS,
  closeDrawer,
  errRescue,
  debounce,
  extractMentions,
  extractAttachments,
  isCypressRunning,
  multiClick,
} from './helper'

export { errorForHuman, ssrAmbulance } from './errors'

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
  asyncErr,
  asyncRes,
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
  mergeRouteQuery,
  serializeQuery,
  parseDomain,
  extractThreadFromPath,
  subPath2Thread,
  thread2Subpath,
  getRoutePathList,
  getRouteMainPath,
} from './route'

export {
  connectStore,
  storePlug,
  markStates,
  flashState,
  meteorState,
  stripMobx,
  $solver,
  observerHoc,
  updateEditing,
} from './mobx'

export {
  isServerSide,
  isClientSide,
  getJwtToken,
  ssrPagedSchema,
  ssrPagedFilter,
  ssrContentsThread,
  addTopicIfNeed,
  validCommunityFilters,
  parseTheme,
} from './ssr'

export {
  scrollIntoEle,
  scrollToHeader,
  scrollToTabber,
  scrollToTop,
  lockPage,
  unlockPage,
  focusDoraemonBar,
  blurDoraemonBar,
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
export { default as WIDTH } from './width'
export { default as BStore } from './bstore'
export { Trans } from './i18n'
export { default as GA } from './analytics'

export { isMobile } from './device'
