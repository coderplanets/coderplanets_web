// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  EVENT,
  TYPE,
  dispatchEvent,
  subPath2Thread,
  thread2Subpath,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({ resv_event: [EVENT.COMMUNITY_CHANGE] })
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunityBanner')
/* eslint-enable no-unused-vars */

let store = null

export function loadCommunity() {
  markLoading(true)

  const { raw } = store.curCommunity
  sr71$.query(S.community, { raw })
}

export function tabberChange(activeThread) {
  const subPath = thread2Subpath(activeThread)
  // debug('EVENT.activeThread -----> ', activeThread)
  // debug('EVENT.subPath -----> ', subPath)

  store.markRoute({ subPath })
  store.setViewing({ activeThread })

  dispatchEvent(EVENT.TABBER_CHANGE, { data: { activeThread, topic: subPath } })
}

export function showEditorList() {
  const type = TYPE.USER_LISTER_COMMUNITY_EDITORS
  const data = {
    id: store.viewing.community.id,
    brief: store.viewing.community.title,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      markLoading(false)
      const { subPath } = store.curRoute
      store.setViewing({
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
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      markLoading(false)
    },
  },
]

export function init(_store) {
  store = _store
  debug('===== do init')

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  /* debug('===== before uninit store.curView: ', store.loading) */
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
