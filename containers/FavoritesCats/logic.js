import R from 'ramda'
import { useEffect } from 'react'

import { PAGE_SIZE } from '@config'
import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, send, errRescue } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:FavoritesCats')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.SET_FAVORITE_CONTENT],
})

let sub$ = null
let store = null

export const categoryOnChange = R.curry((part, e) =>
  store.updateEditing({ [part]: e.target.value })
)

export const onCategoryCreate = () => {
  if (!store.validator('publish')) return false

  sr71$.mutate(S.createFavoriteCategory, store.editCategoryData)
}

export const onCategoryUpdate = () => {
  if (!store.validator('publish')) return false
  sr71$.mutate(S.updateFavoriteCategory, store.editCategoryData)
}

export const onCategoryDelete = () => {
  const { id } = store.editCategoryData
  sr71$.mutate(S.deleteFavoriteCategory, { id })
}

export const loadCategories = (page = 1) => {
  const userId = store.viewingUser.id

  markLoading(true)
  sr71$.query(S.favoriteCategories, {
    userId,
    filter: { page, size: PAGE_SIZE.M },
  })
}

export const switchToUpdater = editCategory => {
  store.markState({ editCategory })
  store.changeViewTo('updater')
}

/* eslint-disable-next-line */
export const changeViewTo = R.curry((view, e) => store.changeViewTo(view))

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
  if (store.doing) return false

  const { id } = store.viewingData
  const { thread } = store

  const args = {
    id,
    thread: R.toUpper(thread),
    categoryId,
  }
  store.markState({ doing: true })
  sr71$.mutate(S.setFavorites, args)
}

export const unSetContent = categoryId => {
  if (store.doing) return false

  const { id } = store.viewingData
  const { thread } = store

  const args = {
    id,
    thread: R.toUpper(thread),
    categoryId,
  }
  store.markState({ doing: true })
  sr71$.mutate(S.unsetFavorites, args)
}

const markLoading = (maybe = true) =>
  store.markState({ loading: maybe, doing: false })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('favoriteCategories'),
    action: ({ favoriteCategories: pagedCategories }) => {
      // const curView = pagedUsers.totalCount === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
      markLoading(false)
      store.markState({ pagedCategories })
      // store.closePreview()
      // send(EVENT.REFRESH_VIDEOS)
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
    match: asyncRes('deleteFavoriteCategory'),
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
      send(EVENT.REFRESH_REACTIONS, { data: { id, thread } })
      store.markState({ doing: false })
    },
  },
  {
    match: asyncRes('unsetFavorites'),
    action: () => {
      loadCategories()
      /* store.updateCategory(cat) */
      const { id } = store.viewingData
      const { thread } = store
      send(EVENT.REFRESH_REACTIONS, { data: { id, thread } })
      store.markState({ doing: false })
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
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      store.changesetErr({ title: '已经存在了', msg: details[0].detail })
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'FavoritesCats' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'FavoritesCats' })
    },
  },
]

const initStates = displayMode => {
  store.markState({ displayMode })
  return loadCategories()
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, displayMode) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    initStates(displayMode)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, displayMode])
}
