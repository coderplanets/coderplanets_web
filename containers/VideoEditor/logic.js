import R from 'ramda'
import { useEffect } from 'react'

import {
  buildLog,
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
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'

import { S, updatableFields } from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:VideoEditor')

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

  if (!R.isEmpty(store.labelsData.tags)) {
    args.tags = store.labelsData.tags
  }

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
  closePreviewer()
}

export const usePosterAsThumbnil = () =>
  store.updateEditing({ poster: store.editVideoData.thumbnil })

const cancleLoading = () => store.markState({ publishing: false })

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
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'VideoEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'VideoEditor' })
    },
  },
]

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_VIDEO_EDIT) {
    store.markState({ editVideo: att, isEdit: true })
  }
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    openAttachment(attachment)

    return () => {
      // log('effect uninit')
      store.markState({ isEdit: false, editVideo: { source: 'youtube' } })
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
