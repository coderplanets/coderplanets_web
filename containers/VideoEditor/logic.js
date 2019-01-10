import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  asyncRes,
  $solver,
  asyncErr,
  cast,
  TYPE,
  ERR,
  EVENT,
  updateEditing,
  closePreviewer,
} from '../../utils'

import SR71 from '../../utils/network/sr71'

import { S, updatableFields } from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:VideoEditor')

let store = null

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const onPublish = () => {
  if (!store.validator('publish')) return false

  const { isEdit } = store

  const communityId = store.curCommunity.id
  const publishAt = new Date(store.editVideoData.publishAt).toISOString()
  const durationSec = 2000
  const args = R.merge(store.editVideoData, {
    communityId,
    publishAt,
    durationSec,
  })

  store.markState({ publishing: true })
  if (isEdit) {
    const args = cast(updatableFields, store.editVideoData)
    return sr71$.mutate(S.updateVideo, args)
  }
  sr71$.mutate(S.createVideo, args)
}

export const canclePublish = () => {
  store.markState({ publishing: false })
  sr71$.stop()
}

export const usePosterAsThumbnil = () =>
  store.updateEditing({ poster: store.editVideoData.thumbnil })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('createVideo'),
    action: () => {
      closePreviewer()
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      store.reset()
    },
  },
  {
    match: asyncRes('updateVideo'),
    action: () => {
      closePreviewer()
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      store.reset()
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      store.markState({ publishing: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      store.markState({ publishing: false })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      store.markState({ publishing: false })
    },
  },
]

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_VIDEO_EDIT) {
    debug('edit the fuck', att)
    store.markState({ editVideo: att, isEdit: true })
    /* loadVideo(att) */
    /* store.setViewing({ video: att }) */
  }
}

export function init(_store, attachment) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  if (store.publishing || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
