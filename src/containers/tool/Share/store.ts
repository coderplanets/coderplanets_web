/*
 * Share store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import { SITE_URL_SHORT } from '@/config'
import type { TArticle, TCommunity, TRootStore, TThread } from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'

import { SITE_SHARE_TYPE } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:Share')

export type TLinksData = {
  link: string
  md: string
  orgMode: string
}

const Share = T.model('Share', {
  show: T.optional(T.boolean, false),
  siteShareType: T.optional(
    T.enumeration(values(SITE_SHARE_TYPE)),
    SITE_SHARE_TYPE.LINKS,
  ),
})
  .views((self) => ({
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingArticle
    },
    get viewingThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingThread
    },
    get linksData(): TLinksData {
      const slf = self as TStore

      const articleId = slf.viewingArticle.id
      const articleTitle = slf.viewingArticle.title
      const thread = 'post' // TODO: use articles' own thread

      return {
        link: `${SITE_URL_SHORT}/${thread}/${articleId}`,
        md: `[${articleTitle}](${SITE_URL_SHORT}/${thread}/${articleId})`,
        orgMode: `[[${SITE_URL_SHORT}/${thread}/${articleId}][${articleTitle}]]`,
      }
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof Share>

export default Share
