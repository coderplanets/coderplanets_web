import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  TYPE,
  EVENT,
  dispatchEvent,
  closePreviewer,
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
  markLoading(true)
  sr71$.query(S.video, variables)
}

export function onReaction(thread, action, userDid, { id }) {
  const args = { id, thread: R.toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export const onPin = () => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.pinVideo, args)
}

export const onUndoPin = () => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.undoPinVideo, args)
}

export const onEdit = () => {
  debug('onEdit', store.viewingData.id)
  debug('onEdit', store.viewingData)

  return dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_VIDEO_EDIT,
    data: store.viewingData, // maybe need clone
  })
}

export const onDelete = () =>
  sr71$.mutate(S.deleteVideo, { id: store.viewingData.id })

const markLoading = (maybe = true) => store.markState({ loading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('video'),
    action: ({ video }) => {
      markLoading(false)
      store.setViewing({ video: R.merge(store.viewingData, video) })
      /* loading(false) */
    },
  },
  {
    match: asyncRes('reaction'),
    action: ({ reaction }) =>
      sr71$.query(S.videoReactionRes, { id: reaction.id }),
  },
  {
    match: asyncRes('pinVideo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('undoPinVideo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('deleteVideo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      closePreviewer()
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

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_VIDEO_VIEW) {
    loadVideo(att)
    store.setViewing({ video: att })
  }
}

export function init(_store, attachment) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
