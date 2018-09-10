/*
 * ArticleViwerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

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
    postLoading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },

    get viewingPost() {
      return stripMobx(self.root.viewing.post)
    },
    /*
    get viewingPost() {
      const { subPath } = self.curRoute
      switch (subPath2Thread(subPath)) {
        case THREAD.POST: {
          return stripMobx(self.root.viewing.post)
        }
        case THREAD.JOB: {
          return stripMobx(self.root.viewing.job)
        }
        default: {
          return stripMobx(self.root.viewing.post)
        }
      }
    },
    */
  }))
  .actions(self => ({
    load(upperType, data) {
      const type = R.toLower(upperType)
      self.markState({
        type: upperType,
        [type]: R.merge(self[type], data),
      })
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleViwerStore
