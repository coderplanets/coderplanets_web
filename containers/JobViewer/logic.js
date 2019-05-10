import R from 'ramda'
import { useEffect } from 'react'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  closePreviewer,
  EVENT,
  ERR,
  TYPE,
  $solver,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:JobViewer')

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
    },
  },
  {
    match: asyncRes('setTag'),
    action: () => {
      loadJob(store.viewingData)
      closePreviewer()
      store.setViewing({ job: {} })
    },
  },
  {
    match: asyncRes('unsetTag'),
    action: () => {
      loadJob(store.viewingData)
      closePreviewer()
      store.setViewing({ job: {} })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'JobViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'JobViewer' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      openAttachment(attachment)

      return () => {
        // debug('effect uninit')
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store, attachment]
  )
}
