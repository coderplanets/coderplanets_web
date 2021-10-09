// is not REAL macros, but some shared hanlder snippets
// NOTE: for consistency, function name shoud start with "match"

import type { TThread } from '@/spec'
import { map, values, flatten } from 'ramda'

import { ARTICLE_THREAD } from '@/constant'
import { titleCase } from './helper'
import asyncSuite from './async'

const { asyncRes } = asyncSuite

// handle articles thread general pagedXXX response
export const matchPagedArticles = (threads: TThread[], callback) => {
  return map((thread) => {
    return {
      match: asyncRes(`paged${titleCase(thread)}s`),
      action: (res) => callback?.(thread, res[`paged${titleCase(thread)}s`]),
    }
  }, threads)
}

/**
 * match upvote/undo-upvotes article async response
 * 处理 article 类型的 upvote/undo-upvote GraphQL 返回逻辑
 * Works 和 Repo 是处理页面，自行处理相关逻辑
 */
export const matchArticleUpvotes = (callback) => {
  // @ts-ignore
  const matches = map((thread) => {
    return [
      {
        match: asyncRes(`upvote${titleCase(thread)}`),
        action: (res) => callback?.(res[`upvote${titleCase(thread)}`]),
      },
      {
        match: asyncRes(`undoUpvote${titleCase(thread)}`),
        action: (res) => callback?.(res[`undoUpvote${titleCase(thread)}`]),
      },
    ]
  }, values(ARTICLE_THREAD))

  return flatten(matches)
}
