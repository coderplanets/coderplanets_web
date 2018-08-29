/*
 * utils functiosn
 */

export {
  EVENT,
  ERR,
  TYPE,
  THREAD,
  USER_THREAD,
  ACTION,
  FILTER,
  ROUTE,
} from './constants'

export { makeDebugger } from './debug'

export {
  dispatchEvent,
  mapKeys,
  getRandomInt,
  Global,
  onClient,
  cutFrom,
  prettyNum,
  Rlog,
  countWords,
  closePreviewer,
  debounce,
  extractMentions,
  extractAttachments,
  objAlreadyExsits,
} from './functions'

export { cast, notEmpty, isEmptyValue, nilOrEmpty, isObject } from './validator'

export { makeGQClient, asyncErr, asyncRes, later } from './graphql_helper'

export {
  getMainPath,
  getSubPath,
  getParameterByName,
  getQueryFromUrl,
  queryStringToJSON,
  mergeRouteQuery,
  serializeQuery,
  extractThreadFromPath,
  subPath2Thread,
  thread2Subpath,
} from './route_helper'

export {
  storePlug,
  markStates,
  meteorState,
  stripMobx,
  $solver,
  observerHoc,
} from './mobx_helper'

export {
  pageGoTop,
  scrollIntoEle,
  holdPage,
  unholdPage,
  focusDoraemonBar,
  hideDoraemonBarRecover,
} from './dom_operator'
/*
 * theme related
 */
export {
  theme,
  themeDict,
  themeDescs,
  themeKeys,
  themeCoverMap,
  themeCoverIndexMap,
} from './themes'

// helpers
export { toast, toastBarColor } from './toast'
export { default as Animate } from './animations'
export { smokey, column, columnCenter } from './common_styles'
export { default as BStore } from './bstore'
export { Trans } from './i18n'
export { default as GA } from './analytics'
