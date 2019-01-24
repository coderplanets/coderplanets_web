import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  dispatchEvent,
  ERR,
  TYPE,
  EVENT,
  THREAD,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

/* eslint-disable-next-line */
const debug = makeDebugger('L:ArticleViewerHeader')

// EVENT.REFRESH_REACTIONS handles FAVORITE action when
// user set it from FavoriteSetter
const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_REACTIONS],
})

let sub$ = null
let store = null

export const onReaction = (action, userDid, { id }) => {
  if (!store.isLogin) return store.authWarning()
  if (store.loading) return false

  const thread = store.activeThread

  store.markState({ action })
  /* debug('onReaction thread: ', thread) */
  if (action === TYPE.FAVORITE) {
    // call favoriteSetter
    return dispatchEvent(EVENT.SET_FAVORITE_CONTENT, {
      data: { thread },
    })
  }

  markLoading(true)
  const args = { id, thread: R.toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export const onListReactionUsers = (type, data) =>
  dispatchEvent(EVENT.USER_LISTER_OPEN, {
    type,
    data: { ...data, thread: store.activeThread },
  })

const afterReaction = id => {
  const thread = store.activeThread
  switch (thread) {
    case THREAD.JOB:
      return sr71$.query(S.job, { id })

    case THREAD.VIDEO:
      return sr71$.query(S.video, { id })

    case THREAD.REPO:
      return sr71$.query(S.repo, { id })

    default:
      return sr71$.query(S.post, { id })
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
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: R.merge(store.viewingData, job) })
      store.syncViewingItem(job)
      markLoading(false)
    },
  },
  {
    match: asyncRes('video'),
    action: ({ video }) => {
      markLoading(false)
      store.setViewing({ video: R.merge(store.viewingData, video) })
      // store.syncViewingItem(video)
    },
  },
  {
    match: asyncRes('repo'),
    action: ({ repo }) => {
      store.setViewing({ repo: R.merge(store.viewingData, repo) })
      store.syncViewingItem(repo)
      markLoading(false)
    },
  },
  {
    match: asyncRes('reaction'),
    action: ({ reaction: { id } }) => afterReaction(id),
  },
  {
    match: asyncRes('undoReaction'),
    action: ({ undoReaction: { id } }) => afterReaction(id),
  },
  {
    match: asyncRes(EVENT.REFRESH_REACTIONS),
    action: e => {
      markLoading(true)
      const { id } = e[EVENT.REFRESH_REACTIONS].data
      afterReaction(id)
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'ArticleViewerHeader' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'ArticleViewerHeader' })
    },
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (!sub$ || store.loading) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
