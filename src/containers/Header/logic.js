import { useEffect } from 'react'

// eslint-disable-next-line import/named
import { TYPE, EVENT, ERR } from '@/constant'

import {
  asyncSuit,
  buildLog,
  send,
  thread2Subpath,
  atomizeValues,
  scrollToHeader,
  errRescue,
  Global,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Header')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.SET_C11N],
})

let store = null
let sub$ = null

export const previewState = () =>
  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ROOT_STORE })

export const previewAccount = () =>
  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_VIEW })

// to avoid page-cache in server
export const checkSesstionState = () => sr71$.query(S.sessionState, {})

export const onThreadChange = (activeThread) => {
  console.log('onThreadChange: ', activeThread)

  // const activeThread = thread.raw
  const subPath = thread2Subpath(activeThread)

  scrollToHeader()

  store.markRoute({ subPath })
  store.setViewing({ activeThread })
  send(EVENT.TABBER_CHANGE, { data: { activeThread, topic: subPath } })
}

export const onLogin = () => send(EVENT.LOGIN_PANEL)
export const onLogout = () => {
  store.logout()

  setTimeout(() => {
    Global.location.reload(false)
  }, 2000)
}

export const openDoraemon = () => store.openDoraemon()
export const upgradeHelper = () => store.upgradeHelper()

export const queryDoraemon = (data) => send(EVENT.QUERY_DORAMON, { data })

const DataSolver = [
  {
    match: asyncRes('sessionState'),
    action: ({ sessionState: state }) => {
      store.updateSesstion(state)
      if (state.isValid !== store.accountInfo.isValidSession) {
        send(EVENT.SESSTION_ROUTINE)
      }
    },
  },
  {
    match: asyncRes(EVENT.SET_C11N),
    action: (res) => {
      if (!store.isLogin) {
        store.toastInfo({
          title: '设置未保存',
          msg: '当前为未登录状态，个性化设置不会同步到服务器.',
        })
        return false
      }
      const { data } = res[EVENT.SET_C11N]

      const customization = atomizeValues(data)
      sr71$.mutate(S.setCustomization, { customization })
    },
  },
  {
    // TODO: notify user if failed
    match: asyncRes('setCustomization'),
    action: () => {},
    // log('set setCustomization done: ', setCustomization)
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'Header' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'Header' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    checkSesstionState()

    return () => {
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
