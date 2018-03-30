import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  EVENT,
  TYPE,
  Global,
  ERR,
  $solver,
  // getParameterByName,
} from '../../utils'

import popup from './openWindow'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'
import S from './scheme'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Header')
/* eslint-enable no-unused-vars */

let header = null
let sub$ = null

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

export function previewAccount() {
  // header.openPreview(type)
  debug('previewAccount ..')
  const clientId = '3b4281c5e54ffd801f85'
  const info = 'from_github'
  const cb = 'http://www.coderplanets.com'
  const github = 'https://github.com/login/oauth/authorize'
  const url = `${github}?client_id=${clientId}&state=${info}&redirect_uri=${cb}`

  debug(url)
  /* reference */
  /* http://www.graphql.college/implementing-github-oauth-flow-in-react */

  /* Global.location.href = url */
  /* console.log('getParameterByName:', getParameterByName('recoe')) */
  // popup('http://localhost:3000?code=djfiekdjfie')
  popup(url)

  Global.addEventListener('message', e => {
    if (e.origin === Global.location.origin) {
      if (e.data.from_child) {
        debug('收到合法消息: ', e.data)
        Global.postMessage({ from_parent: true }, Global.location.href)
      }
    }
  })

  /*
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.ACCOUNT_PREVIEW_VIEW,
    data: { hello: 'world' },
  })
  */
}

export function openPreview() {
  // header.openPreview(type)
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.ACCOUNT_PREVIEW_VIEW,
    data: { hello: 'world' },
  })
}

export function openDoraemon() {
  header.openDoraemon()
}

const DataSolver = [
  {
    match: R.has(S.githubSigninRes),
    action: res => {
      const data = res[S.githubSigninRes]
      debug('dataResolver  -->', data)
    },
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('errorResovler error -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('errorResovler error -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('errorResovler error -->', details)
    },
  },
]

export function init(selectedStore) {
  header = selectedStore
  if (sub$) sub$.unsubscribe()
  /* sub$ = sr71$.data().subscribe(handleData) */
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
