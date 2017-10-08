import R from 'ramda'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

import { makeDebugger } from '../../utils/debug'
import Pockect from './Pockect'

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

export function navUpSuggestion() {
  // debug('navUpSuggestion', store.suggestionCount)
  store.activeUp()
  scrollIfNeeded()
}

function scrollIfNeeded() {
  try {
    /* eslint-disable no-undef */
    // console.log('theFuck: ', theFuck)
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

export function navDownSuggestion() {
  // debug('navDownSuggestion')
  // debug('navDownSuggestion store.activeTitle: ', store.activeTitle)
  // store.activeTitle
  store.activeDown()
  scrollIfNeeded()
}

// seems unused ?
export function navToSuggestion(suggestion) {
  const activeSuggestion = suggestion.toJSON()
  // TODO: has to scroll when in button
  //  debug('navToSuggestion .?.', activeSuggestion.title)
  store.activeTo(activeSuggestion.raw)
}

export function hidePanel() {
  debug('hidePanel')
  pockect$.stop()
}

export function onKeyPress(e) {
  //  debug('onKeyPress ..', e.key)
  switch (e.key) {
    case 'Tab': {
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
  debug('panelClick ...')
  e.stopPropagation()
}

export function init(selectedStore) {
  store = selectedStore
  debug('store', store)
  pockect$ = new Pockect(store)

  //   pockect$.suggestion().subscribe(res => {
  //  debug('suggestion: ', res)
  // store.loadSuggestions(res)
  //  })

  pockect$.accessPathTest().subscribe(res => {
    //    console.log('--> res: ', res)
    store.loadSuggestions(res)
  })

  pockect$.emptyInput().subscribe(() => {
    //     debug('get emptyInput!')
    store.clearSuggestions()
  })
}
