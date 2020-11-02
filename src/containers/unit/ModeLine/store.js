/*
 * ModeLine store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { values } from 'ramda'

import { TYPE, METRIC } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ModeLine')

const ModeLine = T.model('ModeLine', {
  topBarVisiable: T.optional(T.boolean, false),
  activeMenu: T.optional(T.enumeration([...values(TYPE.MM_TYPE), '']), ''),
  metric: T.optional(T.enumeration(values(METRIC)), METRIC.COMMUNITY),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isMobile() {
      return self.root.isMobile
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get isTopBarVisiable() {
      const {
        isMobile,
        topBarVisiable,
        metric,
        isArticleDigestInViewport,
      } = self
      const { bodyScrollDirection } = self.root.globalLayout

      if (metric === METRIC.COMMUNITY) return topBarVisiable
      // do not show article topBar on desktop
      if (!isMobile && metric === METRIC.ARTICLE) return false

      if (isArticleDigestInViewport) return false

      if (bodyScrollDirection === 'up') {
        return false
      }

      return true
    },
    get viewingArticle() {
      return stripMobx(self.root.viewingArticle)
    },
    get leftOffset() {
      const curSidebarPin = self.root.sidebar.pin
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
    get isMenuActive() {
      return self.activeMenu !== ''
    },
    get isArticleDigestInViewport() {
      return self.root.articleDigest.inViewport
    },
    get isCommunityBlockExpand() {
      const { isArticleDigestInViewport } = self

      if (!isArticleDigestInViewport) return false

      return true
    },
  }))
  .actions((self) => ({
    showTopBar(bool) {
      self.topBarVisiable = bool
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ModeLine
