import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('L:sidebar')

let sidebar = null

export function enterSidebar() {
  // debug('enterSidebar  <<: ', store.sidebar.menuItems.toJSON())
}

export function leaveSidebar() {
  // debug('leaveSidebar >>', store.sidebar.menuItems.toJSON())
  // store.sidebar.setMenuItems([])
}

export function markLoading() {
  /* debug('leaveSidebar >>', store.sidebar.menuItems.toJSON()) */
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
