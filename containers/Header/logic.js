// import R from 'ramda'
import { useEffect } from 'react'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  EVENT,
  TYPE,
  /* Global, */
  ERR,
  $solver,
  thread2Subpath,
  atomizeValues,
  pageGoTop,
  errRescue,
  Global,
  // getParameterByName,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.SET_C11N],
})

let store = null
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Header')

export const previewState = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ROOT_STORE })

export const previewAccount = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_VIEW })

// to avoid page-cache in server
export const checkSesstionState = () => sr71$.query(S.sessionState, {})

export const onThreadChange = thread => {
  const activeThread = thread.raw
  const subPath = thread2Subpath(activeThread)

  pageGoTop()

  store.markRoute({ subPath })
  store.setViewing({ activeThread })
  dispatchEvent(EVENT.TABBER_CHANGE, { data: { activeThread, topic: subPath } })
}

export const onLogin = () => dispatchEvent(EVENT.LOGIN_PANEL)
export const onLogout = () => {
  store.logout()

  setTimeout(() => {
    Global.location.reload(false)
  }, 2000)
}

export const openDoraemon = () => store.openDoraemon()
export const upgradeHepler = () => store.upgradeHepler()

export const queryDoraemon = data =>
  dispatchEvent(EVENT.QUERY_DORAMON, { data })

const DataSolver = [
  {
    match: asyncRes('sessionState'),
    action: ({ sessionState: state }) => {
      store.updateSesstion(state)
      if (state.isValid !== store.accountInfo.isValidSession) {
        dispatchEvent(EVENT.SESSTION_ROUTINE)
      }
    },
  },
  {
    match: asyncRes(EVENT.SET_C11N),
    action: res => {
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
    // debug('set setCustomization done: ', setCustomization)
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
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      checkSesstionState()

      return () => {
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
