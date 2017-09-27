/*
 * the entry of the App store
 *
 */

// import { onAction } from 'mobx-state-tree'

import AppStore from './AppStore'

// export const appStore =

let appStore = null

const createRootStore = (isServer, langSetup) => {
  return AppStore.create({ appLangs: langSetup })
}

function initAppStore(isServer = false, langSetup) {
  if (appStore === null) {
    appStore = createRootStore(isServer, langSetup)
  }

  /*
  onAction(appStore, data => {
    console.log('onSnapshot: ', data)
  })
  */

  return appStore
}

export default initAppStore
// not work, TODO
/*
if (module.hot) {
  if (module.hot.data && module.hot.data.appStore) {
    // applySnapshot(module.hot.data.old, module.hot.data.appStore)
  }
  module.hot.dispose(data => {
   // getSnapshot ...
  })
}
*/
