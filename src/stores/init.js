/*
 * the entry of the App root store
 *
 */

import { useMemo } from 'react'
import { applySnapshot } from 'mobx-state-tree'

import RootStore from './RootStore'

let clientSideRootStore

const initRootStore = (snapshot = null) => {
  // if (!snapshot) return clientSideRootStore
  const rootStore = RootStore.create(snapshot, {})

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

export const useStore = (initialState) => {
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

export const holder = 1
