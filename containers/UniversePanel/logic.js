import R from 'ramda'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

import { makeDebugger } from '../../utils/debug'
import Doraemon from './Doraemon'

import { langs } from './suggestions'

const debug = makeDebugger('L:UniversePanel')

let store = null
let Doraemon$ = null

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
  Doraemon$.search(inputValue)
}

export function navUpSuggestion() {
  // debug('navUpSuggestion', store.suggestionCount)
  store.activeUp()
  scrollIfNeeded()
}

function scrollIfNeeded() {
  try {
    /* eslint-disable no-undef */
    const theFuck = document.querySelector(`#${store.activeTitle}`)
    /* eslint-enable no-undef */

    // console.log('theFuck: ', theFuck)
    scrollIntoViewIfNeeded(theFuck, true, {
      duration: 80,
    })
  } catch (e) {
    debug('bad selector in scrollIntoViewIfNeeded')
  }
}

export function navDownSuggestion() {
  // debug('navDownSuggestion')
  // debug('navDownSuggestion store.activeTitle: ', store.activeTitle)
  // store.activeTitle
  store.activeDown()
  scrollIfNeeded()
}

export function navToSuggestion(suggestion) {
  const activeSuggestion = suggestion.toJSON()
  // TODO: has to scroll when in button
  //  debug('navToSuggestion .?.', activeSuggestion.title)
  store.activeTo(activeSuggestion.title)
}

export function hidePanel() {
  debug('hidePanel')
}

export function onKeyPress(e) {
  //  debug('onKeyPress ..', e.key)
  switch (e.key) {
    case 'Tab': {
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

R.map(
  name => ({
    title: name,
    desc: '帖子: 233, 用户: 344',
  }),
  R.keys(langs)
)

const formater = name => ({
  title: name,
  desc: '帖子: 233, 用户: 344',
})
const formatSuggestions = R.compose(R.map(formater), R.keys)

function loadSuggestions() {
  const data = formatSuggestions(langs)

  store.loadSuggestions(data)
}

export function init(selectedStore) {
  store = selectedStore
  loadSuggestions()
  debug('store', store)
  Doraemon$ = new Doraemon()

  Doraemon$.get().subscribe(res => {
    const formatRes = R.map(formater, res)
    debug('Doraemon get: ', formatRes)
    store.loadSuggestions(formatRes)
  })

  Doraemon$.emptyInput().subscribe(() => {
    debug('Doraemon get emptyInput!')
    store.clearSuggestions()
  })
}
