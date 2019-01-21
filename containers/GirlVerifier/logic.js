// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR, errRescue } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:GirlVerifier')

export const toggleModal = () =>
  store.markState({ showModal: !store.showModal })

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
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'GirlVerifier' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'GirlVerifier' })
    },
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
