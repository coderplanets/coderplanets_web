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

export function markLoading() {
  /* sidebar.markLoading() */
  debug('markLoading')
  sidebar.markLoading()
}

export function addOne() {
  debug('addOne')
  sidebar.addOne()
}

export function changeTheme(name) {
  debug('changeTheme: ', name)
  sidebar.changeTheme(name)
}

export function init(sidebarStore) {
  sidebar = sidebarStore
}
