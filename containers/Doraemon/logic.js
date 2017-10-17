import R from 'ramda'

import { makeDebugger } from '../../utils/debug'
import Pockect from './Pockect'
import { SwissArmyKnife } from './helper/swissArmyKnife'

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
      match: SAK.stepOneCmd('hforward'),
      action: () => {
        console.log('SAK.stepOneCmd hforward')
        //   SAK.completeInput(true)
        //   queryPocket()
      },
    },
    {
      match: SAK.stepOneCmd('hbackward'),
      action: () => {
        console.log('SAK.stepOneCmd hbackward')
        //   SAK.completeInput(true)
        // queryPocket()
      },
    },
    {
      match: SAK.stepTwoCmd('themes'),
      action: cmdpath => {
        const theme = R.last(cmdpath)
        console.log('SAK.stepTwoCmd')
        store.changeTheme(theme)
      },
    },
    {
      match: SAK.stepOneLink,
      action: cmdpath => {
        console.log('stepOneLink: ', cmdpath)
      },
    },
    {
      match: SAK.stepTwoLink,
      action: cmdpath => {
        console.log('stepTwoLink: ', cmdpath)
      },
    },
  ]
}

const clearfyCmd = R.compose(R.split('--'), R.toLower)

const doCmd = () => {
  const cmd = clearfyCmd(store.activeRaw)

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

export function panelClick(e) {
  debug('---> panelClick ...')
  e.stopPropagation()
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
    store.loadSuggestions(res)
  })

  pockect$.emptyInput().subscribe(() => {
    store.clearSuggestions()
  })
}
