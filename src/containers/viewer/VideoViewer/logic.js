import R from 'ramda'
import { useEffect } from 'react'

import { TYPE, ERR } from '@/constant'
import { asyncSuit, buildLog, errRescue } from '@/utils'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:VideoViewer')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

function loadVideo({ id }) {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading(true)
  sr71$.query(S.video, variables)
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'VideoViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'VideoViewer' })
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

export const holder = 1
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
