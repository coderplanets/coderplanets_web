/*
 * utils functiosn
 */

export { default as asyncSuit } from './async_suit'

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
  closePreviewer,
  errRescue,
  debounce,
  extractMentions,
  extractAttachments,
} from './functions'

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
} from './graphql_helper'

// export { default as githubAPI } from './github_api'

export {
  parseURL,
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
} from './route_helper'

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
} from './mobx_helper'

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
} from './ssr_helper'

export {
  scrollIntoEle,
  scrollToHeader,
  scrollToTabber,
  scrollToTop,
  holdPage,
  unholdPage,
  focusDoraemonBar,
  blurDoraemonBar,
  hideDoraemonBarRecover,
  isBrowser,
} from './dom_operator'
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

export { default as SOCIAL_LISTS } from './social_lists'

// helpers
export { toast, toastBarColor } from './toast'
export { default as animate } from './animations'
export { default as cs } from './common_styles'
export { default as BStore } from './bstore'
export { Trans } from './i18n'
export { default as GA } from './analytics'
