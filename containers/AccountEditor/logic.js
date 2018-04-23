// import R from 'ramda'

import { makeDebugger, $solver } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountEditor')
/* eslint-enable no-unused-vars */

let accountEditor = null

export function someMethod() {}

const DataSolver = []
const ErrSolver = []

export function init(selectedStore) {
  accountEditor = selectedStore
  debug(accountEditor)
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
