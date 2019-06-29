import R from 'ramda'
import { useEffect } from 'react'

import { EVENT } from '@constant'
import { asyncSuit, buildLog, dispatchEvent } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:UserSettings')

const sr71$ = new SR71()
const { SR71, $solver } = asyncSuit

let sub$ = null
let store = null

export const changeTheme = theme => {
  store.changeTheme(theme)
  dispatchEvent(EVENT.SET_C11N, { data: { theme } })
}

export const c11nOnChange = R.curry((part, e) => {
  store.updateC11N({ [part]: e.target.value })
})

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
export const useInit = _store => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
