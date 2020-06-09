import { useEffect } from 'react'
import { merge, isEmpty } from 'ramda'

import { TYPE, EVENT, ERR } from '@/constant'
import {
  asyncSuit,
  buildLog,
  send,
  cast,
  updateEditing,
  closePreviewer,
  errRescue,
} from '@/utils'

import { S, updatableFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:VideoEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const onPublish = () => {
  if (!store.validator('publish')) return false

  const { isEdit } = store

  const communityId = store.curCommunity.id
  const publishAt = new Date(store.editVideoData.publishAt).toISOString()
  const durationSec = 2000
  const args = merge(store.editVideoData, {
    communityId,
    publishAt,
    durationSec,
  })

  if (!isEmpty(store.labelsData.tags)) {
    args.tags = store.labelsData.tags
  }

  store.mark({ publishing: true })
  if (isEdit) {
    const args = cast(updatableFields, store.editVideoData)
    return sr71$.mutate(S.updateVideo, args)
  }
  sr71$.mutate(S.createVideo, args)
}

export const cancelPublish = () => {
  store.mark({ publishing: false })
  sr71$.stop()
  closePreviewer()
}

export const usePosterAsThumbnil = () =>
  store.updateEditing({ poster: store.editVideoData.thumbnil })

const cancelLoading = () => store.mark({ publishing: false })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('createVideo'),
    action: () => {
      closePreviewer()
      send(EVENT.REFRESH_VIDEOS)
      store.reset()
    },
  },
  {
    match: asyncRes('updateVideo'),
    action: () => {
      closePreviewer()
      send(EVENT.REFRESH_VIDEOS)
      store.reset()
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'VideoEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'VideoEditor' })
    },
  },
]

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_VIDEO_EDIT) {
    store.mark({ editVideo: att, isEdit: true })
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
    log('啊啊啊')

    return () => {
      // log('effect uninit')
      store.mark({ isEdit: false, editVideo: { source: 'youtube' } })
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
