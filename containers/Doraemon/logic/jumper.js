import R from 'ramda'

import {
  Global,
  dispatchEvent,
  EVENT,
  TYPE,
  ROUTE,
  thread2Subpath,
  THREAD,
} from '@utils'

export const jumpToCommunity = (store, communityRaw) => {
  const { mainPath, subPath } = store.curRoute

  if (
    R.contains(mainPath, [ROUTE.USER, ROUTE.COMMUNITIES]) ||
    R.contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
  ) {
    Global.location.href = `/${communityRaw}/posts`
    return false
  }

  store.setViewing({
    community: { raw: communityRaw },
    activeThread: THREAD.POST,
    post: {},
  })

  store.markRoute({
    mainPath: communityRaw,
    subPath: thread2Subpath(THREAD.POST),
  })

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

export const jumpToContent = store => {
  const { id, title } = store.activeSuggestion
  const data = { id, title }
  let type = TYPE.PREVIEW_POST_VIEW // default as post
  let thread = THREAD.POST

  // jump to job
  if (R.startsWith('job-raw', store.activeSuggestion.raw)) {
    type = TYPE.PREVIEW_JOB_VIEW
    thread = THREAD.JOB
  }

  // jump to repo
  if (R.startsWith('repo-raw', store.activeSuggestion.raw)) {
    type = TYPE.PREVIEW_REPO_VIEW
    thread = THREAD.REPO
  }

  // jump to video
  if (R.startsWith('video-raw', store.activeSuggestion.raw)) {
    type = TYPE.PREVIEW_VIDEO_VIEW
    thread = THREAD.VIDEO
  }

  dispatchEvent(EVENT.PREVIEW_OPEN, { type, thread, data })
}

export const goToHelpPage = id => {
  Global.location.href = `/cps-support/post/${id}`
}
