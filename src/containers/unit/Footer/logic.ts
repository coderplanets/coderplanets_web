import { useEffect } from 'react'

import type { TMetric } from '@/spec'
import { EVENT } from '@/constant'

import asyncSuit from '@/utils/async'
import { send, Global, sessionChanged } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import S from './schema'

import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:Footer2')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.COMMUNITY_CHANGE_BEFORE,
    EVENT.AUTH_WARNING,
    EVENT.TOAST,
    EVENT.LOGOUT,
  ],
})

let sub$ = null
let store: TStore | undefined

export const toggleSponsorHelper = (): void =>
  store.mark({ showSponsor: !store.showSponsor })

export const onLogin = (): void => store.authWarning({ hideToast: true })
export const queryDoraemon = (data): void => send(EVENT.QUERY_DORAMON, { data })

// const getOnlineStatus = (): void => {
//   sr71$.query(S.onlineStatus, { freshkey: uid.gen() })

//   setInterval(() => {
//     sr71$.query(S.onlineStatus, { freshkey: uid.gen() })
//   }, 10000)
// }

export const checkSessionState = (): void => sr71$.query(S.sessionState, {})

// ###############################
// Data & Error handlers
// ###############################

const handleAuthWarning = (option): void => store.authWarning(option)

const handleToast = (data): void => {
  const { type, ...rest } = data
  store.toast(type, rest)
}

export const handleLogout = (): void => {
  store.logout()

  setTimeout(() => {
    Global.location.reload()
  }, 1000)
}

const DataSolver = [
  {
    match: asyncRes('sessionState'),
    action: ({ sessionState: state }) => {
      store.updateSession(state)
      sessionChanged(state.user)
      // if (state.isValid !== store.accountInfo.isValidSession) {
      //   sessionChanged(state)
      // }
    },
  },
  {
    match: asyncRes('onlineStatus'),
    action: ({ onlineStatus }): void => {
      const { realtimeVisitors } = onlineStatus
      store.mark({ realtimeVisitors })
    },
  },
  {
    match: asyncRes(EVENT.AUTH_WARNING),
    action: (data): void => {
      const opt = data[EVENT.AUTH_WARNING]
      handleAuthWarning(opt)
    },
  },
  {
    match: asyncRes(EVENT.TOAST),
    action: (data): void => {
      const opt = data[EVENT.TOAST]
      handleToast(opt)
    },
  },
  {
    match: asyncRes(EVENT.LOGOUT),
    action: (): void => handleLogout(),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE_BEFORE),
    action: (data): void => {
      const { path } = data[EVENT.COMMUNITY_CHANGE_BEFORE]
      store.changeCommunity(path)
      send(EVENT.COMMUNITY_CHANGE)
    },
  },
]
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore, metric: TMetric): void => {
  useEffect(() => {
    store = _store
    store.mark({ metric })
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    // getOnlineStatus()
    checkSessionState()

    return () => {
      if (!sub$) return
      sub$.unsubscribe()
    }
  }, [_store, metric])
}
