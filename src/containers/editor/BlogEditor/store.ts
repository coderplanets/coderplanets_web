/*
 * BlogEditor store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TCommunity, TRootStore, TBlog } from '@/spec'

import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { mockBlogFeeds } from '@/utils/mock'

import { Blog } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:BlogEditor')

const BlogEditor = T.model('BlogEditor', {
  step: T.optional(T.enumeration(['STEP_1', 'STEP_2', 'STEP_3']), 'STEP_1'),
  feeds: T.optional(T.array(Blog), mockBlogFeeds()),
  rss: T.optional(T.string, ''),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get feedsData(): TBlog[] {
      return toJS(self.feeds)
    },
  }))
  .actions((self) => ({
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof BlogEditor>

export default BlogEditor
