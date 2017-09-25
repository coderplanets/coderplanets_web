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
  debug('pin: ', !sidebar.pin)
  sidebar.markState('pin', !sidebar.pin)
}

export function enterSidebar() {
  sidebar.markState('open', true)
}

export function leaveSidebar() {
  if (!sidebar.pin) {
    sidebar.markState('open', false)
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
