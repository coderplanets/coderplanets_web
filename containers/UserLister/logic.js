import R from 'ramda'

import { PAGE_SIZE } from '../../config'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  holdPage,
  unholdPage,
  ERR,
  EVENT,
  TYPE,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.USER_LISTER_OPEN],
})

let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UserLister')
/* eslint-enable no-unused-vars */

let store = null

export function onClose() {
  store.markState({ show: false })
  unholdPage()
}

export function onFollow(userId) {
  debug('onFollow userId: ', userId)

  sr71$.mutate(S.follow, { userId })
}

export function undoFollow(userId) {
  sr71$.mutate(S.undoFollow, { userId })
}

const loadUsers = (type, data, page = 1) => {
  // debug('loadUsers type: ', type)

  store.markState({ curView: TYPE.LOADING })
  switch (type) {
    case TYPE.USER_LISTER_FAVORITES:
    case TYPE.USER_LISTER_STARS: {
      const args = R.merge(
        { ...data },
        {
          thread: R.toUpper(data.thread),
          filter: { page, size: PAGE_SIZE.D },
          userHasLogin: store.isLogin,
        }
      )

      return sr71$.query(S.reactionUsers, args)
    }
    case TYPE.USER_LISTER_FOLLOWINGS: {
      const args = {
        userId: data.id,
        filter: { page, size: PAGE_SIZE.D },
        userHasLogin: store.isLogin,
      }
      return sr71$.query(S.pagedFollowings, args)
    }
    case TYPE.USER_LISTER_FOLLOWERS: {
      const args = {
        userId: data.id,
        filter: { page, size: PAGE_SIZE.D },
        userHasLogin: store.isLogin,
      }
      return sr71$.query(S.pagedFollowers, args)
    }
    case TYPE.USER_LISTER_COMMUNITY_EDITORS: {
      const args = { ...data, filter: { page, size: PAGE_SIZE.D } }

      return sr71$.query(S.communityEditors, args)
    }
    default: {
      return sr71$.query(S.pagedUsers, {
        filter: { page, size: PAGE_SIZE.D },
      })
    }
  }
}

export const onPageChange = page => {
  const { type, id, action, thread } = store
  loadUsers(type, { id, action, thread }, page)
}

const handleUsersRes = pagedUsers => {
  const curView = pagedUsers.totalCount === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
  store.markState({ pagedUsers, curView })
}
// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes(EVENT.USER_LISTER_OPEN),
    action: res => {
      const { type, data } = res.USER_LISTER_OPEN
      store.markState({ show: true, type, ...data })
      loadUsers(type, data)
      holdPage()
    },
  },
  {
    match: asyncRes('reactionUsers'),
    action: ({ reactionUsers: pagedUsers }) => handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('pagedFollowings'),
    action: ({ pagedFollowings: pagedUsers }) => handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('pagedFollowers'),
    action: ({ pagedFollowers: pagedUsers }) => handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('communityEditors'),
    action: ({ communityEditors: pagedUsers }) => handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('pagedUsers'),
    action: ({ pagedUsers }) => handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('follow'),
    action: ({ follow: { id } }) => {
      /* debug('follow done: ', follow) */
      store.toggleHasFollow(id)
    },
  },
  {
    match: asyncRes('undoFollow'),
    action: ({ undoFollow: { id } }) => {
      /* debug('undoFollow done: ', undoFollow) */
      store.toggleHasFollow(id)
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
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

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
