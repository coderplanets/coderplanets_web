import R from 'ramda'
import SR71 from '../../utils/network/sr71'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  closePreviewer,
  EVENT,
  ERR,
  TYPE,
  THREAD,
  ROUTE,
  $solver,
} from '../../utils'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED, EVENT.REFRESH_REACTIONS],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleViwer')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function onReaction(thread, action, userDid, { id }) {
  /* debug('onReaction thread: ', thread) */
  if (action === TYPE.FAVORITE) {
    // call favoriteSetter
    return dispatchEvent(EVENT.SET_FAVORITE_CONTENT, {
      data: { thread },
    })
  }
  // debug('onReaction userDid: ', store.isLogin)
  /* debug('onReaction id: ', id) */

  const args = { id, thread: R.toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export function gotoPostPage(data) {
  const { id } = data
  closePreviewer()
  store.markRoute({ mainPath: ROUTE.POST, subPath: id })
}

function loadPost({ id }) {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading()
  sr71$.query(S.post, variables)
}

function loadJob({ id }) {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  markLoading()
  debug('loadJob variables: ', variables)
  sr71$.query(S.job, variables)
}

function reloadReactions(id, thread) {
  switch (thread) {
    case THREAD.JOB: {
      return sr71$.query(S.jobReactionRes, { id })
    }
    default: {
      return sr71$.query(S.postReactionRes, { id })
    }
  }
}

export function onPin(thread) {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }
  debug('onPin: ', thread)
  debug('args ..', args)

  if (thread === THREAD.JOB) {
    sr71$.mutate(S.pinJob, args)
  } else {
    const { subPath: topic } = store.curRoute
    sr71$.mutate(S.pinPost, R.merge(args, { topic }))
  }
}

export function onUnDoPin(thread) {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  if (thread === THREAD.JOB) {
    sr71$.mutate(S.undoPinJob, args)
  } else {
    const { subPath: topic } = store.curRoute
    sr71$.mutate(S.undoPinPost, R.merge(args, { topic }))
  }
}

export function onEdit(thread) {
  /* debug('onEdit', store.viewingPost) */
  switch (thread) {
    case THREAD.POST: {
      return dispatchEvent(EVENT.PREVIEW_OPEN, {
        type: TYPE.PREVIEW_POST_EDIT,
        data: store.viewingData, // maybe need clone
      })
    }
    case THREAD.JOB: {
      return dispatchEvent(EVENT.PREVIEW_OPEN, {
        type: TYPE.PREVIEW_JOB_EDIT,
        data: store.viewingData, // maybe need clone
      })
    }
    default: {
      debug('unsupported thread')
    }
  }
}

export const callInformer = () => store.callInformer()

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

export const onListReactionUsers = (type, data) =>
  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })

export const onCommentCreate = () => {
  const { id } = store.viewingData
  if (store.activeThread === THREAD.POST) {
    return sr71$.query(S.postComment, { id })
  }
}

const openAttachment = att => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.PREVIEW_POST_VIEW) {
    debug('================= load post =====================')
    loadPost(att)

    store.markState({ type })
    store.setViewing({ post: att })
  }

  if (type === TYPE.PREVIEW_JOB_VIEW) {
    loadJob(att)
    store.markState({ type })
    store.setViewing({ job: att })
  }
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes(EVENT.REFRESH_REACTIONS),
    action: e => {
      const { id, thread } = e[EVENT.REFRESH_REACTIONS].data
      reloadReactions(id, thread)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      sr71$.stop()
      markLoading(false)
      // store.setViewing({ post: {} })
    },
  },
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: R.merge(store.viewingData, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes('pinPost'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_POSTS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('undoPinPost'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_POSTS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('pinJob'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_JOBS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('undoPinJob'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_JOBS)
      closePreviewer()
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
    match: asyncRes('reaction'),
    action: ({ reaction: { id } }) => reloadReactions(id, store.activeThread),
  },
  {
    match: asyncRes('undoReaction'),
    action: ({ undoReaction: { id } }) =>
      reloadReactions(id, store.activeThread),
  },
  {
    match: asyncRes('setTag'),
    action: () => {
      if (store.activeThread === THREAD.JOB) {
        loadJob(store.viewingData)
      } else {
        loadPost(store.viewingData)
      }
      // dispatchEvent(EVENT.REFRESH_POSTS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('unsetTag'),
    action: () => {
      if (store.activeThread === THREAD.JOB) {
        loadJob(store.viewingData)
      } else {
        loadPost(store.viewingData)
      }
      // dispatchEvent(EVENT.REFRESH_POSTS)
      closePreviewer()
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

export function init(_store, attachment) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}

export function uninit() {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
