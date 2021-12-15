import { useEffect } from 'react'

import { PAGE_SIZE } from '@/config'
import { TYPE, EVENT, ERR } from '@/constant'

import { errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:UserLister')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.USER_LISTER_OPEN],
})

let sub$ = null
let store: TStore | undefined

export const onFollow = (login: string): void =>
  sr71$.mutate(S.follow, { login })
export const undoFollow = (login: string): void =>
  sr71$.mutate(S.undoFollow, { login })

const loadUsers = (type, page = 1): void => {
  // log('loadUsers type: ', type)

  // TODO: use simple loading
  store.mark({ curView: TYPE.LOADING })
  switch (type) {
    // case TYPE.USER_LISTER_FAVORITES:
    // case TYPE.USER_LISTER_STARS: {
    //   const args = merge(
    //     { ...data },
    //     {
    //       thread: toUpper(data.thread),
    //       filter: { page, size: PAGE_SIZE.D },
    //       userHasLogin: store.isLogin,
    //     },
    //   )

    //   return sr71$.query(S.reactionUsers, args)
    // }
    // case TYPE.USER_LISTER_FOLLOWINGS: {
    //   const args = {
    //     userId: data.id,
    //     filter: { page, size: PAGE_SIZE.D },
    //     userHasLogin: store.isLogin,
    //   }
    //   return sr71$.query(S.pagedFollowings, args)
    // }
    // case TYPE.USER_LISTER_FOLLOWERS: {
    //   const args = {
    //     userId: data.id,
    //     filter: { page, size: PAGE_SIZE.D },
    //     userHasLogin: store.isLogin,
    //   }
    //   return sr71$.query(S.pagedFollowers, args)
    // }
    case TYPE.USER_LISTER_COMMUNITY_EDITORS: {
      const { id } = store.curCommunity
      const args = {
        id,
        filter: { page, size: PAGE_SIZE.D },
        userHasLogin: store.isLogin,
      }

      return sr71$.query(S.pagedCommunityEditors, args)
    }
    case TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS: {
      const { id } = store.curCommunity
      const args = {
        id,
        filter: { page, size: PAGE_SIZE.D },
        userHasLogin: store.isLogin,
      }

      return sr71$.query(S.pagedCommunitySubscribers, args)
    }
    default: {
      return sr71$.query(S.pagedUsers, {
        filter: { page, size: PAGE_SIZE.D },
      })
    }
  }
}

export const onPageChange = (page = 1): void => {
  const { type } = store
  loadUsers(type, page)
}

const handleUsersRes = (pagedUsers) => {
  const curView = pagedUsers.totalCount === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
  store.mark({ pagedUsers, curView })
}
// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
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
    match: asyncRes('pagedCommunityEditors'),
    action: ({ pagedCommunityEditors: pagedUsers }) =>
      handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('pagedCommunitySubscribers'),
    action: ({ pagedCommunitySubscribers: pagedUsers }) =>
      handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('pagedUsers'),
    action: ({ pagedUsers }) => handleUsersRes(pagedUsers),
  },
  {
    match: asyncRes('follow'),
    action: ({ follow: { login } }) => store.toggleHasFollow(login),
  },
  {
    match: asyncRes('undoFollow'),
    action: ({ undoFollow: { login } }) => store.toggleHasFollow(login),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      //
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserLister' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'UserLister' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore, type: string): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadUsers(type)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, type])
}
