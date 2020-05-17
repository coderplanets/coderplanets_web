/*
 * the entry of the App store
 *
 */

import { useMemo } from 'react'

import RootStore from './RootStore'

let rootStore = null
// let store

const createRootStore = ({ ...restData }) => {
  return RootStore.create({ ...restData }, {})
}

export function initRootStore({ ...restData }) {
  if (rootStore === null) {
    rootStore = createRootStore({ ...restData })
  }

  rootStore.mark({ ...restData })

  return rootStore
}

export function useStore(initialState) {
  // const store = useMemo(() => initializeStore(initialState), [initialState])
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

// export default initRootStore

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
