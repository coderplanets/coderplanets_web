/*
 * the entry of the App root store
 */

import { useMemo } from 'react'
import { applySnapshot } from 'mobx-state-tree'
import { isEmpty } from 'ramda'

import type { TRootStore } from '@/spec'
import { log } from '@/utils/logger'

import RootStore from './RootStore'

let clientSideRootStore: TRootStore | undefined

const initRootStore = (snapshot = null): TRootStore => {
  log('- 111: ', snapshot)
  log('+ 111: ', clientSideRootStore)

  const _store = clientSideRootStore ?? RootStore.create(snapshot, {})

  log('- 222')
  if (snapshot) {
    applySnapshot(_store, snapshot)
  }

  log('- 444')
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  log('- 555')
  if (!clientSideRootStore) clientSideRootStore = _store

  return clientSideRootStore
}

const initRootStore2 = (snapshot = null): TRootStore => {
  log('- 111: ', snapshot)
  log('+ 111: ', clientSideRootStore)
  // if (!snapshot) return clientSideRootStore
  if (clientSideRootStore) return clientSideRootStore

  log('- 222')
  const rootStore = RootStore.create(snapshot, {})

  log('- 333')
  if (snapshot) {
    applySnapshot(rootStore, snapshot)
  }

  log('- 444')
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return rootStore
  // Create the store once in the client
  log('- 555')
  if (!clientSideRootStore) clientSideRootStore = rootStore

  return rootStore
}

// this is from next.js offical MST example
export const useStore = (initialState = {}): TRootStore => {
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

export const holder = 1
