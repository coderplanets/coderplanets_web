// import R from 'ramda'

import {
  makeDebugger,
  asyncRes,
  asyncErr,
  $solver,
  dispatchEvent,
  TYPE,
  EVENT,
  ERR,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserContent')

let store = null

export const followUser = userId => {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.follow, { userId })
}

export const undoFollowUser = userId => {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.undoFollow, { userId })
}

export const showFollowings = user => {
  const type = TYPE.USER_LISTER_FOLLOWINGS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

export const showFollowers = user => {
  const type = TYPE.USER_LISTER_FOLLOWERS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

export const tabChange = activeThread => {
  store.markState({ activeThread })
  store.markRoute({ tab: activeThread })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('follow'),
    action: () => {
      debug('follow done ')
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
