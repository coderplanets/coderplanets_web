import { useEffect } from 'react'
/* import R from 'ramda' */

import { asyncSuit, buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:CheatSheetContent')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let store = null
let sub$ = null

export const someMethod = () => {}

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    log('sub$: ', sub$)
    log('store: ', store)
  }, [_store])
}
