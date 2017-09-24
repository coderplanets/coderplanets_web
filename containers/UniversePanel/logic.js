import R from 'ramda'

import { makeDebugger } from '../../utils/debug'
import { SearchService } from './Pigeon'

const debug = makeDebugger('L:UniversePanel')

let store = null
let Pigeon = null

const repoData = R.map(
  R.pick(['id', 'name', 'description', 'language', 'owner', 'stargazers_count'])
)

export function watshData() {
  debug('watshData')
}

export function search(val) {
  // console.log('search: ', val)
  Pigeon.search(val)
}

export function init(selectedStore) {
  debug('store', store)
  store = selectedStore
  Pigeon = new SearchService()

  Pigeon.get().subscribe(res => {
    debug('Pigeon get: ', res)
    // debug('washed: ', repoData(res.items))
    store.replaceRepos(repoData(res.items))
  })

  Pigeon.emptyInput().subscribe(() => {
    debug('Pigeon get emptyInput!')
    store.clearRepos()
  })
}
