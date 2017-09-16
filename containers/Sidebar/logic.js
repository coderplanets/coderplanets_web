// import debounce from '../../utils/debounce'
import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('L:sidebar')

let sidebar = null

/*
export const enterSidebar2 = debounce(() => {
  debug('enterSidebar  <--<: ')
  sidebar.toggleOpen()
}, 200)

export const leaveSidebar2 = debounce(() => {
  debug('leaveSidebar  >-->: ')
  sidebar.toggleOpen()
}, 100)
*/

export function pin() {
  debug('pin: ', !sidebar.isPin)
  sidebar.markState('pin', !sidebar.isPin)
}

export function enterSidebar() {
  sidebar.markState('open', true)
}

export function leaveSidebar() {
  if (!sidebar.isPin) {
    sidebar.markState('open', false)
  }
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
