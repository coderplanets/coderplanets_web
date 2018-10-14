import R from 'ramda'

import { PAGE_SIZE } from '../../config'
import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  EVENT,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.SET_FAVORITE_CONTENT],
})
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
  sr71$.mutate(S.createFavoriteCategory, { ...store.editCategoryData })
}

export function onCategoryUpdate() {
  if (!store.validator('publish')) return false
  sr71$.mutate(S.updateFavoriteCategory, { ...store.editCategoryData })
}

export const loadCategories = (page = 1) => {
  const userId = store.viewingUser.id

  sr71$.query(S.favoriteCategories, {
    userId,
    filter: { page, size: PAGE_SIZE.M },
  })
}

export const changeViewTo = view => {
  store.changeViewTo(view)
}
export const onSetterCreateCat = () => {
  store.markState({ createfromSetter: true })
  store.changeViewTo('creator')
}

export const onModalClose = () => {
  if (store.createfromSetter) {
    store.markState({ createfromSetter: false })
    return store.changeViewTo('setter')
  }

  store.markState({ showModal: false })
  store.cleanEditData()
}

export const setContent = categoryId => {
  const { id } = store.viewingData
  const { thread } = store

  const args = {
    id,
    thread: R.toUpper(thread),
    categoryId,
  }
  sr71$.mutate(S.setFavorites, args)
}

export const unSetContent = categoryId => {
  const { id } = store.viewingData
  const { thread } = store

  const args = {
    id,
    thread: R.toUpper(thread),
    categoryId,
  }
  sr71$.mutate(S.unsetFavorites, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('favoriteCategories'),
    action: ({ favoriteCategories: pagedCategories }) => {
      // const curView = pagedUsers.totalCount === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
      store.markState({ pagedCategories })
      // store.closePreview()
      // dispatchEvent(EVENT.REFRESH_VIDEOS)
    },
  },
  {
    match: asyncRes('createFavoriteCategory'),
    action: () => {
      // createfromSetter
      loadCategories()
      if (store.createfromSetter) {
        store.markState({ createfromSetter: false })
        return store.changeViewTo('setter')
      }
      return onModalClose()
    },
  },
  {
    match: asyncRes('updateFavoriteCategory'),
    action: () => {
      onModalClose()
      loadCategories()
    },
  },
  {
    match: asyncRes('setFavorites'),
    action: () => {
      loadCategories()
      /* store.updateCategory(cat) */
      const { id } = store.viewingData
      const { thread } = store
      dispatchEvent(EVENT.REFRESH_REACTIONS, { data: { id, thread } })
    },
  },
  {
    match: asyncRes('unsetFavorites'),
    action: () => {
      loadCategories()
      /* store.updateCategory(cat) */
      const { id } = store.viewingData
      const { thread } = store
      dispatchEvent(EVENT.REFRESH_REACTIONS, { data: { id, thread } })
    },
  },
  {
    match: asyncRes(EVENT.SET_FAVORITE_CONTENT),
    action: e => {
      const { thread } = e[EVENT.SET_FAVORITE_CONTENT].data
      store.changeViewTo('setter')
      store.markState({ thread, createfromSetter: true })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      store.changesetErr({ title: '已经存在了', msg: details[0].detail })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store, displayMode) {
  if (store) {
    store.markState({ displayMode })
    return loadCategories()
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  store.markState({ displayMode })
  loadCategories()
}
