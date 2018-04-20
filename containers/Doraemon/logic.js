import R from 'ramda'
import Router from 'next/router'

import Pockect from './Pockect'
import { makeDebugger, Global } from '../../utils'
import { SwissArmyKnife } from './helper/swissArmyKnife'

const debug = makeDebugger('L:Doraemon')

let doraemon = null
let pockect$ = null
let SAK = null
let cmdResolver = []

const reposIsEmpty = R.compose(R.isEmpty, R.prop('reposData'))
const inputValueIsNotEmpty = R.compose(R.not, R.isEmpty, R.prop('inputValue'))
const isNotSearching = R.compose(R.not, R.prop('searching'))

function queryPocket() {
  pockect$.query(doraemon.inputValue)
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
        doraemon.markState({
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
        doraemon.changeTheme(theme)
      },
    },
    {
      match: SAK.stepTwoCmd('login'),
      action: cmdpath => {
        debug('stepTwoCmd login->: ', cmdpath)
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
          Global.localStorage.setItem('debug', doraemon.inputValue)
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
  /* console.log('doraemon.activeRaw: ', doraemon.activeRaw) */
  /* console.log('doraemon.curCmdChain: ', doraemon.curCmdChain) */
  const cmd = doraemon.curCmdChain
  if (!cmd) return

  console.log('clearfyCmd cms: ', cmd)
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

export function hidePanel() {
  doraemon.hideDoraemon()
  pockect$.stop()
}

export function inputOnChange(e) {
  const inputValue = e.target.value
  doraemon.markState({
    inputValue,
    cmdChain: null,
    // searching: true,
  })
  queryPocket()
}

export function init(selectedStore) {
  doraemon = selectedStore
  debug('doraemon', doraemon)

  pockect$ = new Pockect(doraemon)
  SAK = new SwissArmyKnife(doraemon)

  initCmdResolver()

  pockect$.cmdSuggesttion().subscribe(res => {
    // debug('--> loadSuggestions res: ', res)
    doraemon.loadSuggestions(res)
  })

  pockect$.emptyInput().subscribe(() => {
    doraemon.clearSuggestions()
  })
}
