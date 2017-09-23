import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('L:UniversePanel')

let store = null

export function otherLogic() {
  return 'otherLogic'
}

export function init(selectedStore) {
  debug('store', store)
  store = selectedStore
}
