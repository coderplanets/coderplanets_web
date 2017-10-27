import { makeDebugger } from '../../utils/functions'

const debug = makeDebugger('L:Preview')

let store = null

export function init(selectedStore) {
  store = selectedStore
}

export function closePreview() {
  debug('closePreview')
  store.close()
}
