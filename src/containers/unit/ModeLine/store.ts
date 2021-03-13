/*
 * ModeLine store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import { IRootStore, TViewing, TArticle } from '@/spec'
import { TYPE, METRIC } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ModeLine')

const ModeLine = T.model('ModeLine', {
  topBarVisiable: T.optional(T.boolean, false),
  activeMenu: T.optional(T.enumeration([...values(TYPE.MM_TYPE), '']), ''),
  metric: T.optional(T.enumeration(values(METRIC)), METRIC.COMMUNITY),
})
  .views((self: any) => ({
    get isMobile(): boolean {
      const root = getParent(self) as IRootStore
      return root.isMobile
    },
    get viewing(): TViewing {
      const root = getParent(self) as IRootStore
      return stripMobx(root.viewing)
    },
    get isTopBarVisiable(): boolean {
      const {
        isMobile,
        topBarVisiable,
        metric,
        isArticleDigestInViewport,
      } = self
      const root = getParent(self) as IRootStore
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
      const root = getParent(self) as IRootStore
      return stripMobx(root.viewingArticle)
    },
    get leftOffset(): number | string {
      const root = getParent(self) as IRootStore
      const curSidebarPin = root.sidebar.pin
      if (
        (!curSidebarPin && !self.preSidebarPin && !self.fixed) ||
        (!curSidebarPin && !self.preSidebarPin) ||
        (curSidebarPin && !self.preSidebarPin && !self.fixed) ||
        (curSidebarPin && self.preSidebarPin && self.fixed) ||
        (curSidebarPin && self.preSidebarPin && !self.fixed) ||
        (!curSidebarPin && self.preSidebarPin && !self.fixed)
      ) {
        return 0
      }

      // 特殊情况： 当 sidebar 打开时下滑页面， 需要一个 preSidebarPin 的中间状态
      if (!curSidebarPin && self.preSidebarPin && self.fixed) {
        return '-180px'
      }

      // isPin && !self.preSidebarPin && self.fixed
      return '180px'
    },
    get isMenuActive(): boolean {
      return self.activeMenu !== ''
    },
    get isArticleDigestInViewport(): boolean {
      const root = getParent(self) as IRootStore
      return root.articleDigest.inViewport
    },
    get isCommunityBlockExpand(): boolean {
      const { isArticleDigestInViewport } = self

      if (!isArticleDigestInViewport) return false

      return true
    },
  }))
  .actions((self) => ({
    showTopBar(bool): void {
      self.topBarVisiable = bool
    },
    setViewing(sobj): void {
      const root = getParent(self) as IRootStore
      root.setViewing(sobj)
    },
    markRoute(query): void {
      const root = getParent(self) as IRootStore
      root.markRoute(query, {})
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ModeLine>

export default ModeLine
