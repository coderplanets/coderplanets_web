import { contains, startsWith } from 'ramda'

import { EVENT, TYPE, ROUTE, THREAD } from '@/constant'

import { thread2URLpath } from '@/utils/route'
import { Global, send } from '@/utils/helper'

export const jumpToCommunity = (store, communityRaw) => {
  const { mainPath, subPath } = store.curRoute

  if (
    contains(mainPath, [ROUTE.USER, ROUTE.EXPLORE]) ||
    contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.REPO])
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
    subPath: thread2URLpath(THREAD.POST),
  })

  send(EVENT.COMMUNITY_CHANGE)
}

export const jumpToContent = (store) => {
  const { id, title } = store.activeSuggestion
  const data = { id, title }
  let type = TYPE.DRAWER.POST_VIEW // default as post
  let thread = THREAD.POST

  // jump to job
  if (startsWith('job-raw', store.activeSuggestion.raw)) {
    type = TYPE.DRAWER.JOB_VIEW
    thread = THREAD.JOB
  }

  // jump to repo
  if (startsWith('repo-raw', store.activeSuggestion.raw)) {
    type = TYPE.DRAWER.REPO_VIEW
    thread = THREAD.REPO
  }

  send(EVENT.DRAWER.OPEN, { type, thread, data })
}

export const goToHelpPage = (id) => {
  Global.location.href = `/cps-support/post/${id}`
}
