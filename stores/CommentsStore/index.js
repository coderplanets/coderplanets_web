/*
 * CommentsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
import { User } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommentsStore')
/* eslint-enable no-unused-vars */

const Comment = t.model('Comment', {
  id: t.maybe(t.string),
  body: t.maybe(t.string),
  author: t.optional(User, {}),
  /* desc: t.optional(t.string, ''), */
  /* raw: t.maybe(t.string), */
  /* logo: t.maybe(t.string), */
  contributesDigest: t.optional(t.array(t.number), []),
  repliesCount: t.optional(t.number, 0),
  likesCount: t.optional(t.number, 0),
  dislikesCount: t.optional(t.number, 0),
  /* viewerHasLiked: t.maybe(t.boolean), */
  /* viewerHasdisliked: t.maybe(t.boolean), */
})

const CommentsStore = t
  .model('CommentsStore', {
    showInputEditor: t.optional(t.boolean, false),
    deletingID: t.optional(t.string, ''),

    entries: t.optional(t.array(Comment), []),
    totalCount: t.optional(t.number, 0),
    pageNumber: t.optional(t.number, 0),
    totalPages: t.optional(t.number, 0),
    pageSize: t.optional(t.number, 0),

    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get activeArticle() {
      // TODO: based on tab
      return self.root.postsPaper.active
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommentsStore
