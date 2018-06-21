/*
 * ArticleViwerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { Post } from '../SharedModel'
import { markStates, makeDebugger, TYPE, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ArticleViwerStore')
/* eslint-enable no-unused-vars */

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
      return stripMobx(self.post)
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
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleViwerStore
