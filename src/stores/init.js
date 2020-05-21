/*
 * the entry of the App store
 *
 */

// import { onAction } from 'mobx-state-tree'

import { applySnapshot } from 'mobx-state-tree'
import RootStore from './RootStore'

// let rootStore = null
let clientSideRootStore

const createRootStore = ({ ...restData }) => {
  return RootStore.create({ ...restData }, {})
}

function initRootStore(snapshot = null) {
  if (!snapshot && clientSideRootStore) return clientSideRootStore

  const rootStore = createRootStore(snapshot)

  if (snapshot) {
    applySnapshot(rootStore, snapshot)
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return rootStore
  // Create the store once in the client
  if (!clientSideRootStore) clientSideRootStore = rootStore

  // rootStore.mark({ ...restData })
  return rootStore
}

export default initRootStore
