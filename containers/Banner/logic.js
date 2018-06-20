import {
  asyncRes,
  asyncErr,
  makeDebugger,
  $solver,
  ERR,
  EVENT,
  thread2Subpath,
  subPath2Thread,
} from '../../utils'
import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Banner')
/* eslint-enable no-unused-vars */

let banner = null
let sub$ = null

export function loadCommunity() {
  const { mainPath } = banner.curRoute

  sr71$.query(S.community, { raw: mainPath })
}

export function tabberChange(thread) {
  banner.markRoute({ subPath: thread2Subpath(thread) })
  banner.loadCurCommunity({ activeThread: thread })
}

// TODO: load cur community
// 两种情形: 1. 浏览器刷新页面. 2. 事件： Switch_Community

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      const { subPath } = banner.curRoute
      banner.loadCurCommunity({
        community,
        activeThread: subPath2Thread(subPath),
      })
    },
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadCommunity(),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

/*
const loadIfNeed = () => {
  const { curCommunity, curRoute } = banner
  const community = curCommunity.raw
  const { mainPath } = curRoute

  if (community !== mainPath) {
    debug('>>>>>>>>> need load banner')
    loadCommunity()
  }
}
*/

export function init(selectedStore) {
  if (banner) return false
  banner = selectedStore

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  /* debug('##################   init banner: ', sub$) */
  /* loadIfNeed() */
}
