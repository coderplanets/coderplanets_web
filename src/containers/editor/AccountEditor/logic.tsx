import { useEffect } from 'react'

import type { TEditValue } from '@/spec'
import { ERR } from '@/constant'
import { closeDrawer } from '@/utils/helper'

import { buildLog, asyncSuit, updateEditing, errRescue } from '@/utils'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:AccountEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store: TStore | undefined
let sub$ = null

export const inputOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const onUpdate = (): void => {
  if (!store.isReady) return

  console.log('onUpdate: ', store.editData)
  store.mark({ publishing: true })
  sr71$.mutate(S.updateProfile, store.editData)
}

const cancelLoading = () => store.mark({ publishing: false })

const loadUser = () => {
  const { viewingUser } = store
  sr71$.query(S.user, { login: viewingUser.login })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('updateProfile'),
    action: () => {
      store.updateAccount()
      store.mark({ publishing: false, publishDone: true })
      closeDrawer()
    },
  },
  {
    match: asyncRes('user'),
    action: ({ user }) => store.loadUser(user),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'AccountEditor' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadUser()

    return () => {
      // log('effect uninit')
      store.reset()
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
