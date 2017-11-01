// import debounce from '../../utils/debounce'
import { makeDebugger } from '../../utils/functions'

const debug = makeDebugger('L:sidebar')

let sidebar = null

export function windowBlur(windowBlured) {
  sidebar.markState({ windowBlured })
}

export function pin() {
  sidebar.markState({ pin: !sidebar.pin })
}

export function enterSidebar() {
  const { windowBlured } = sidebar
  if (!windowBlured) {
    sidebar.markState({ open: true })
  }
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
