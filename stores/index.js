/*
 * the entry of the App store
 *
 */

import AppStore from './AppStore'

let appStore = null

const createRootStore = (isServer, langSetup) => {
  console.log('before create: ', langSetup)
  return AppStore.create({ appLangs: langSetup })
}

export function initAppStore(isServer = false, langSetup) {
  let ret

  if (isServer) {
    if (appStore === null) {
      ret = createRootStore(isServer, langSetup)
    } else {
      ret = appStore
    }
  } else {
    if (appStore === null) {
      appStore = createRootStore(isServer, langSetup)
    }
    ret = appStore
  }
  return ret
}

export function getStoreInstance() {
  return appStore
}

// export default initAppStore
