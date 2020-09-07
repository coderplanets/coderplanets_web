import { useEffect } from 'react'
import { merge, toUpper } from 'ramda'

import { TYPE, EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, closeDrawer, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:JobViewer')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.PREVIEW_CLOSED],
})

let sub$ = null
let store = null

export const onTagSelect = (tagId) => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = toUpper(store.activeThread)

  sr71$.mutate(S.setTag, { thread, id, tagId, communityId })
}

export const onTagUnselect = (tagId) => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = toUpper(store.activeThread)

  sr71$.mutate(S.unsetTag, { thread, id, tagId, communityId })
}

const loadJob = ({ id }) => {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading()
  log('loadJob variables: ', variables)
  sr71$.query(S.job, variables)
}

const openAttachment = (att) => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.PREVIEW_JOB_VIEW) {
    loadJob(att)
    store.mark({ type })
    store.setViewing({ job: att })
  }
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: merge(store.viewingData, job) })
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
      closeDrawer()
      store.setViewing({ job: {} })
    },
  },
  {
    match: asyncRes('unsetTag'),
    action: () => {
      loadJob(store.viewingData)
      closeDrawer()
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
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    openAttachment(attachment)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
