// import R from 'ramda'

import { makeDebugger, $solver, dispatchEvent, EVENT, TYPE } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountEditor')
/* eslint-enable no-unused-vars */

let accountEditor = null

export function goBack() {
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT_VIEW,
  })
}

export function cancleEdit() {
  dispatchEvent(EVENT.PREVIEW_CLOSE)
}

const DataSolver = []
const ErrSolver = []

export function init(selectedStore) {
  accountEditor = selectedStore
  accountEditor.copyAccountInfo()
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
