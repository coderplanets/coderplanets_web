/*
 * the entry of the App store
 *
 */

// import { onAction } from 'mobx-state-tree'

import RootStore from './RootStore'

let rootStore = null

const createRootStore = (isServer, langSetup) => {
  return RootStore.create({ appLangs: langSetup })
}

function initRootStore(isServer = false, langSetup) {
  if (rootStore === null) {
    rootStore = createRootStore(isServer, langSetup)
  }

  /*
  onAction(rootStore, data => {
    console.log('onSnapshot: ', data)
  })
  */

  return rootStore
}

export default initRootStore

// not work, TODO
/*
if (module.hot) {
  if (module.hot.data && module.hot.data.rootStore) {
    // applySnapshot(module.hot.data.old, module.hot.data.rootStore)
  }
  module.hot.dispose(data => {
   // getSnapshot ...
  })
}
*/
