/*
 * the entry of the App root store
 */

import { useMemo } from 'react'
import { applySnapshot } from 'mobx-state-tree'

import type { TRootStore } from '@/spec'

import RootStore from './RootStore'

let clientSideRootStore: TRootStore | undefined

const initRootStore = (snapshot = null): TRootStore => {
  const _store = clientSideRootStore ?? RootStore.create(snapshot, {})

  if (snapshot) {
    applySnapshot(_store, snapshot)
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!clientSideRootStore) clientSideRootStore = _store

  return clientSideRootStore
}

// this is from next.js offical MST example
export const useStore = (initialState = {}): TRootStore => {
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

export const holder = 1
