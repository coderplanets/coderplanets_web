// import R from 'ramda'

import { makeDebugger, $solver, dispatchEvent, EVENT } from '@utils'
import SR71 from '@utils/async/sr71'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserSettings')

let store = null

export const changeTheme = theme => {
  store.changeTheme(theme)
  dispatchEvent(EVENT.SET_C11N, { data: { theme } })
}

export const c11nOnChange = (part, e) =>
  store.updateC11N({ [part]: e.target.value })

export const upgradeHepler = () => store.upgradeHepler()
export const sponsorHepler = () => store.sponsorHepler()

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
