/*
 * the entry of the App root store
 *
 */

import { useMemo } from 'react'
import { applySnapshot } from 'mobx-state-tree'

import type { TRootStore } from '@/spec'
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

  // rootStore.mark({ ...restData })
  return rootStore
}

export const useStore = (initialState = {}): TRootStore => {
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
// return type is the sub store of the TRootStore, how to do it in TS?
export const useMST = (substore: string) => {
  return useStore({})[substore]
}
