import R from 'ramda'

import SR71 from '../../utils/network/sr71'

import S from './schema'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  closePreviewer,
  EVENT,
  ERR,
  TYPE,
  $solver,
} from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('L:JobViewer')

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})

let sub$ = null
let store = null

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
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      sr71$.stop()
      markLoading(false)
      // store.setViewing({ post: {} })
    },
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
