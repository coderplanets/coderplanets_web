import {
  makeDebugger,
  asyncRes,
  $solver,
  dispatchEvent,
  EVENT,
} from '../../utils'
import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunitiesBanner')
/* eslint-enable no-unused-vars */

let store = null

export function loadCategories() {
  sr71$.query(S.pagedCategories, { filter: {} })
}

export function tabOnChange(activeTab) {
  store.markRoute({ subPath: activeTab })
  store.markState({ activeTab })
  dispatchEvent(EVENT.REFRESH_COMMUNITIES, { data: activeTab })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedCategories'),
    action: ({ pagedCategories }) => store.markState({ pagedCategories }),
  },
]
const ErrSolver = []

const loadIfNeed = () => {
  if (!store.pagedCategoriesData) {
    loadCategories()
  }
}

export function init(_store) {
  if (store) return loadIfNeed()
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadIfNeed()
}
