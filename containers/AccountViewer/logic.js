// import R from 'ramda'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountViewer')
/* eslint-enable no-unused-vars */

let accountViewer = null

export function changeTheme(name) {
  accountViewer.changeTheme(name)
}

export function init(selectedStore) {
  accountViewer = selectedStore
}
