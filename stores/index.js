/*
 * the entry of the App store
 *
 */

import AppStore from './AppStore'

let appStore = null

const createRootStore = isServer => {
  return AppStore.create(
    {},
    {
      isServer,
    }
  )
}

export function initAppStore(isServer = false) {
  let ret

  if (isServer) {
    if (appStore === null) {
      ret = createRootStore(isServer)
    } else {
      ret = appStore
    }
  } else {
    if (appStore === null) {
      appStore = createRootStore(isServer)
    }
    ret = appStore
  }
  return ret
}

export function getStoreInstance() {
  return appStore
}

// export default initAppStore
