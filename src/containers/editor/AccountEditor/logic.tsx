import { useEffect } from 'react'
import { curry, isEmpty, clone, omit, reject, equals, merge } from 'ramda'

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

export const inputOnChange = curry((part, e) => updateEditing(store, part, e))
/* eslint-disable no-unused-vars */
export const sexChange = curry((sex, e) => store.updateEditing({ sex }))

/* eslint-disable no-unused-vars */
export const socialOnChange = curry((part, e) => {
  const { editUserData: editUser } = store
  editUser.social[part] = e.target.value

  store.mark({ editUser })
})

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
    store.copyAccountInfo()

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
