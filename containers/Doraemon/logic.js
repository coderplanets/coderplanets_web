import R from 'ramda'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

import { makeDebugger } from '../../utils/debug'
import Pockect from './Pockect'
import { anyNil } from '../../utils/functions'
import {
  stepOneCmd,
  stepTwoCmd,
  stepOneLink,
  stepTwoLink,
} from './helper/cmder'

const debug = makeDebugger('L:Doraemon')

let store = null
let pockect$ = null

// const RLog = x => debug('R log: ', x)

const reposIsEmpty = R.compose(R.isEmpty, R.prop('reposData'))
const inputValueIsNotEmpty = R.compose(R.not, R.isEmpty, R.prop('inputValue'))
const isNotSearching = R.compose(R.not, R.prop('searching'))

function scrollIfNeeded() {
  try {
    /* eslint-disable no-undef */
    scrollIntoViewIfNeeded(
      document.querySelector(`#${store.activeRaw}`),
      true,
      {
        duration: 80,
      }
    )
    /* eslint-enable no-undef */
  } catch (e) {
    debug('bad selector in scrollIntoViewIfNeeded', e)
  }
}

function query(inputValue) {
  store.markState({
    inputValue,
    // searching: true,
  })
  pockect$.search(inputValue)
}

function completeInput(into = false) {
  if (anyNil([store.prefix, store.activeTitle])) return

  const prefix = R.toLower(store.prefix)
  const activeTitle = R.toLower(store.activeTitle)

  let inputValue = ''
  // TODO: support ? opt
  if (store.prefix === '/') {
    inputValue = `${prefix}${activeTitle}`
  } else {
    inputValue = `/${prefix}/${activeTitle}`
  }

  if (into) inputValue = `${inputValue}/`
  // debug('new input: ', newInput)
  query(inputValue)
}

const cmdResolver = [
  {
    match: stepOneCmd('themes'),
    action: () => {
      completeInput(true)
    },
  },
  {
    match: stepTwoCmd('themes'),
    action: cmdpath => {
      const theme = R.last(cmdpath)
      store.changeTheme(theme)
    },
  },
  {
    match: stepOneLink,
    action: cmdpath => {
      console.log('stepOneLink: ', cmdpath)
    },
  },
  {
    match: stepTwoLink,
    action: cmdpath => {
      console.log('stepTwoLink: ', cmdpath)
    },
  },
]

// TODO: move to cmdLogic.js
const doCmd = () => {
  const lowerRaw = R.toLower(store.activeRaw)
  const splitRaw = R.split('--', lowerRaw)

  // Do not use forEach, cause forEach will not break
  for (let i = 0; i < cmdResolver.length; i += 1) {
    if (cmdResolver[i].match(splitRaw)) {
      return cmdResolver[i].action(splitRaw)
    }
  }
  return false
}

export function onKeyPress(e) {
  //  debug('onKeyPress ..', e.key)
  switch (e.key) {
    case 'Tab': {
      completeInput()
      e.preventDefault()
      break
    }
    case 'Enter': {
      doCmd()
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

export const repoNotFound = R.allPass([
  reposIsEmpty,
  inputValueIsNotEmpty,
  isNotSearching,
])

export function navSuggestion(direction) {
  if (anyNil([store.prefix, store.activeTitle])) return
  if (direction === 'up') {
    store.activeUp()
  } else {
    store.activeDown()
  }
  scrollIfNeeded()
}

// mounseEnter
export function navToSuggestion(suggestion) {
  const activeSuggestion = suggestion.toJSON()
  store.activeTo(activeSuggestion.raw)
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
  query(inputValue)
}

export function init(selectedStore) {
  store = selectedStore
  debug('store', store)
  pockect$ = new Pockect(store)

  pockect$.cmdSuggesttion().subscribe(res => {
    //    debug('--> res: ', res)
    store.loadSuggestions(res)
  })

  pockect$.emptyInput().subscribe(() => {
    store.clearSuggestions()
  })
}
