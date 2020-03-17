import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import {
  asyncSuit,
  buildLog,
  Global,
  lockPage,
  errorForHuman,
  send,
  errRescue,
} from '@utils'

import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

const sr71$ = new SR71({
  recieve: [EVENT.CALL_CASHIER],
})
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:Cashier')

let store = null

export const sidebarViewOnChange = sidebarView =>
  store.mark({ sidebarView, contentView: sidebarView })

export const paymentMethodOnChange = paymentMethod =>
  store.mark({ paymentMethod })

export const subContentViewOnChange = subContentView =>
  store.mark({ subContentView })

export const transferAccountChange = ({ target: { value } }) =>
  store.mark({ transferAccount: value })

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
  log('onPaymentConfirm: ', args)
  sr71$.mutate(S.createBill, args)
}

export const onClose = () => {
  const confirmed = Global.confirm('若已付款，请确保您填写了账户信息')

  if (confirmed) return store.mark({ show: false, subContentView: 'pay' })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.CALL_CASHIER),
    action: () => {
      store.mark({ show: true })
      lockPage()
    },
  },
  {
    match: asyncRes('createBill'),
    action: ({ createBill }) => {
      log('createBill done: ', createBill)
      store.mark({ show: false, subContentView: 'pay' })
      store.toastDone({
        title: 'CPS 团队感谢您的支持!',
        msg: '我们会尽快为您办理',
      })
      send(EVENT.NEW_BILLS)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) =>
      store.toastError({ title: '提交失败', msg: errorForHuman(details) }),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'Cashier' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'Cashier' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
