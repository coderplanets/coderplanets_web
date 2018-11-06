import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  TYPE,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:VideoViewer')
/* eslint-enable no-unused-vars */

let store = null

function loadVideo({ id }) {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  /* loading() */
  sr71$.query(S.video, variables)
}

export function onReaction(thread, action, userDid, { id }) {
  /*
     debug('onReaction thread: ', thread)
     debug('onReaction action: ', action)
     debug('onReaction userDid: ', store.isLogin)
     debug('onReaction id: ', id)
   */

  const args = { id, thread: R.toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_VIDEO_VIEW) {
    loadVideo(att)
    store.setViewing({ video: att })
  }
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('video'),
    action: ({ video }) => {
      store.setViewing({ video: R.merge(store.viewingData, video) })
      /* loading(false) */
    },
  },
  {
    match: asyncRes('reaction'),
    action: ({ reaction }) =>
      sr71$.query(S.videoReactionRes, { id: reaction.id }),
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

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}
