/*
 * ModeLine store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore, TViewing, TCommunity, TArticle } from '@/spec'
import { TYPE, METRIC } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const ModeLine = T.model('ModeLine', {
  topBarVisiable: T.optional(T.boolean, false),
  activeMenu: T.optional(T.enumeration([...values(TYPE.MM_TYPE), '']), ''),
  metric: T.optional(T.enumeration(values(METRIC)), METRIC.COMMUNITY),
})
  .views((self) => ({
    get isMobile(): boolean {
      const root = getParent(self) as TRootStore
      return root.isMobile
    },

    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get viewing(): TViewing {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing)
    },
    get isTopBarVisiable(): boolean {
      const slf = self as TStore

      const { isMobile, topBarVisiable, metric, isArticleDigestInViewport } =
        slf
      const root = getParent(self) as TRootStore
      const { bodyScrollDirection } = root.globalLayout

      if (metric === METRIC.COMMUNITY && bodyScrollDirection === 'down') {
        return topBarVisiable
      }
      // do not show article topBar on desktop
      if (!isMobile && metric === METRIC.ARTICLE) return false

      if (isArticleDigestInViewport) return false

      if (bodyScrollDirection === 'up') {
        return false
      }

      return true
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewingArticle)
    },
    get leftOffset(): number | string {
      return '180px'
    },
    get isMenuActive(): boolean {
      return self.activeMenu !== ''
    },
    get isArticleDigestInViewport(): boolean {
      const root = getParent(self) as TRootStore
      return root.articleDigest.inViewport
    },
    get isCommunityBlockExpand(): boolean {
      const slf = self as TStore

      const { isArticleDigestInViewport } = slf

      if (!isArticleDigestInViewport) return false

      return true
    },
  }))
  .actions((self) => ({
    showTopBar(bool): void {
      self.topBarVisiable = bool
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query, {})
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ModeLine>

export default ModeLine
