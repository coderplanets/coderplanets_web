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

/* eslint-disable-next-line */
const debug = makeDebugger('L:ArticleBodyHeader')

let store = null

export const onEdit = thread => {
  let type = TYPE.PREVIEW_POST_EDIT
  const data = store.viewingData

  switch (thread) {
    case THREAD.JOB: {
      type = TYPE.PREVIEW_JOB_EDIT
      return dispatchEvent(EVENT.PREVIEW_OPEN, { type, data })
    }
    case THREAD.VIDEO: {
      type = TYPE.PREVIEW_VIDEO_EDIT
      return dispatchEvent(EVENT.PREVIEW_OPEN, { type, data })
    }
    case THREAD.REPO: {
      type = TYPE.PREVIEW_REPO_EDIT
      return dispatchEvent(EVENT.PREVIEW_OPEN, { type, data })
    }
    default: {
      return dispatchEvent(EVENT.PREVIEW_OPEN, { type, data })
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
    case THREAD.VIDEO: {
      return sr71$.mutate(S.pinVideo, args)
    }
    case THREAD.REPO: {
      return sr71$.mutate(S.pinRepo, args)
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
    case THREAD.VIDEO: {
      return sr71$.mutate(S.undoPinVideo, args)
    }
    case THREAD.REPO: {
      return sr71$.mutate(S.undoPinRepo, args)
    }
    default: {
      const { subPath: topic } = store.curRoute
      return sr71$.mutate(S.undoPinPost, R.merge(args, { topic }))
    }
  }
}

const getRefinedArgs = thread => {
  let args = {
    id: store.viewingData.id,
    communityId: store.curCommunity.id,
    thread: R.toUpper(thread),
  }

  if (thread === THREAD.POST) {
    const { subPath: topic } = store.curRoute
    args = R.merge(args, { topic })
  }

  return args
}

export const onSetRefined = thread =>
  sr71$.mutate(S.setRefinedTag, getRefinedArgs(thread))

export const onUnsetRefined = thread =>
  sr71$.mutate(S.unsetRefinedTag, getRefinedArgs(thread))

export const onDelete = () => {
  const { id } = store.viewingData
  debug('onDelete', id)

  switch (store.activeThread) {
    case THREAD.JOB: {
      return sr71$.mutate(S.deleteJob, { id })
    }
    case THREAD.VIDEO: {
      return sr71$.mutate(S.deleteVideo, { id })
    }
    case THREAD.REPO: {
      return sr71$.mutate(S.deleteRepo, { id })
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
  // video
  {
    match: asyncRes('pinVideo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('undoPinVideo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('deleteVideo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_VIDEOS)
      closePreviewer()
    },
  },
  // repo
  {
    match: asyncRes('pinRepo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_REPOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('undoPinRepo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_REPOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('deleteRepo'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_REPOS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('setRefinedTag'),
    action: () => {
      dispatchEvent(EVENT.REFRESH_POSTS)
      closePreviewer()
    },
  },
  {
    match: asyncRes('unsetRefinedTag'),
    action: () => {
      let REFRESH_EVENT
      if (store.activeThread === THREAD.POST) {
        REFRESH_EVENT = EVENT.REFRESH_POSTS
      } else if (store.activeThread === THREAD.JOB) {
        REFRESH_EVENT = EVENT.REFRESH_JOBS
      } else if (store.activeThread === THREAD.VIDEO) {
        REFRESH_EVENT = EVENT.REFRESH_VIDEOS
      } else if (store.activeThread === THREAD.REPO) {
        REFRESH_EVENT = EVENT.REFRESH_REPOS
      }

      dispatchEvent(REFRESH_EVENT)
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
