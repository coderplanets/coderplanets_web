import R from 'ramda'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

import { makeDebugger } from '../../utils/debug'
import Pockect from './Pockect'
import { anyNil } from '../../utils/functions'

// import { langs } from './suggestions/index'

const debug = makeDebugger('L:Doraemon')

let store = null
let pockect$ = null

// const RLog = x => debug('R log: ', x)

const reposIsEmpty = R.compose(R.isEmpty, R.prop('reposData'))
const inputValueIsNotEmpty = R.compose(R.not, R.isEmpty, R.prop('inputValue'))
const isNotSearching = R.compose(R.not, R.prop('searching'))

export const repoNotFound = R.allPass([
  reposIsEmpty,
  inputValueIsNotEmpty,
  isNotSearching,
])

export function search(e) {
  const inputValue = e.target.value
  // store.markState('inputValue', value)

  store.markState({
    inputValue,
    // searching: true,
  })
  pockect$.search(inputValue)
}

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

function completeCmd() {
  if (anyNil([store.prefix, store.activeTitle])) return

  const prefix = R.toLower(store.prefix)
  const activeTitle = R.toLower(store.activeTitle)

  let inputValue = ''
  if (store.prefix === '/') {
    inputValue = `${prefix}${activeTitle}`
  } else {
    inputValue = `/${prefix}/${activeTitle}`
  }
  // debug('new input: ', newInput)
  store.markState({ inputValue })
}

export function navUpSuggestion() {
  if (anyNil([store.prefix, store.activeTitle])) return
  // debug('navUpSuggestion', store.suggestionCount)
  store.activeUp()
  scrollIfNeeded()
}

export function navDownSuggestion() {
  if (anyNil([store.prefix, store.activeTitle])) return
  store.activeDown()
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

export function onKeyPress(e) {
  //  debug('onKeyPress ..', e.key)
  switch (e.key) {
    case 'Tab': {
      completeCmd()
      e.preventDefault()
      break
    }
    case 'Enter': {
      debug('Enter')
      // pockect$.doCmd()
      e.preventDefault()
      break
    }
    // Prevent default behavior in text input while pressing arrow up
    // https://stackoverflow.com/questions/1080532/prevent-default-behavior-in-text-input-while-pressing-arrow-up
    case 'ArrowUp': {
      navUpSuggestion()
      e.preventDefault()
      break
    }
    case 'ArrowDown': {
      navDownSuggestion()
      e.preventDefault()
      break
    }
    default: {
      //  debug('onKeyPress: ', e.key)
      break
    }
  }
}

export function panelClick(e) {
  debug('---> panelClick ...')
  e.stopPropagation()
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
