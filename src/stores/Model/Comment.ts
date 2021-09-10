import { types as T } from 'mobx-state-tree'
import { values, reduce, merge } from 'ramda'

import { EMOTION } from '@/constant'
import { titleCase } from '@/utils/helper'

import { User, SimpleUser } from './User'

import { pagiFields, timestampFields } from './helper/common'

const commentEmotionFields = () => {
  return reduce(
    merge,
    {},
    values(EMOTION).map((emotion) => {
      return {
        [`${emotion}Count`]: T.maybeNull(T.number),
        [`latest${titleCase(emotion)}Users`]: T.optional(
          T.array(SimpleUser),
          [],
        ),
        [`viewerHas${titleCase(emotion)}ed`]: T.optional(T.boolean, false),
      }
    }),
  )
}

const CommentEmotion = T.model('CommentEmotion', commentEmotionFields())

const CommentMeta = T.model('CommentMeta', {
  isArticleAuthorUpvoted: T.optional(T.boolean, false),
  isReplyToOthers: T.optional(T.boolean, false),
})

const commentBaseFields = () => {
  return {
    id: T.maybeNull(T.string),
    bodyHtml: T.maybeNull(T.string),
    author: T.optional(SimpleUser, {}),
    isPinned: T.optional(T.boolean, false),
    floor: T.number,
    upvotesCount: T.optional(T.number, 0),
    isArticleAuthor: T.optional(T.boolean, false),
    thread: T.optional(T.string, ''),
    emotions: T.optional(CommentEmotion, {}),
    meta: T.optional(CommentMeta, {}),
    repliesCount: T.optional(T.number, 0),

    viewerHasUpvoted: T.maybeNull(T.boolean),

    ...timestampFields(),
  }
}

export const CommentReply = T.model('CommentReply', {
  ...commentBaseFields(),
})

export const Comment = T.model('Comment', {
  ...commentBaseFields(),
  replyTo: T.maybeNull(CommentReply),
  replies: T.maybeNull(T.array(CommentReply)),

  // field(:article, :common_article)

  isDeleted: T.optional(T.boolean, false),
  isForQuestion: T.optional(T.boolean, false),
  isArchived: T.optional(T.boolean, false),
  archivedAt: T.optional(T.boolean, false),
})

export const PagedComments = T.model('PagedComments', {
  entries: T.optional(T.array(Comment), []),
  ...pagiFields(),
})
