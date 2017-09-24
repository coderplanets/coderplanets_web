import R from 'ramda'

import { makeDebugger } from '../../utils/debug'
import { SearchService } from './Pigeon'

const debug = makeDebugger('L:UniversePanel')

let store = null
let Pigeon = null

const repoData = R.map(
  R.pick(['id', 'name', 'description', 'language', 'owner', 'stargazers_count'])
)

// const RLog = x => debug('R log: ', x)

const reposIsEmpty = R.compose(R.isEmpty, R.prop('reposData'))
const inputValueIsNotEmpty = R.compose(R.not, R.isEmpty, R.prop('inputValue'))
const isNotSearching = R.compose(R.not, R.prop('searching'))

export const repoNotFound = R.allPass([
  reposIsEmpty,
  inputValueIsNotEmpty,
  isNotSearching,
])

/*
export function repoNotFound() {
  return (
    R.isEmpty(store.reposData) &&
    !store.searching &&
    !R.isEmpty(store.inputValue)
  )
}
*/

export function search(e) {
  // console.log('search: ', val)
  const value = e.target.value
  store.markState('inputValue', value)
  store.markState('searching', true)
  Pigeon.search(value)
}

export function init(selectedStore) {
  store = selectedStore
  debug('store', store)
  Pigeon = new SearchService()

  Pigeon.get().subscribe(res => {
    debug('Pigeon get: ', res)
    // debug('washed: ', repoData(res.items))
    store.markState('searching', false)
    store.replaceRepos(repoData(res.items))
  })

  Pigeon.emptyInput().subscribe(() => {
    debug('Pigeon get emptyInput!')
    store.markState('searching', false)
    store.clearRepos()
  })
}
