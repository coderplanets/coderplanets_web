/* import R from 'ramda' */

import { makeDebugger, $solver } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const debug = makeDebugger('L:CheatSheetContent')

let store = null
let sub$ = null

export const someMethod = () => {}

const DataSolver = []
const ErrSolver = []

export const init = _store => {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
