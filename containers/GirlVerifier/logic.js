// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:GirlVerifier')

let store = null

export const toggleModal = () =>
  store.markState({
    showModal: !store.showModal,
  })

export const onMessageChange = e => store.markState({ message: e.target.value })

export const onConfirm = () => {
  store.toastDone({
    title: '感谢提交',
    msg: '我们会尽快核实你提交的资料。',
  })
  toggleModal()
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      debug('ERR.GRAPHQL -->', details)
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
