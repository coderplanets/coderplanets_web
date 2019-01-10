import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  TYPE,
  EVENT,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})

/* eslint-disable-next-line */
const debug = makeDebugger('L:RepoViewer')

let sub$ = null
let store = null

export function loadRepo(id) {
  markLoading(true)
  const userHasLogin = store.isLogin
  sr71$.query(S.repo, { id, userHasLogin })
}

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_REPO_VIEW) {
    // TODO: merge default empty repo
    store.setViewing({ rep: att })
    loadRepo(att.id)
  }
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('repo'),
    action: ({ repo }) => {
      markLoading(false)
      store.setViewing({ repo: R.merge(store.viewingData, repo) })
    },
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

export function init(_store, attachment) {
  store = _store

  if (sub$) return openAttachment(attachment)
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
