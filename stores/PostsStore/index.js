/*
 * PostsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsStore')
/* eslint-enable no-unused-vars */

const fakeData = {
  js: {
    data: [
      {
        title: '我是一个 post',
        viewCount: 200,
        tag: '教程',
      },
    ],
    pageSize: 20,
    current: 1,
    total: 20,
  },
}

const Post = t.model('Post', {
  title: t.string,
  tag: t.optional(t.string, 'Dtag'),
  viewCount: t.optional(t.number, 100),
})

const CommunityPosts = t.model('CommunityPosts', {
  data: t.array(Post),
  pageSize: t.optional(t.number, 20),
  current: t.optional(t.number, 1),
  total: t.optional(t.number, 20),
})

export const PostsDefaults = {
  all: {},
}

export const PostsStore = t
  .model('PostsStore', {
    all: t.map(CommunityPosts),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get current() {
      const allJSON = self.all.toJSON()
      return allJSON.js
      // return allJSON.get('js')
      // return self.all.get('js')
    },
  }))
  .actions(self => ({
    load() {
      R.forEachObjIndexed((v, k) => {
        self.all.set(k, v)
      }, fakeData)
      // debug('after: ', self.all.toJSON())
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))
