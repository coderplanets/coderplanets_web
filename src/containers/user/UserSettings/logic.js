import { useEffect } from 'react'

import { EVENT } from '@/constant'
import { asyncSuit, buildLog, send } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('L:UserSettings')

const { SR71, $solver } = asyncSuit

const sr71$ = new SR71()
let sub$ = null
let store = null

export const changeTheme = (theme) => {
  store.changeTheme(theme)
  send(EVENT.SET_C11N, { data: { theme } })
}

export const c11nOnChange = (part, value) => {
  store.updateC11N({ [part]: value })
}

export const upgradeHepler = () => store.upgradeHepler()
export const sponsorHepler = () => store.sponsorHepler()

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
