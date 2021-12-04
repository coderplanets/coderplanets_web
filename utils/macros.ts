// those are not REAL macros, but some shared GraphQL response hanlder snippets
// NOTE: for consistency, function name shoud start with "match"

import type { TThread } from '@/spec'
import { map, values, flatten } from 'ramda'

import { ARTICLE_THREAD } from '@/constant'
import { titleCase, plural } from './helper'
import asyncSuite from './async'

const { asyncRes } = asyncSuite

/**
 * handle general paged articles GQ response
 */
export const matchPagedArticles = (threads: TThread[], callback) => {
  return map((thread) => {
    const resKey = `paged${plural(thread, 'titleCase')}`

    return {
      match: asyncRes(resKey),
      action: (res) => callback?.(thread, res[resKey]),
    }
  }, threads)
}

/**
 * handle general published articles in user page
 */
export const matchPublishedArticles = (callback) => {
  // @ts-ignore
  return map((thread) => {
    const resKey = `pagedPublished${plural(thread, 'titleCase')}`

    return {
      match: asyncRes(resKey),
      action: (res) => callback?.(res[resKey]),
    }
  }, values(ARTICLE_THREAD))
}

/**
 * handle general article GQ response
 */
export const matchArticles = (callback) => {
  // @ts-ignore
  return map((thread) => {
    const resKey = `${thread.toLowerCase()}`

    return {
      match: asyncRes(resKey),
      action: (res) => callback?.(res[resKey]),
    }
  }, values(ARTICLE_THREAD))
}

/**
 * match upvote/undo-upvotes article async response
 * 处理 article 类型的 upvote/undo-upvote GraphQL 返回逻辑
 */
export const matchArticleUpvotes = (callback) => {
  // @ts-ignore
  const matches = map((thread) => {
    const upvoteResKey = `upvote${titleCase(thread)}`
    const undoUpvoteResKey = `undoUpvote${titleCase(thread)}`

    return [
      {
        match: asyncRes(upvoteResKey),
        action: (res) => callback?.(res[upvoteResKey]),
      },
      {
        match: asyncRes(undoUpvoteResKey),
        action: (res) => callback?.(res[undoUpvoteResKey]),
      },
    ]
  }, values(ARTICLE_THREAD))

  return flatten(matches)
}
