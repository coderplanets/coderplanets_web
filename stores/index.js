/*
 * the entry of the App store
 *
 */

// import { getSnapshot, applySnapshot } from 'mobx-state-tree'

import AppStore from './AppStore'

let appStore = null

const createRootStore = (isServer, langSetup) => {
  return AppStore.create({ appLangs: langSetup })
}

export function initAppStore(isServer = false, langSetup) {
  if (appStore === null) {
    appStore = createRootStore(isServer, langSetup)
  }
  return appStore
}

export const other = false
// export default initAppStore

/*
if (module.hot) {
  if (module.hot.data && module.hot.data.appStore) {
    console.log('applySnapshot appStore: ', appStore)
    console.log('applySnapshot: ', module.hot.data.appStore)
    // applySnapshot(appStore, module.hot.data.appStore)
  }
  module.hot.dispose(data => {
    console.log('dispose: data: ', getSnapshot(appStore))
    data.appStore = getSnapshot(appStore)
  })
}
*/
