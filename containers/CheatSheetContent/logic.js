import { useEffect } from 'react'
/* import R from 'ramda' */

import { makelogger, $solver } from '@utils'
import SR71 from '@utils/async/sr71'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const log = makelogger('L:CheatSheetContent')

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
      log('sub$: ', sub$)
      log('store: ', store)
    },
    [_store]
  )
}
