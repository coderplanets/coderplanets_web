import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncErr,
  asyncRes,
  dispatchEvent,
  closePreviewer,
  ERR,
  TYPE,
  EVENT,
  THREAD,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleBodyHeader')
/* eslint-enable no-unused-vars */

let store = null

export const onEdit = thread => {
  switch (thread) {
    case THREAD.JOB: {
      return dispatchEvent(EVENT.PREVIEW_OPEN, {
        type: TYPE.PREVIEW_JOB_EDIT,
        data: store.viewingData,
      })
    }
    default: {
      return dispatchEvent(EVENT.PREVIEW_OPEN, {
        type: TYPE.PREVIEW_POST_EDIT,
        data: store.viewingData,
      })
    }
  }
}

export const onPin = thread => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  switch (thread) {
    case THREAD.JOB: {
      return sr71$.mutate(S.pinJob, args)
    }
    default: {
      const { subPath: topic } = store.curRoute
      return sr71$.mutate(S.pinPost, R.merge(args, { topic }))
    }
  }
}

export const onUndoPin = thread => {
  const args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
  }

  switch (thread) {
    case THREAD.JOB: {
      return sr71$.mutate(S.undoPinJob, args)
    }
    default: {
      const { subPath: topic } = store.curRoute
      return sr71$.mutate(S.undoPinPost, R.merge(args, { topic }))
    }
  }
}

export const onDelete = () => {
  const { id } = store.viewingData
  debug('onDelete', id)

  switch (store.activeThread) {
    case THREAD.JOB: {
      return sr71$.mutate(S.deleteJob, { id })
    }
    default: {
      return sr71$.mutate(S.deletePost, { id })
    }
  }
}

export const onInform = () => store.callInformer()

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  // post
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
    match: asyncRes('deletePost'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_POSTS)
      closePreviewer()
    },
  },
  // job
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
    match: asyncRes('deleteJob'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_JOBS)
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

export function init(_store) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  // if (store.curView === TYPE.LOADING) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
