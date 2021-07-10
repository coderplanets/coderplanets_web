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
export const useStore = (initialState = {}): TRootStore => {
  const store = useMemo(() => initRootStore(initialState), [initialState])
  return store
}

/*
 * used in pure compoennt to access the sub-store
 * NOTE: this is client-side hooks, not SSR, if you want exactly SSR render, consider use pluggedIn
 * 注意：这是客户端的 hooks, 在服务端渲染时只会得到空的 store, 如果你在使用的地方需要
 * SSR 渲染加持，那么请转为使用 pluggedIn, 这个 hooks 只适用于对 SSR 不敏感的地方
 *
 * 无法在 SSR 时获得 store 值的原因在于调用 useStore 初始化的时候无法获得本页面初始 state (initialState )
 * 导致每次都是创建一个新的 RootStore
 *
 * e.g:
 * const account = useAccount()
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
