/*
 * PostsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsStore')
/* eslint-enable no-unused-vars */

const posts = [
  {
    title: 'Mastani 的前端基于 next/react 技术栈',
    body:
      '一来做个记录，二来可以抛砖引玉，再来大家可以一起学习。该系列文章将会从最基本的 node 、mongo 环境安装讲起，逐步深入，最终通过 docker 实现服务的自动构建和部署。 ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar1.png',
    },
  },
  {
    title: '后端则是是基于 Elixir 的 Phoenix 框架',
    body:
      '作为一名前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然，所以就自己购买了一台阿里服务器来学习 ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar0.png',
    },
  },
  {
    title: 'API 是 GrahpQL, 用的事 Elixir 社区的 Absinthe',
    body: '前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar2.png',
    },
  },
  {
    title: '关于 REST 哥已经无力吐槽了',
    body:
      '作为一名前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然，所以就自己购买了一台阿里服务器来学习。接触到其实很多人在部署服务的过程中也都会或多或少的遇  ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar3.png',
    },
  },
  {
    title: 'Ramda.js 真是太爽了。。',
    body:
      '作为一名前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然，所以就自己购买了一台阿里服务器来学习。接触到其实很多人在部署服务的过程中也都会或多或少的遇 ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar4.png',
    },
  },
  {
    title: 'Rx.js 不火没道理啊。真心是个神器',
    body:
      'this is body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha b',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar5.png',
    },
  },
  {
    title: '我什么时候才能火起来啊。..',
    body:
      'this is body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha b',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar6.png',
    },
  },
  {
    title: '测试请发到客户端测试专区，违规影响用户的，直接封号',
    body:
      'this is body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha b',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar7.png',
    },
  },
]

const pagedPosts = {
  entries: posts,
  pageNumber: 1,
  pageSize: 20, // TODO: USE CONSTANTS
  totalEntries: 1,
  totalPages: 1,
}

/*
const Author = t.model('Author', {
  avatar: t.string,
})
*/

const PostItem = t.model('PostItem', {
  id: t.string,
  title: t.string,
  body: t.optional(t.string, ''),
  digest: t.optional(t.string, ''),
  views: t.optional(t.number, 0),
  // author: Author,
  tags: t.optional(t.string, ''), // TODO: ArrayOf Tag
  comments: t.optional(t.string, ''), // TODO: ArrayOf comments
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

const Posts = t.model('Posts', {
  entries: t.optional(t.array(PostItem), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, 20), // TODO: USE CONSTANTS
  totalCount: t.optional(t.number, 1),
  totalPages: t.optional(t.number, 1),
})

const PostsStore = t
  .model('PostsStore', {
    data: t.optional(t.map(Posts), { js: {} }),
    // tags ...
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get postsData() {
      const curCommunity = 'js'
      return self.data.get(curCommunity).toJSON()
    },

    get current() {
      const allJSON = self.all.toJSON()
      return allJSON.js
    },
  }))
  .actions(self => ({
    loadData(data) {
      const curCommunity = 'js'
      self.data.set(curCommunity, data)
    },

    load() {
      const curCommunity = 'js'
      self.data.set(curCommunity, pagedPosts)
      //      R.forEachObjIndexed((v, k) => {
      //      self.all.set(k, v)
      //      }, fakeData)
      // debug('after: ', self.all.toJSON())
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsStore
