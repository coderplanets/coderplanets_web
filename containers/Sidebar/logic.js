// import debounce from '../../utils/debounce'
import { makeDebugger } from '../../utils/functions'

const debug = makeDebugger('L:sidebar')

let sidebar = null

export function pin() {
  debug('pin: ', !sidebar.pin)
  sidebar.markState({ pin: !sidebar.pin })
}

export function enterSidebar() {
  sidebar.markState({ open: true })
}

export function leaveSidebar() {
  if (!sidebar.pin) {
    sidebar.markState({ open: false })
  }
}

export function changeTheme(name) {
  debug('changeTheme: ', name)
  sidebar.changeTheme(name)
}

export function init(selectedStore) {
  sidebar = selectedStore
}
