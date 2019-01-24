// import R from 'ramda'
import { makeDebugger, $solver, asyncErr, ERR, errRescue } from 'utils'
import SR71 from 'utils/async/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Informer')

export const toggleModal = () =>
  store.markState({
    showModal: !store.showModal,
  })

export const backToOverview = () =>
  store.markState({
    curView: 'overview',
  })

export const onMessageChange = e => store.markState({ message: e.target.value })

export const onConfirm = () => {
  debug('onConfirm')
  store.toastDone({
    title: '感谢提交',
    msg: '我们会尽快处理您举报的内容，为民除害。',
  })
  backToOverview()
  toggleModal()
}

export const yesReport = type =>
  store.markState({
    curView: 'form',
    type,
  })

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
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'Informer' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'Informer' }),
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (!sub$) return false
  store.markState({ curView: 'overview' })
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
