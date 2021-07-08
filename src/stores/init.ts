/*
 * the entry of the App root store
 */

import { useMemo, useState, useEffect } from 'react'
import { applySnapshot } from 'mobx-state-tree'

import type { TRootStore, TAccountStore, TViewingStore } from '@/spec'
import RootStore from './RootStore'

let clientSideRootStore: TRootStore | undefined

const initRootStore = (snapshot = null): TRootStore => {
  // if (!snapshot) return clientSideRootStore
  const rootStore = RootStore.create(snapshot, {})

  if (snapshot) {
    applySnapshot(rootStore, snapshot)
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return rootStore
  // Create the store once in the client
  if (!clientSideRootStore) clientSideRootStore = rootStore

  return rootStore
}

// this is from next.js offical MST example
export const useStore = (initialState): TRootStore => {
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

/*
 * used in pure compoennt to access the MST sub-store
 * e.g:
 *
 * const account = useMST('account')
 * will get the account store in component
 */

export const useAccount = (): TAccountStore => {
  const [substore, setSubstore] = useState(useStore({}).account)
  useEffect(() => setSubstore(clientSideRootStore.account), [])

  return substore
}

export const useViewing = (): TViewingStore => {
  const [substore, setSubstore] = useState(useStore({}).viewing)
  useEffect(() => setSubstore(clientSideRootStore.viewing), [])

  return substore
}
