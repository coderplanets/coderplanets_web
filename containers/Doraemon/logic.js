import R from 'ramda'
import Router from 'next/router'

import Pockect from './Pockect'
import { makeDebugger, Global } from '../../utils/functions'
import { SwissArmyKnife, clearfyCmd } from './helper/swissArmyKnife'

const debug = makeDebugger('L:Doraemon')

let store = null
let pockect$ = null
let SAK = null
let cmdResolver = []

const reposIsEmpty = R.compose(R.isEmpty, R.prop('reposData'))
const inputValueIsNotEmpty = R.compose(R.not, R.isEmpty, R.prop('inputValue'))
const isNotSearching = R.compose(R.not, R.prop('searching'))

function queryPocket() {
  pockect$.query(store.inputValue)
}

const initCmdResolver = () => {
  cmdResolver = [
    {
      match: SAK.stepOneCmd('themes'),
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
        console.log('SAK.stepOneCmd hforward')
      },
    },
    {
      match: SAK.stepOneCmd('hbackward'),
      action: () => {
        console.log('SAK.stepOneCmd hbackward')
      },
    },
    {
      match: SAK.stepTwoCmd('themes'),
      action: cmdpath => {
        const theme = R.last(cmdpath)
        store.changeTheme(theme)
      },
    },
    {
      match: SAK.stepTwoCmd('login'),
      action: cmdpath => {
        debug('stepTwoCmd login: ', cmdpath)
        SAK.completeInput(true)
        queryPocket()
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
        Router.push(
          {
            pathname: '/',
            query: { name: cmdpath[0] },
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
  const cmd = clearfyCmd(store.activeRaw)
  //  debug('clearfyCmd: ', cmd)
  // Do not use forEach, cause forEach will not break
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
  store.hideDoraemon()
  pockect$.stop()
}

export function inputOnChange(e) {
  const inputValue = e.target.value
  store.markState({
    inputValue,
    // searching: true,
  })
  queryPocket()
}

export function init(selectedStore) {
  store = selectedStore
  debug('store', store)

  pockect$ = new Pockect(store)
  SAK = new SwissArmyKnife(store)

  initCmdResolver()

  pockect$.cmdSuggesttion().subscribe(res => {
    debug('--> loadSuggestions res: ', res)
    store.loadSuggestions(res)
  })

  pockect$.emptyInput().subscribe(() => {
    store.clearSuggestions()
  })
}
