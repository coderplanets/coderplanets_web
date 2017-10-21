import { makeDebugger } from '../../utils/functions'

const debug = makeDebugger('L:Drawer')

let store = null

export function init(selectedStore) {
  store = selectedStore
}

export function closeDrawer() {
  debug('closeDrawer')
  store.close()
}
