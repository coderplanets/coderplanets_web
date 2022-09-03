import { useEffect } from 'react'
import { curry, toUpper } from 'ramda'

import type { TID } from '@/spec'
import { PAGE_SIZE } from '@/config'
import { EVENT, ERR } from '@/constant'

import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'
import { errRescue } from '@/utils/helper'
import { updateEditing } from '@/utils/mobx'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CollectionFolder')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  /* @ts-ignore */
  receive: [EVENT.SET_FAVORITE_CONTENT],
})

let sub$ = null
let store: TStore | undefined

// export const categoryOnChange = (part, e) => updateEditing(store, part, e)
export const categoryOnChange = curry(
  (part, e) => updateEditing(store, part, e),
  // store.updateEditing({ [part]: e.target.value })
)

export const privateOnChange = (item): void => {
  const { editCategoryData } = store

  const editCategory = {
    ...editCategoryData,
    private: item.key,
  }

  store.mark({ editCategory })
}

export const onCategoryCreate = (): void => {
  if (!store.validator('publish')) return

  sr71$.mutate(S.createFavoriteCategory, store.editCategoryData)
}

export const onCategoryUpdate = (): void => {
  if (!store.validator('publish')) return
  sr71$.mutate(S.updateFavoriteCategory, store.editCategoryData)
}

export const onCategoryDelete = (): void => {
  const { id } = store.editCategoryData
  sr71$.mutate(S.deleteFavoriteCategory, { id })
}

export const loadCategories = (page = 1): void => {
  const userId = store.viewingUser.id

  markLoading(true)
  sr71$.query(S.favoriteCategories, {
    userId,
    filter: { page, size: PAGE_SIZE.M },
  })
}

// export const switchToUpdater = (editCategory): void => {
export const switchToUpdater = (): void => {
  // store.mark({ editCategory })
  store.changeViewTo('updater')
}

/* eslint-disable-next-line */
export const changeViewTo = curry((view, e) => store.changeViewTo(view))

export const switchToCreator = (): void => {
  store.mark({ actionFromSetter: true })
  store.changeViewTo('creator')
}

export const switchToSetter = (): void => {
  store.changeViewTo('setter')
}

export const onModalClose = (): void => {
  if (store.actionFromSetter) {
    store.mark({ actionFromSetter: false })
    return switchToSetter()
  }

  store.mark({ showModal: false })
  store.cleanEditData()
}

export const setContent = (categoryId: TID): void => {
  if (store.doing) return

  const { id } = store.viewingArticle
  const { thread } = store

  const args = {
    id,
    thread: toUpper(thread),
    categoryId,
  }
  store.mark({ doing: true })
  sr71$.mutate(S.setFavorites, args)
}

export const unSetContent = (categoryId: TID): void => {
  if (store.doing) return

  const { id } = store.viewingArticle
  const { thread } = store

  const args = {
    id,
    thread: toUpper(thread),
    categoryId,
  }
  store.mark({ doing: true })
  sr71$.mutate(S.unsetFavorites, args)
}

const markLoading = (maybe = true) =>
  store.mark({ loading: maybe, doing: false })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('favoriteCategories'),
    action: ({ favoriteCategories: pagedCategories }) => {
      // const curView = pagedUsers.totalCount === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
      markLoading(false)
      store.mark({ pagedCategories })
      // store.closeDrawer()
    },
  },
  {
    match: asyncRes('createFavoriteCategory'),
    action: () => {
      // actionFromSetter
      loadCategories()
      if (store.actionFromSetter) {
        store.mark({ actionFromSetter: false })
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
      store.mark({ doing: false })
    },
  },
  {
    match: asyncRes('unsetFavorites'),
    action: () => {
      loadCategories()
      /* store.updateCategory(cat) */
      store.mark({ doing: false })
    },
  },
  {
    match: asyncRes(EVENT.SET_FAVORITE_CONTENT),
    action: (e) => {
      const { thread } = e[EVENT.SET_FAVORITE_CONTENT].data
      store.changeViewTo('setter')
      store.mark({ thread, actionFromSetter: true })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // store.changesetErr({ title: '已经存在了', msg: details[0].detail })
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'CollectionFolder' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'CollectionFolder' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore, isMobile: boolean): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    if (isMobile) {
      store.changeViewTo('setter')
    }

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, isMobile])
}
