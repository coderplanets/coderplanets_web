import R from 'ramda'

import {
  makeDebugger,
  $solver,
  holdPage,
  asyncRes,
  asyncErr,
  Global,
  EVENT,
  ERR,
  errorForHuman,
  dispatchEvent,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.CALL_CASHIER],
})
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Cashier')

let store = null

export const sidebarViewOnChange = sidebarView =>
  store.markState({ sidebarView, contentView: sidebarView })

export const paymentMethodOnChange = paymentMethod =>
  store.markState({ paymentMethod })

export const subContentViewOnChange = subContentView =>
  store.markState({ subContentView })

export const transferAccountChange = ({ target: { value } }) =>
  store.markState({ transferAccount: value })

export const onPaymentConfirm = () => {
  if (!store.isLogin) return store.authWarning({ hideToast: true })
  if (R.isEmpty(store.transferAccount))
    return store.toastError({ title: '提交失败', msg: '请填写转账信息' })

  const { paymentMethod, paymentUsage, amount, transferAccount: note } = store

  const args = {
    paymentMethod,
    paymentUsage,
    amount: parseFloat(amount),
    note,
  }
  debug('onPaymentConfirm: ', args)
  sr71$.mutate(S.createBill, args)
}

export const onClose = () => {
  const confirmed = Global.confirm('若已付款，请确保您填写了账户信息')

  if (confirmed) return store.markState({ show: false, subContentView: 'pay' })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.CALL_CASHIER),
    action: () => {
      store.markState({ show: true })
      holdPage()
    },
  },
  {
    match: asyncRes('createBill'),
    action: ({ createBill }) => {
      debug('createBill done: ', createBill)
      store.markState({ show: false, subContentView: 'pay' })
      store.toastDone({
        title: 'CPS 团队感谢您的支持!',
        msg: '我们会尽快为您办理',
      })
      dispatchEvent(EVENT.NEW_BILLS)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) =>
      store.toastError({ title: '提交失败', msg: errorForHuman(details) }),
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

export function init(_store) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
