import R from 'ramda'

import SR71 from '../../utils/network/sr71'
import S from './schema'
import { asyncRes, makeDebugger, EVENT, TYPE } from '../../utils'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_POST, EVENT.PREVIEW_CLOSED],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleViwer')
/* eslint-enable no-unused-vars */

let articleViwer = null
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

function loading(maybe = true) {
  articleViwer.markState({
    postLoading: maybe,
  })
}

function queryPost(data) {
  const variables = {
    id: data.id,
    userHasLogin: false,
  }
  debug('--> queryPost make loading')
  loading()
  sr71$.query(S.post, variables)
}

function reloadReactions(data) {
  const variables = {
    id: data.id,
  }
  sr71$.query(S.reactionResult, variables)
}

const dataResolver = [
  {
    match: asyncRes(EVENT.PREVIEW_POST),
    action: res => {
      const info = res[EVENT.PREVIEW_POST]
      /* debug('EVENT.PREVIEW_POST: ', res[EVENT.PREVIEW_POST]) */
      if (info.type === TYPE.POST) {
        articleViwer.load(TYPE.POST, res[EVENT.PREVIEW_POST].data)
        loading()
        queryPost(info.data)
      }
    },
  },
  {
    match: asyncRes(TYPE.REACTION),
    action: res => {
      // TODO: should be trigger
      debug('reaction ', res)
      const info = res[TYPE.REACTION]
      debug('hello? queryPost', info)

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
      articleViwer.load(TYPE.POST, {})
      loading(false)
    },
  },
  {
    match: asyncRes(R.toLower(TYPE.POST)), // GraphQL return
    action: res => {
      articleViwer.load(TYPE.POST, res[R.toLower(TYPE.POST)])
      loading(false)
    },
  },
]

const handleData = res => {
  // TODO: handle Error
  if (res.error) {
    debug('handleData error ----> : ', res)
  }
  for (let i = 0; i < dataResolver.length; i += 1) {
    if (dataResolver[i].match(res)) {
      return dataResolver[i].action(res)
    }
  }
  debug('handleData unhandle: ', res)
}

export function init(selectedStore) {
  articleViwer = selectedStore
  debug(articleViwer)
  if (sub$) sub$.unsubscribe()

  sub$ = sr71$.data().subscribe(handleData)
}
