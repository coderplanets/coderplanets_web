import SR71 from '../../utils/network/sr71'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  closePreviewer,
  EVENT,
  ERR,
  TYPE,
  ROUTE,
  $solver,
} from '../../utils'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_POST, EVENT.PREVIEW_CLOSED],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleViwer')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function onReaction(type, action, isUndo, data) {
  const args = {
    id: data.id,
    type,
    action,
  }
  return isUndo
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export function gotoPostPage(data) {
  debug('gotoPostPage data: ', data)
  const { id } = data
  closePreviewer()
  store.markRoute({ mainPath: ROUTE.POST, subPath: id })
}

function loading(maybe = true) {
  store.markState({ postLoading: maybe })
}

function queryPost(data) {
  const variables = {
    id: data.id,
    userHasLogin: false,
  }
  debug('--### > queryPost make loading')
  loading()
  sr71$.query(S.post, variables)
}

function reloadReactions(data) {
  const variables = {
    id: data.id,
  }
  sr71$.query(S.reactionResult, variables)
}

const DataSolver = [
  {
    match: asyncRes(EVENT.PREVIEW_POST),
    action: res => {
      const info = res[EVENT.PREVIEW_POST]
      /* debug('EVENT.PREVIEW_POST: ', res[EVENT.PREVIEW_POST]) */
      if (info.type === TYPE.POST) {
        queryPost(info.data)

        store.markState({ type: 'POST', post: info.data })
        /* articleViwer.load(TYPE.POST, res[EVENT.PREVIEW_POST].data) */
      }
    },
  },
  {
    match: asyncRes(TYPE.REACTION),
    action: res => {
      // TODO: should be trigger
      const info = res[TYPE.REACTION]
      reloadReactions(info)
    },
  },
  {
    match: asyncRes(TYPE.UNDO_REACTION),
    action: res => {
      debug('undoReaction ', res)
      const info = res[TYPE.UNDO_REACTION]
      reloadReactions(info)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      // TODO: test
      sr71$.stop()
      store.load(TYPE.POST, {})
      loading(false)
    },
  },
  {
    match: asyncRes('post'), // GraphQL return
    action: ({ post }) => {
      store.markState({ type: 'POST', post })
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

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
