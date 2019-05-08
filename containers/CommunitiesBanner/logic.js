import {
  makeDebugger,
  asyncRes,
  $solver,
  dispatchEvent,
  updateEditing,
  EVENT,
} from '@utils'
import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:CommunitiesBanner')

let store = null

export const loadCategories = () =>
  sr71$.query(S.pagedCategories, { filter: {} })

export const searchChange = e => {
  updateEditing(store, 'searchValue', e)
  dispatchEvent(EVENT.REFRESH_COMMUNITIES, {
    type: 'search',
    data: e.target.value,
  })
}

export const tabOnChange = activeTab => {
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadIfNeed()
}
