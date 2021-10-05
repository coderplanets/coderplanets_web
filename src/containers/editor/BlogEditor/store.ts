/*
 * BlogEditor store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { isEmpty, includes, filter } from 'ramda'

import type { TCommunity, TRootStore, TBlogRSS } from '@/spec'

import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import uid from '@/utils/uid'
// import { mockBlogFeeds } from '@/utils/mock'

import { Blog } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:BlogEditor')

const RSSInfo = T.model('RSSInfo', {
  title: T.optional(T.string, ''),
  subtitle: T.optional(T.string, ''),
  link: T.optional(T.string, ''),
  updated: T.optional(T.string, ''),
  historyFeed: T.optional(T.array(Blog), []),
})

const BlogEditor = T.model('BlogEditor', {
  step: T.optional(T.enumeration(['STEP_1', 'STEP_2', 'STEP_3']), 'STEP_1'),
  filterTitle: T.optional(T.string, ''),
  rss: T.optional(T.string, ''),
  rssInfo: T.optional(RSSInfo, {}),
  loading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
    get rssInfoData(): TBlogRSS {
      const rssInfoRaw = toJS(self.rssInfo)
      if (!isEmpty(rssInfoRaw.historyFeed)) {
        rssInfoRaw.historyFeed = rssInfoRaw.historyFeed.map((item) => ({
          ...item,
          id: uid.gen(),
        }))
      }

      const { filterTitle } = self
      if (!isEmpty(filterTitle)) {
        rssInfoRaw.historyFeed = filter(
          // @ts-ignore
          (item) => includes(filterTitle, item.title),
          rssInfoRaw.historyFeed,
        )
      }

      return rssInfoRaw
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
