// import debounce from '../../utils/debounce'
// import { makeDebugger } from '../../utils'

// const debug = makeDebugger('L:sidebar')

let sidebar = null

export function pin() {
  sidebar.markState({ pin: !sidebar.pin })
}

export function init(selectedStore) {
  sidebar = selectedStore
}
