import { useEffect } from 'react'
import { merge, toUpper } from 'ramda'

import { TYPE, EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, closeDrawer, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:PostViewer')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.DRAWER.CLOSE],
})

let sub$ = null
let store = null

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

export const onCommentCreate = () => {
  const { id } = store.viewingData
  return sr71$.query(S.postComment, { id })
}

const loadPost = ({ id }) => {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading()
  sr71$.query(S.post, variables)
}

const openAttachment = (att) => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.DRAWER.POST_VIEW) {
    loadPost(att)

    store.mark({ type })
    store.setViewing({ post: att })
  }
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: merge(store.viewingData, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes(EVENT.DRAWER.CLOSE),
    action: () => {
      sr71$.stop()
      markLoading(false)
    },
  },
  {
    match: asyncRes('setTag'),
    action: () => {
      loadPost(store.viewingData)
      closeDrawer()
      store.setViewing({ post: {} })
    },
  },
  {
    match: asyncRes('unsetTag'),
    action: () => {
      loadPost(store.viewingData)
      closeDrawer()
      store.setViewing({ post: {} })
    },
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostViewer' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'PostViewer' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    openAttachment(attachment)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
