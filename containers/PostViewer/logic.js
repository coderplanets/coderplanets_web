import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  closePreviewer,
  EVENT,
  ERR,
  TYPE,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:PostViewer')

export const onTagSelect = tagId => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.activeThread)

  sr71$.mutate(S.setTag, { thread, id, tagId, communityId })
}

export const onTagUnselect = tagId => {
  const { id } = store.viewingData
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.activeThread)

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

const openAttachment = att => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.PREVIEW_POST_VIEW) {
    loadPost(att)

    store.markState({ type })
    store.setViewing({ post: att })
  }
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: R.merge(store.viewingData, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      sr71$.stop()
      markLoading(false)
    },
  },
  {
    match: asyncRes('setTag'),
    action: () => {
      loadPost(store.viewingData)
      closePreviewer()
      store.setViewing({ post: {} })
    },
  },
  {
    match: asyncRes('unsetTag'),
    action: () => {
      loadPost(store.viewingData)
      closePreviewer()
      store.setViewing({ post: {} })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
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

export const init = (_store, attachment) => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export const uninit = () => {
  if (store.loading || !sub$) return false

  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
