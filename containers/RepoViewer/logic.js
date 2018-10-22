import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
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
  resv_event: [EVENT.PREVIEW_CLOSED, EVENT.REFRESH_REACTIONS],
})

let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:RepoViewer')
/* eslint-enable no-unused-vars */

let store = null

export function loadRepo(id) {
  const userHasLogin = store.isLogin
  sr71$.query(S.repo, { id, userHasLogin })
}

function reloadReactions(id) {
  return sr71$.query(S.repoReactionRes, { id })
}

export function onReaction(thread, action) {
  if (action === TYPE.FAVORITE) {
    return dispatchEvent(EVENT.SET_FAVORITE_CONTENT, {
      data: { thread },
    })
  }
}

export const onListReactionUsers = (type, data) =>
  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_REPO_VIEW) {
    // TODO: merge default empty repo
    store.setViewing({ rep: att })
    loadRepo(att.id)
  }
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('repo'),
    action: ({ repo }) => {
      store.setViewing({ repo: R.merge(store.viewingData, repo) })
      // store.setViewing({ repo })
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_REACTIONS),
    action: e => {
      const { id } = e[EVENT.REFRESH_REACTIONS].data
      reloadReactions(id)
    },
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

export function init(_store, attachment) {
  if (store) {
    return openAttachment(attachment)
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}
