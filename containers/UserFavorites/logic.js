// import R from 'ramda'

import { PAGE_SIZE } from '../../config'

import { makeDebugger, $solver, asyncRes, TYPE } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UserFavorites')
/* eslint-enable no-unused-vars */

let store = null

export const backToCategoryList = () => {
  store.markState({ parentView: 'CATEGORY_LIST' })
}

export const onCatSelect = curCategory => {
  store.markState({ curCategory, parentView: 'CATEGORY_DETAIL' })
}

// fake, just for ui demo
export function loadFavorites() {
  const args = {
    filter: {
      page: 1,
      size: PAGE_SIZE.D,
      community: 'javascript',
    },
  }

  /* args.filter = validFilter(args.filter) */
  /* scrollIntoEle(TYPE.APP_HEADER_ID) */
  debug('loadFavorites --> ', args)
  sr71$.query(S.pagedPosts, args)
  /* store.markRoute({ page }) */
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedPosts'),
    action: ({ pagedPosts }) => {
      let curView = TYPE.RESULT
      if (pagedPosts.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedPosts })
    },
  },
]
const ErrSolver = []

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadFavorites()
}
