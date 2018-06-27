/*
 * utils functiosn
 */

export { EVENT, ERR, TYPE, THREAD, ACTION, FILTER, ROUTE } from './constants'

export { makeDebugger } from './debug'

export {
  dispatchEvent,
  mapKeys,
  isObject,
  notEmpty,
  nilOrEmpty,
  getRandomInt,
  isEmptyValue,
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
} from './functions'

export { makeGQClient, asyncErr, asyncRes, later } from './graphql_helper'

export {
  getMainPath,
  getSubPath,
  getParameterByName,
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

export { default as Animate } from './animations'
export { smokey, column, columnCenter } from './common_styles'
/*
 * theme related
 */
export {
  theme,
  themeDict,
  themeKeys,
  themeCoverMap,
  themeCoverIndexMap,
} from './themes'

export { default as fakeUsers } from './fake_user'

export { default as BStore } from './bstore'
export { Trans } from './i18n'
export { default as GA } from './analytics'
