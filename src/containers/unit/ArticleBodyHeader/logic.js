import { useEffect } from 'react'
import { toUpper, merge } from 'ramda'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import { asyncSuit, buildLog, send, closeDrawer, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticleBodyHeader')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const onEdit = (thread) => {
  const data = store.viewingData
  let type

  switch (thread) {
    case THREAD.JOB:
      type = TYPE.DRAWER.JOB_EDIT
      break

    case THREAD.REPO:
      return send(EVENT.SYNC_REPO)

    default: {
      type = TYPE.DRAWER.POST_EDIT
    }
  }

  send(EVENT.DRAWER.OPEN, { type, data })
}

export const onCommunitySet = () => send(EVENT.COMMUNITY_MIRROR)

export const onPin = (thread) => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  switch (thread) {
    case THREAD.JOB:
      return sr71$.mutate(S.pinJob, args)

    case THREAD.REPO:
      return sr71$.mutate(S.pinRepo, args)

    default: {
      return sr71$.mutate(S.pinPost, args)
    }
  }
}

export const onUndoPin = (thread) => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  switch (thread) {
    case THREAD.JOB:
      return sr71$.mutate(S.undoPinJob, args)

    case THREAD.REPO:
      return sr71$.mutate(S.undoPinRepo, args)

    default: {
      return sr71$.mutate(S.undoPinPost, args)
    }
  }
}

const getRefinedArgs = (thread) => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
    thread: toUpper(thread),
  }

  return args
}

export const onSetRefined = (thread) =>
  sr71$.mutate(S.setRefinedTag, getRefinedArgs(thread))

export const onUnsetRefined = (thread) =>
  sr71$.mutate(S.unsetRefinedTag, getRefinedArgs(thread))

export const onDelete = () => {
  const { id } = store.viewingData
  log('onDelete', id)

  switch (store.activeThread) {
    case THREAD.JOB:
      return sr71$.mutate(S.deleteJob, { id })

    case THREAD.REPO:
      return sr71$.mutate(S.deleteRepo, { id })

    default:
      return sr71$.mutate(S.deletePost, { id })
  }
}

export const onTagSelect = (tagId) => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = toUpper(store.activeThread)

  sr71$.mutate(S.setTag, { thread, id, tagId, communityId })
}

export const onTagUnselect = (tagId) => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = toUpper(store.activeThread)

  sr71$.mutate(S.unsetTag, { thread, id, tagId, communityId })
}

const backToParentThread = () => {
  let REFRESH_EVENT
  if (store.activeThread === THREAD.POST) {
    REFRESH_EVENT = EVENT.REFRESH_POSTS
  } else if (store.activeThread === THREAD.JOB) {
    REFRESH_EVENT = EVENT.REFRESH_JOBS
  } else if (store.activeThread === THREAD.REPO) {
    REFRESH_EVENT = EVENT.REFRESH_REPOS
  }

  send(REFRESH_EVENT)
  closeDrawer()
  store.setViewing({ post: {}, job: {}, repo: {} })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  // post
  {
    match: asyncRes('pinPost'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('undoPinPost'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('deletePost'),
    action: () => backToParentThread(),
  },
  // job
  {
    match: asyncRes('pinJob'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('undoPinJob'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('deleteJob'),
    action: () => backToParentThread(),
  },
  // repo
  {
    match: asyncRes('pinRepo'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('undoPinRepo'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('deleteRepo'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('setRefinedTag'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('unsetRefinedTag'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('setTag'),
    action: () => backToParentThread(),
  },
  {
    match: asyncRes('unsetTag'),
    action: () => backToParentThread(),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'ArticleBodyHeader' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'ArticleBodyHeader' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
