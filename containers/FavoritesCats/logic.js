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

/* eslint-disable-next-line */
const debug = makeDebugger('L:FavoritesCats')

const sr71$ = new SR71({
  resv_event: [EVENT.SET_FAVORITE_CONTENT],
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
      dispatchEvent(EVENT.REFRESH_REACTIONS, { data: { id, thread } })
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
      dispatchEvent(EVENT.REFRESH_REACTIONS, { data: { id, thread } })
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
      debug('ERR.TIMEOUT -->', details)
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      markLoading(false)
    },
  },
]

const initStates = displayMode => {
  store.markState({ displayMode })
  return loadCategories()
}

export const init = (_store, displayMode) => {
  store = _store

  debug(store)
  if (sub$) return initStates(displayMode)
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  initStates(displayMode)
}

export const uninit = () => {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
