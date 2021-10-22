/*
 * BlogEditor store
 */

import { types as T, Instance } from 'mobx-state-tree'
import { isEmpty, includes, filter, pick } from 'ramda'

import type { TCommunity, TBlogRSS, TTag, TBlog, TSubmitState } from '@/spec'

import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { isURL } from '@/utils/validator'
import uid from '@/utils/uid'
// import { mockBlogFeeds } from '@/utils/mock'

import { Community, Blog, Tag } from '@/model'

import type { TValidState } from './spec'

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
  community: T.optional(Community, {}),
  articleTags: T.optional(T.array(Tag), []),
  step: T.optional(T.enumeration(['STEP_1', 'STEP_2', 'STEP_3']), 'STEP_1'),
  filterTitle: T.optional(T.string, ''),
  rss: T.optional(T.string, ''),
  activeBlog: T.optional(Blog, {}),
  rssInfo: T.optional(RSSInfo, {}),
  loading: T.optional(T.boolean, false),

  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
  isReady: T.optional(T.boolean, false),
})
  .views((self) => ({
    get submitState(): TSubmitState {
      return pick(['publishing', 'publishDone', 'isReady'], self)
    },
    get communityData(): TCommunity {
      return toJS(self.community)
    },
    get tagsData(): TTag[] {
      return toJS(self.articleTags)
    },
    get activeBlogData(): TBlog {
      return toJS(self.activeBlog)
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
    get validState(): TValidState {
      return {
        rss: isURL(self.rss, true),
      }
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
