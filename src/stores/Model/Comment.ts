import { types as T } from 'mobx-state-tree'
import { values, reduce, merge } from 'ramda'

import { EMOTION } from '@/constant'
import { titleCase } from '@/utils/helper'

import { SimpleUser } from './User'

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
  isLegal: T.optional(T.boolean, true),
  illegalReason: T.optional(T.array(T.string), []),
  illegalWords: T.optional(T.array(T.string), []),
})

const ParentArticle = T.model('ParentArticle', {
  id: T.maybeNull(T.string),
  title: T.optional(T.string, ''),
  thread: T.optional(T.string, ''),
  author: T.optional(SimpleUser, {}),
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

    replyToId: T.maybeNull(T.string),
    viewerHasUpvoted: T.maybeNull(T.boolean),

    article: T.maybeNull(ParentArticle),

    ...timestampFields(),
  }
}

export const CommentReplyTo = T.model('CommentReplyTo', {
  author: T.optional(SimpleUser, {}),
  floor: T.number,
})

export const CommentReply = T.model('CommentReply', {
  ...commentBaseFields(),
  replyTo: T.maybeNull(CommentReplyTo),
})

export const Comment = T.model('Comment', {
  ...commentBaseFields(),
  replies: T.maybeNull(T.array(CommentReply)),
  replyTo: T.maybeNull(CommentReply),
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
