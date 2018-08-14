import R from 'ramda'
import Router from 'next/router'

import { DEFAULT_ICON } from '../../config/assets'

import Pockect from './Pockect'
/* import { makeDebugger, Global, dispatchEvent, EVENT, BStore } from '../../utils' */
import { makeDebugger, Global, getParameterByName } from '../../utils'
import { SwissArmyKnife } from './helper/swissArmyKnife'

import oauthPopup from './oauth_window'

const debug = makeDebugger('L:Doraemon')

let store = null
let pockect$ = null
let SAK = null
let cmdResolver = []

const reposIsEmpty = R.compose(
  R.isEmpty,
  R.prop('reposData')
)
const inputValueIsNotEmpty = R.compose(
  R.not,
  R.isEmpty,
  R.prop('inputValue')
)
const isNotSearching = R.compose(
  R.not,
  R.prop('searching')
)

function queryPocket() {
  pockect$.query(store.inputValue)
}

/*
function simuUserLogin() {
  const data = {
    id: '112',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtYXN0YW5pX3NlcnZlciIsImV4cCI6MTUyNTI2Nzc3NCwiaWF0IjoxNTI0MDU4MTc0LCJpc3MiOiJtYXN0YW5pX3NlcnZlciIsImp0aSI6IjdiNjdhYzJmLTIwMjYtNDMzNy04MjcyLTVmYjY0ZDMxMGVjNyIsIm5iZiI6MTUyNDA1ODE3Mywic3ViIjoiMTEyIiwidHlwIjoiYWNjZXNzIn0.mm0GuOhzs8UYikPZGnIKQpnGYJQiwzEtCx2xeRn1qcT3sOT6Yg3GvM303OxDoGHnrNf72HSjwVxiCO6mXkq8mg',
    nickname: 'mydearxym',
    avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
    bio:
      "everyday is the opportunity you can't get back,so live life to the fullest",
    fromGithub: true,
  }

  BStore.set('user', data)

  store.updateAccount(data)
}

*/

export function githubLoginHandler() {
  // header.openPreview(type)
  debug('just previewAccount ..', process.env.GITHUB_CLIENT_ID)

  const clientId = process.env.GITHUB_CLIENT_ID
  const info = 'from_github'
  const cb = 'http://www.coderplanets.com'
  const github = 'https://github.com/login/oauth/authorize'
  const url = `${github}?client_id=${clientId}&state=${info}&redirect_uri=${cb}`

  // debug(url)
  // sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  // checkUserAccount()
  // return false
  // signinGithub('71b0c5169ebbb7a124b9')
  /* reference */
  /* http://www.graphql.college/implementing-github-oauth-flow-in-react */

  /* Global.location.href = url */
  /* console.log('getParameterByName:', getParameterByName('recoe')) */
  // popup('http://localhost:3000?code=djfiekdjfie')

  console.log('oauthPopup url', url)
  oauthPopup(url)
  /* simuUserLogin() */

  //  setTimeout(() => {
  // use normal-http to signinGithub
  // sync userinfo to store
  // finally:
  //  dispatchEvent(EVENT.LOGIN)
  // }, 5000)

  Global.addEventListener('message', e => {
    if (e.origin === Global.location.origin) {
      if (e.data.from_oauth_window) {
        console.log('收到合法消息: ', e.data)
        const code = getParameterByName('code', e.data.from_oauth_window)
        console.log('get code: ', code)
        Global.postMessage({ from_parent: true }, Global.location.href)
      }
    }
  })
}

