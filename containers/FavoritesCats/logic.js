// import R from 'ramda'

import { makeDebugger, $solver } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:FavoritesCats')
/* eslint-enable no-unused-vars */

let store = null

export function onEdit() {
  store.markState({
    showModal: true,
    showUpdater: true,
    showCreator: false,
    showSetter: false,
    curView: 'list',
  })
}

export function onAdd() {
  store.markState({
    showModal: true,
    showUpdater: false,
    showCreator: true,
    showSetter: false,
    curView: 'list',
  })
}

export function onModalClose() {
  store.markState({
    showModal: false,
  })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
