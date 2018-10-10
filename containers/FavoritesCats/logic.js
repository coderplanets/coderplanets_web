import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:FavoritesCats')
/* eslint-enable no-unused-vars */

let store = null

export const categoryOnChange = R.curry((part, e) =>
  store.updateEditing({ [part]: e.target.value })
)

export function onCategoryCreate() {
  if (!store.validator('publish')) return false

  console.log('onCategoryCreate data: ', store.editCategoryData)
}

export function onCategoryUpdate() {
  debug('onCategoryUpdate data: ')
}

const listCategories = (page = 1) => {
  const userId = store.viewingUser.id

  sr71$.query(S.listFavoriteCategories, { userId, filter: { page, size: 20 } })
}

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

const DataSolver = [
  {
    match: asyncRes('listFavoriteCategories'),
    action: ({ listFavoriteCategories: pagedCategories }) => {
      debug('listFavoriteCateories: ', pagedCategories)

      // const curView = pagedUsers.totalCount === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
      store.markState({ pagedCategories })
      // store.closePreview()
      // dispatchEvent(EVENT.REFRESH_VIDEOS)
    },
  },
]
const ErrSolver = []

export function init(_store) {
  if (store) {
    return listCategories()
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  listCategories()
}
