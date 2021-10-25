/*
 * BlogEditor store
 */

import { types as T, Instance } from 'mobx-state-tree'
import { isEmpty, includes, filter, pick } from 'ramda'

import type {
  TCommunity,
  TBlogRSS,
  TTag,
  TBlog,
  TSubmitState,
  TRSSAuthor,
} from '@/spec'

import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { isURL } from '@/utils/validator'
import uid from '@/utils/uid'
// import { mockBlogFeeds } from '@/utils/mock'

import { Community, Blog, Tag, BlogRSSInfo } from '@/model'

import type { TValidState } from './spec'

/* eslint-disable-next-line */
const log = buildLog('S:BlogEditor')

const BlogEditor = T.model('BlogEditor', {
  mode: T.optional(T.enumeration(['publish', 'update']), 'publish'),
  community: T.optional(Community, {}),
  articleTags: T.optional(T.array(Tag), []),
  step: T.optional(T.enumeration(['STEP_1', 'STEP_2', 'STEP_3']), 'STEP_1'),
  filterTitle: T.optional(T.string, ''),
  rss: T.optional(T.string, ''),
  activeBlog: T.optional(Blog, {}),
  rssInfo: T.optional(BlogRSSInfo, {}),
  loading: T.optional(T.boolean, false),

  authorName: T.optional(T.string, ''),
  authorIntro: T.optional(T.string, ''),
  authorGithub: T.optional(T.string, ''),
  authorTwitter: T.optional(T.string, ''),

  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
  isReady: T.optional(T.boolean, false),
})
  .views((self) => ({
    get submitState(): TSubmitState {
      if (self.mode === 'update' && self.authorName?.length > 0) {
        return {
          publishing: self.publishing,
          publishDone: self.publishDone,
          isReady: true,
        }
      }

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
    get rssAuthorData(): TRSSAuthor {
      return {
        name: self.authorName,
        intro: self.authorIntro,
        github: self.authorGithub,
        twitter: self.authorTwitter,
      }
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
    updateRssAuthor(author): void {
      if (!author) return

      self.authorName = author.name || ''
      self.authorIntro = author.intro || ''
      self.authorGithub = author.github || ''
      self.authorTwitter = author.twitter || ''
    },
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
