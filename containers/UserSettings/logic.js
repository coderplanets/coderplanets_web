import R from 'ramda'
import { useEffect } from 'react'

import { buildLog, $solver, dispatchEvent, EVENT } from '@utils'
import SR71 from '@utils/async/sr71'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:UserSettings')

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
  useEffect(
    () => {
      store = _store
      // log('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
