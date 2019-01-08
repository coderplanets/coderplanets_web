import R from 'ramda'

import SR71 from '../../utils/network/sr71'

import S from './schema'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  closePreviewer,
  EVENT,
  ERR,
  TYPE,
  $solver,
} from '../../utils'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED, EVENT.REFRESH_REACTIONS],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobViewer')
/* eslint-enable no-unused-vars */

let sub$ = null
let store = null

export function onReaction(thread, action, userDid, { id }) {
  if (action === TYPE.FAVORITE) {
    return dispatchEvent(EVENT.SET_FAVORITE_CONTENT, {
      data: { thread },
    })
  }

  const args = { id, thread: R.toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export const onListReactionUsers = (type, data) =>
  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })

export const onTagSelect = tagId => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.activeThread)

  sr71$.mutate(S.setTag, { thread, id, tagId, communityId })
}

export const onTagUnselect = tagId => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.activeThread)

  sr71$.mutate(S.unsetTag, { thread, id, tagId, communityId })
}

const loadJob = ({ id }) => {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading()
  debug('loadJob variables: ', variables)
  sr71$.query(S.job, variables)
}

const openAttachment = att => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.PREVIEW_JOB_VIEW) {
    loadJob(att)
    store.markState({ type })
    store.setViewing({ job: att })
  }
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: R.merge(store.viewingData, job) })
      store.syncViewingItem(job)
      markLoading(false)
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_REACTIONS),
    action: e => {
      const { id } = e[EVENT.REFRESH_REACTIONS].data
      return sr71$.query(S.jobReactionRes, { id })
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      sr71$.stop()
      markLoading(false)
      // store.setViewing({ post: {} })
    },
  },
  {
    match: asyncRes('reaction'),
    action: ({ reaction: { id } }) => sr71$.query(S.jobReactionRes, { id }),
  },
  {
    match: asyncRes('undoReaction'),
    action: ({ undoReaction: { id } }) => sr71$.query(S.jobReactionRes, { id }),
  },
  {
    match: asyncRes('setTag'),
    action: () => {
      loadJob(store.viewingData)
      closePreviewer()
    },
  },
  {
    match: asyncRes('unsetTag'),
    action: () => {
      loadJob(store.viewingData)
      closePreviewer()
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
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  if (!sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
