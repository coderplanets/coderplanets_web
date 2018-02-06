/*
 * ArticleViwerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, TYPE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ArticleViwerStore')
/* eslint-enable no-unused-vars */

const Post = t.model('Post', {
  id: t.optional(t.string, ''),
  title: t.optional(t.string, ''),
  body: t.optional(t.string, ''),
  digest: t.optional(t.string, ''),
  views: t.optional(t.number, 0),
  // author: Author,
  tags: t.optional(t.string, ''), // TODO: ArrayOf Tag
  comments: t.optional(t.string, ''), // TODO: ArrayOf comments
  favoritedCount: t.optional(t.number, 0),
  starredCount: t.optional(t.number, 0),
  viewerHasFavorited: t.optional(t.boolean, false),
  viewerHasStarred: t.optional(t.boolean, false),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

const ArticleViwerStore = t
  .model('ArticleViwerStore', {
    type: t.optional(
      t.enumeration('type', [
        TYPE.POST,
        TYPE.JOB,
        // ...
      ]),
      TYPE.POST
    ),
    post: t.optional(Post, {}),
    postLoading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curPost() {
      return self.post.toJSON()
    },
  }))
  .actions(self => ({
    load(upperType, data) {
      const type = R.toLower(upperType)
      self.markState({
        type: upperType,
        [type]: R.merge(self[type], data),
      })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleViwerStore
