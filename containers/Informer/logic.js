// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Informer')
/* eslint-enable no-unused-vars */

let store = null

export const toggleModal = () =>
  store.markState({
    showModal: !store.showModal,
  })

export const backToOverview = () =>
  store.markState({
    curView: 'overview',
  })

export const onMessageChange = e => store.markState({ message: e.target.value })

export function onConfirm() {
  debug('onConfirm')
  store.toastDone({
    title: '感谢提交',
    msg: '我们会尽快处理您举报的内容，为民除害。',
  })
  backToOverview()
  toggleModal()
}

export function yesReport(type) {
  store.markState({
    curView: 'form',
    type,
  })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
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

export function uninit() {
  store.markState({ curView: 'overview' })
  sub$.unsubscribe()
  sub$ = null
}

export function init(_store) {
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
