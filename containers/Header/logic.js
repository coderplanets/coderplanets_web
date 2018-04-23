import R from 'ramda'
import store from 'store'

import {
  makeDebugger,
  dispatchEvent,
  EVENT,
  TYPE,
  /* Global, */
  ERR,
  $solver,
  // getParameterByName,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'
import S from './schema'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Header')
/* eslint-enable no-unused-vars */

let header = null
/* const sub$ = null */
/* const user_token = */

export function previewState() {
  // header.openPreview(type)
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ROOT_STORE,
  })
}

export function signinGithub(code) {
  debug('signin_github: ', code)
  const args = {
    code,
  }
  sr71$.mutate(S.githubSignin, args)
}

export function checkUserAccount() {
  // debug('checkUserAccount: to get user breif')
  const user = store.get('user')
  if (user) {
    // NOTICE: if store is not valid json, user will be typeof string
    header.updateAccount({ ...user })
  } else {
    // not shoe
    debug('do nothing')
  }
}

export function previewAccount() {
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT_VIEW,
    data: { hello: 'world --- fuck' },
  })
}

export function login() {
  debug('do login')
  dispatchEvent(EVENT.LOGIN_PANEL)
}

export function openPreview() {
  // header.openPreview(type)
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT_VIEW,
    data: { hello: 'world' },
  })
}

export function openDoraemon() {
  header.openDoraemon()
}

const DataSolver = [
  {
    // TODO move it to user side view
    match: R.has(S.githubSigninRes),
    action: res => {
      const data = res[S.githubSigninRes]
      debug('dataResolver  --->', data)
    },
  },
  {
    match: R.has('user'),
    action: res => {
      const data = res.user
      debug('dataResolver userRes  --->', data)
      /* store.set('user', { ...data }) */
      header.updateAccount(data)
    },
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(selectedStore) {
  header = selectedStore
  // if (sub$) sub$.unsubscribe()
  /* sub$ = sr71$.data().subscribe(handleData) */
  // sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  checkUserAccount()
}
