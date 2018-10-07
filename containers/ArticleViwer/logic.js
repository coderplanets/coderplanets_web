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
  resv_event: [EVENT.PREVIEW_CLOSED],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleViwer')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function onReaction(thread, action, userDid, { id }) {
  /* debug('onReaction thread: ', thread) */
  /* debug('onReaction action: ', action) */
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

function loading(maybe = true) {
  store.markState({ postLoading: maybe })
}

function loadPost({ id }) {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  loading()
  sr71$.query(S.post, variables)
}

function loadJob({ id }) {
  const userHasLogin = store.isLogin
  const variables = { id, userHasLogin }
  loading()
  debug('loadJob variables: ', variables)
  sr71$.query(S.job, variables)
}

function reloadReactions({ id }) {
  switch (store.activeThread) {
    case THREAD.JOB: {
      return sr71$.query(S.jobReactionRes, { id })
    }
    default: {
      return sr71$.query(S.postReactionRes, { id })
    }
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

const openAttachment = att => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.PREVIEW_POST_VIEW) {
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

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('reaction'),
    action: ({ reaction }) => {
      debug('get reaction: ', reaction)
      return reloadReactions(reaction)
    },
  },
  {
    match: asyncRes('undoReaction'),
    action: ({ undoReaction }) => reloadReactions(undoReaction),
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      sr71$.stop()
      loading(false)
    },
  },
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: R.merge(store.viewingData, post) })
      loading(false)
    },
  },
  {
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: R.merge(store.viewingData, job) })
      loading(false)
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
  if (store) {
    return openAttachment(attachment)
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  openAttachment(attachment)
}
