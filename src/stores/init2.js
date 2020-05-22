/*
 * the entry of the App root store
 *
 */

import { useMemo } from 'react'
import { applySnapshot } from 'mobx-state-tree'

import RootStore from './RootStore'

// let rootStore = null
let clientSideRootStore

const createRootStore = ({ ...restData }) => {
  return RootStore.create({ ...restData }, {})
}

export function initRootStore(snapshot = null) {
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

export function useStore(initialState) {
  // const store = useMemo(() => initializeStore(initialState), [initialState])
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

export default initRootStore
