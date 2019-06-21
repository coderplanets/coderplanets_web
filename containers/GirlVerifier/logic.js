// import R from 'ramda'
import { useEffect } from 'react'

import { buildLog, $solver, asyncErr, ERR, errRescue } from '@utils'
import SR71 from '@utils/async/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:GirlVerifier')

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

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (!sub$) return false
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
