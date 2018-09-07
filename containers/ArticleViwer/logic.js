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
  const args = { id, thread, action }

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

function reloadReactions(article) {
  const variables = {
    id: article.id,
  }
  debug('reloadReactions: ', variables)

  sr71$.query(S.reactionResult, variables)
}

export function onEdit() {
  debug('onEdit', store.viewingPost)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_POST_EDIT,
    data: store.viewingPost, // maybe need clone
  })
}

const openAttachment = att => {
  if (!att) return false

  const { type } = att

  if (type === TYPE.POST) {
    loadPost(att)

    store.markState({ type })
    store.setViewing({ post: att })
  }
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('reaction'),
    action: ({ reaction }) => {
      // TODO: should be trigger
      debug('get reaction: ', reaction)
      reloadReactions(reaction)
    },
  },
  {
    match: asyncRes('undoReaction'),
    action: ({ undoReaction }) => {
      debug('get undoReaction: ', undoReaction)
      /* const info = res[TYPE.UNDO_REACTION] */
      reloadReactions(undoReaction)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      sr71$.stop()
      store.load(TYPE.POST, {})
      loading(false)
    },
  },
  {
    match: asyncRes('post'), // GraphQL return
    action: ({ post }) => {
      store.setViewing({ post })
      store.markState({ type: TYPE.POST })
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
