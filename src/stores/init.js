/*
 * the entry of the App store
 *
 */

// import { onAction } from 'mobx-state-tree'

import RootStore from './RootStore'

let rootStore = null

const createRootStore = ({ ...restData }) => {
  return RootStore.create({ ...restData }, {})
}

function initRootStore({ ...restData }) {
  if (rootStore === null) {
    rootStore = createRootStore({ ...restData })
  }

  rootStore.mark({ ...restData })

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
