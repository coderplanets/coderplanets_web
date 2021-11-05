import { useEffect } from 'react'
import { isEmpty, clone, omit, reject } from 'ramda'

import type { TEditValue } from '@/spec'
import { EVENT, ERR } from '@/constant'
import {
  buildLog,
  asyncSuit,
  send,
  cast,
  meteorState,
  updateEditing,
  errRescue,
  nilOrEmpty,
} from '@/utils'

import type { TStore } from './store'
import { S, updateFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:AccountEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store = null
let sub$ = null

export const inputOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const updateConfirm = (): void => {
  if (!store.statusClean) return
  let profile = cast(updateFields, store.editUserData)

  const social = reject(nilOrEmpty, clone(profile.social))

  profile = omit(['social'], profile)

  const args = { profile }

  // @ts-ignore
  if (!isEmpty(social)) args.social = social

  store.mark({ updating: true })
  log('args: ', args)
  sr71$.mutate(S.updateProfile, args)
}

export const cancelEdit = (): void => send(EVENT.DRAWER.CLOSE)

export const updateDone = (): void => {
  const editing = cast(updateFields, store.editUserData)
  store.updateAccount(editing)
}

export const toggleSocials = (): void =>
  store.mark({ showSocials: !store.showSocials })

const cancelLoading = () => store.mark({ updating: false })

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
      meteorState(store, 'success', 3)
      updateDone()
      cancelLoading()
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
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
