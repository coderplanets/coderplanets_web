// import R from 'ramda'
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
  // getParameterByName,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.SET_C11N],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Header')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null
/* const sub$ = null */
/* const user_token = */

export function previewState() {
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_ROOT_STORE,
  })
}

// to avoid page-cache in server
export function checkSesstionState() {
  sr71$.query(S.sessionState, {})
}

export function previewAccount() {
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_ACCOUNT_VIEW,
  })
}

export function onThreadChange(thread) {
  const activeThread = thread.raw

  /* store.markRoute({ community, thread: thread2Subpath(activeThread) }) */
  store.markRoute({ subPath: thread2Subpath(activeThread) })
  store.setViewing({ activeThread })
}

export const login = () => dispatchEvent(EVENT.LOGIN_PANEL)
export const openDoraemon = () => store.openDoraemon()
export const upgradeHepler = () => store.upgradeHepler()

const DataSolver = [
  {
    match: asyncRes('sessionState'),
    action: ({ sessionState: state }) => {
      debug('client side check sessionState: ', state)

      store.updateSesstion(state)
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
    action: ({ setCustomization }) => {
      debug('set setCustomization done: ', setCustomization)
    },
  },
]

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
      debug('ERR.NETWORK ?-->', details)
    },
  },
]

export function init(_store) {
  store = _store

  if (sub$) return checkSesstionState()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  checkSesstionState()
}
