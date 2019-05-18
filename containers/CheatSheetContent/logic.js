import { useEffect } from 'react'
/* import R from 'ramda' */

import { makeDebugger, $solver } from '@utils'
import SR71 from '@utils/async/sr71'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const debug = makeDebugger('L:CheatSheetContent')

let store = null
let sub$ = null

export const someMethod = () => {}

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store

      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      debug('sub$: ', sub$)
      debug('store: ', store)
    },
    [_store]
  )
}
