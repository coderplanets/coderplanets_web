import R from 'ramda'

import { makeDebugger, asyncRes, $solver, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:VideoEditor')
/* eslint-enable no-unused-vars */

let store = null

export const formDataChange = R.curry((part, e) =>
  store.updateEditing({ [part]: e.target.value })
)

export const sourceOnSelect = source => store.updateEditing({ source })
export const copyThumbnilLink = url => store.updateEditing({ poster: url })
export const onUploadDone = (part, url) => store.updateEditing({ [part]: url })

export function onPublish() {
  if (!store.validator('publish')) return false
  debug('onPublish editVideoData: ', store.editVideoData)

  const communityId = store.curCommunity.id
  const publishAt = new Date(store.editVideoData.publishAt).toISOString()
  const durationSec = 2000
  const args = R.merge(store.editVideoData, {
    communityId,
    publishAt,
    durationSec,
  })

  debug('args: ', args)
  sr71$.mutate(S.createVideo, args)
}

export function canclePublish() {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('createVideo'),
    action: () => {
      // cancelLoading()
      /* store.markState({ createVideo }) */
      debug('createVideo done')
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

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
