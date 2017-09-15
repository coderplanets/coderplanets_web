import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('L:Body')

let store = null

export function changeTheme(name) {
  debug('changeTheme', name)
  store.changeTheme(name)
}

export function init(selectStore) {
  store = selectStore
}