const initCmdResolver = () => {
  cmdResolver = [
    {
      match: SAK.stepOneCmd('theme'),
      action: () => {
        SAK.completeInput(true)
        queryPocket()
      },
    },
    {
      match: SAK.stepOneCmd('login'),
      action: () => {
        SAK.completeInput(true)
        queryPocket()
      },
    },
    {
      match: SAK.stepOneCmd('debug'),
      action: () => {
        SAK.completeInput(true)
        queryPocket()
        store.markState({
          inputForOtherUse: true,
          inputValue: Global.localStorage.getItem('debug'),
        })
      },
    },
    {
      match: SAK.stepOneCmd('hforward'),
      action: () => {
        debug('SAK.stepOneCmd hforward')
      },
    },
    {
      match: SAK.stepOneCmd('hbackward'),
      action: () => {
        debug('SAK.stepOneCmd hbackward')
      },
    },
    {
      match: SAK.stepOneCmd('cheatsheet'),
      action: () => {
        debug('SAK.stepOneCmd cheatsheet')
        Router.push(
          {
            pathname: '/',
            query: { main: 'cheatsheet' },
          },
          '/cheatsheet'
        )
        hidePanel()
      },
    },
    {
      match: SAK.stepOneCmd('communities'),
      action: () => {
        debug('SAK.stepOneCmd communities')
        Router.push(
          {
            pathname: '/',
            query: { main: 'communities', sub: 'all' },
          },
          '/communities/all'
        )
        hidePanel()
      },
    },
    {
      match: SAK.stepTwoCmd('theme'),
      action: cmdpath => {
        const theme = R.last(cmdpath)
        store.changeTheme(theme)
      },
    },
    {
      match: SAK.stepTwoCmd('login'),
      action: cmdpath => {
        debug('stepTwoCmd login->: ', cmdpath)
        githubLoginHandler()
        hidePanel()
        /* reference */
        /* http://www.graphql.college/implementing-github-oauth-flow-in-react */
        /* SAK.completeInput(true) */
        /* queryPocket() */
      },
    },
    {
      match: SAK.stepTwoCmd('debug'),
      action: cmdpath => {
        const cmd = R.last(cmdpath)
        if (cmd === 'github') {
          Global.window.open('https://github.com/visionmedia/debug', '_blank')
        } else if (cmd === 'write') {
          Global.localStorage.setItem('debug', store.inputValue)
          hidePanel()
        }
      },
    },
    {
      match: SAK.communityLinker,
      action: cmdpath => {
        debug('communityLinker: ', cmdpath)

        // Router.push(url, as)
        // TODO: use route store  method
        Router.push(
          {
            pathname: '/',
            query: { main: cmdpath[0] },
          },
          cmdpath[0]
        )
        hidePanel()
      },
    },
    {
      match: SAK.communityInsideLinker,
      action: cmdpath => {
        debug('communityInsideLinker: ', cmdpath)
      },
    },
  ]
}

const doCmd = () => {
  const cmd = store.curCmdChain
  if (!cmd) return

  /* Do not use forEach, cause forEach will not break */
  for (let i = 0; i < cmdResolver.length; i += 1) {
    if (cmdResolver[i].match(cmd)) {
      return cmdResolver[i].action(cmd)
    }
  }
  return false
}

export function handleShortCuts(e) {
  //  debug('onKeyPress ..', e.key)
  switch (e.key) {
    case 'Tab': {
      SAK.completeInput()
      queryPocket()
      e.preventDefault()
      break
    }
    case 'Enter': {
      doCmd()
      // Cmder.doCmd()
      // pockect$.doCmd()
      e.preventDefault()
      break
    }
    // Prevent default behavior in text input while pressing arrow up
    // https://stackoverflow.com/questions/1080532/prevent-default-behavior-in-text-input-while-pressing-arrow-up
    case 'ArrowUp': {
      navSuggestion('up')
      e.preventDefault()
      break
    }
    case 'ArrowDown': {
      navSuggestion('down')
      e.preventDefault()
      break
    }
    default: {
      //  debug('onKeyPress: ', e.key)
      break
    }
  }
}

// TODO: not found hinter logic ..
export const repoNotFound = R.allPass([
  reposIsEmpty,
  inputValueIsNotEmpty,
  isNotSearching,
])

export function navSuggestion(direction) {
  SAK.navSuggestion(direction)
}

// mounseEnter
export function navToSuggestion(suggestion) {
  SAK.navToSuggestion(suggestion)
}

export function getPrefixLogo(prefix) {
  const { subscribedCommunities } = store
  if (R.isEmpty(subscribedCommunities) || R.isEmpty(prefix)) {
    return DEFAULT_ICON
  }

  const index = R.findIndex(e => {
    return e.raw === prefix
  }, subscribedCommunities)
  if (index === -1) return DEFAULT_ICON

  const { logo } = subscribedCommunities[index]
  return logo
}

export function hidePanel() {
  store.hideDoraemon()
  pockect$.stop()
}

export function inputOnChange(e) {
  const inputValue = e.target.value
  store.markState({
    inputValue,
    cmdChain: null,
    // searching: true,
  })
  queryPocket()
}

export function init(_store) {
  if (store) return false

  store = _store

  pockect$ = new Pockect(store)
  SAK = new SwissArmyKnife(store)

  initCmdResolver()

  pockect$.cmdSuggesttion().subscribe(res => {
    // debug('--> loadSuggestions res: ', res)
    store.loadSuggestions(res)
  })

  pockect$.emptyInput().subscribe(() => {
    store.clearSuggestions()
  })
}
