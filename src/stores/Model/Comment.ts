import { types as T } from 'mobx-state-tree'
import { reduce, merge } from 'ramda'
import { titleCase } from '@/utils/helper'

import { User } from './User'

import { pagiFields, timestampFields } from './helper/common'

const emotions = [
  'downvote',
  'beer',
  'heart',
  'biceps',
  'orz',
  'confused',
  'pill',
  'popcorn',
]

const commentEmotionFields = () => {
  return reduce(
    merge,
    {},
    emotions.map((emotion) => {
      return {
        [`${emotion}Count`]: T.maybeNull(T.number),
        // [`latest${emotion.toUpperCase()}Users`]: [],
        [`viewerHas${titleCase(emotion)}ed`]: T.optional(T.boolean, false),
      }
    }),
  )
}

const CommentEmotion = T.model('CommentEmotion', commentEmotionFields())
// console.log('...commentEmotionFields: ', commentEmotionFields())

// const CommentBrief = T.model('CommentBrief', {
//   id: T.maybeNull(T.string),
//   body: T.maybeNull(T.string),
//   floor: T.maybeNull(T.number),
//   author: T.optional(User, {}),
// })

// TODO: CommentEmotions
// CommentMeta

export const Comment = T.model('Comment', {
  id: T.maybeNull(T.string),
  bodyHtml: T.maybeNull(T.string),
  author: T.optional(User, {}),
  isPinned: T.optional(T.boolean, false),
  floor: T.number,
  upvotesCount: T.optional(T.number, 0),
  repliesCount: T.optional(T.number, 0),
  thread: T.optional(T.string, ''),
  isArticleAuthor: T.optional(T.boolean, false),
  // field(:reply_to, :comment_reply)
  // field(:replies, list_of(:comment_reply))
  // field(:article, :common_article)
  viewerHasUpvoted: T.maybeNull(T.boolean),

  isDeleted: T.optional(T.boolean, false),
  isForQuestion: T.optional(T.boolean, false),
  isArchived: T.optional(T.boolean, false),
  archivedAt: T.optional(T.boolean, false),

  emotions: T.optional(CommentEmotion, {}),

  ...timestampFields(),
})

export const PagedComments = T.model('PagedComments', {
  entries: T.optional(T.array(Comment), []),
  ...pagiFields(),
})
