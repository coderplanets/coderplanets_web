/*
 * DrawerStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { concat, keys, reduce, merge, contains, values, findIndex } from 'ramda'

import type { TRootStore, TCommunity, TThread, TArticle, TWorks } from '@/spec'
import { TYPE, ARTICLE_THREAD, THREAD } from '@/constant'

import { markStates, toJS } from '@/utils/mobx'
import { toggleGlobalBlur, lockPage, unlockPage } from '@/utils/dom'
import { Global, titleCase } from '@/utils/helper'
import { WIDTH, mediaBreakPoints } from '@/utils/css/metric'
import { User } from '@/model'

import { TSwipeOption, TArticleNavi } from './spec'
import { SWIPE_THRESHOLD } from './styles/metrics'

const defaultOptions: TSwipeOption = { direction: 'bottom', position: 'M' }

const ARTICLE_VIEWER_TYPES = reduce(
  concat,
  // @ts-ignore
  [],
  keys(ARTICLE_THREAD).map((T) => [TYPE.DRAWER[`${T}_VIEW`]]),
)

const ARTICLE_THREAD_CURD_TYPES = reduce(
  concat,
  // @ts-ignore
  [...ARTICLE_VIEWER_TYPES],
  keys(ARTICLE_THREAD).map((T) => [
    TYPE.DRAWER[`${T}_CREATE`],
    TYPE.DRAWER[`${T}_EDIT`],
  ]),
)

const Options = T.model('Options', {
  direction: T.optional(
    T.enumeration('direction', ['top', 'bottom']),
    'bottom',
  ),
  // like vi-mode
  position: T.optional(T.enumeration('position', ['H', 'M', 'L']), 'M'),
})

const DrawerStore = T.model('DrawerStore', {
  visible: T.optional(T.boolean, false),

  previousHref: T.maybeNull(T.string),
  // only works for mobile view
  options: T.optional(Options, defaultOptions),
  swipeDownAviliable: T.optional(T.boolean, true),
  swipeUpAviliable: T.optional(T.boolean, false),
  canBeClose: T.optional(T.boolean, false),
  headerText: T.optional(T.string, ''),
  showHeaderText: T.optional(T.boolean, false),
  disableContentDrag: T.optional(T.boolean, false),
  // end of only works for mobile view

  windowWidth: T.optional(T.number, 1520),
  type: T.maybeNull(
    T.enumeration('previewType', [
      // account
      TYPE.DRAWER.ACCOUNT_EDIT,
      TYPE.DRAWER.MAILS_VIEW,
      //
      TYPE.DRAWER.C11N_SETTINGS,
      TYPE.DRAWER.MODELINE_MENU,
      ...ARTICLE_THREAD_CURD_TYPES,
    ]),
  ),
  attUser: T.maybeNull(User),

  // shortcut for modelineMenuType
  mmType: T.optional(
    T.enumeration([...values(TYPE.MM_TYPE)]),
    TYPE.MM_TYPE.MORE,
  ),
  // header:
  // body:
})
  .views((self) => ({
    get isMobile(): boolean {
      const root = getParent(self) as TRootStore
      return root.isMobile
    },
    get optionsData() {
      return toJS(self.options)
    },
    get swipeThreshold() {
      const { direction, position } = self.options
      return SWIPE_THRESHOLD[direction][position]
    },
    // 预览面板从最右侧滑出的偏移量
    get rightOffset(): string {
      const { windowWidth } = self
      const MAX_WIDTH = Number(WIDTH.COMMUNITY.PAGE.slice(0, -2))

      return `${
        windowWidth <= MAX_WIDTH ? '0' : (windowWidth - MAX_WIDTH) / 2
      }px`
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get attUserData() {
      return toJS(self.attUser)
    },
    get modalVisible() {
      return self.visible && Global.innerWidth > mediaBreakPoints.desktopL
    },
    get slideVisible() {
      return self.visible && Global.innerWidth <= mediaBreakPoints.desktopL
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingArticle
    },
    get articleNavi(): TArticleNavi {
      const slf = self as TStore
      const root = getParent(self) as TRootStore
      const viewingArticleId = slf.viewingArticle.id

      let pagedArticles
      switch (slf.curThread) {
        case THREAD.WORKS: {
          pagedArticles = toJS(root.worksContent.pagedWorks)
          break
        }

        default: {
          pagedArticles = toJS(
            root.articlesThread[`paged${titleCase(slf.curThread)}s`],
          )
          break
        }
      }

      const curIndex = findIndex(
        (a: TWorks) => a.id === viewingArticleId,
        pagedArticles.entries,
      )
      return {
        previous: pagedArticles.entries[curIndex - 1] || null,
        next: pagedArticles.entries[curIndex + 1] || null,
      }
    },
  }))
  .actions((self) => ({
    open({ type, data, options = {} }): void {
      const slf = self as TStore
      const thread = data.meta?.thread?.toLowerCase()

      if (type === TYPE.DRAWER.MODELINE_MENU) {
        slf.mmType = data
      }

      if (contains(thread, values(ARTICLE_THREAD))) {
        // article
        slf.setViewing({ [thread]: data, viewingThread: thread })
      }

      slf.visible = true
      slf.type = type
      slf.options = merge(defaultOptions, options)
      lockPage()
      toggleGlobalBlur(true)

      if (slf.isMobile) {
        slf.canBeClose = false
      }

      slf.markPreviewURLIfNeed(data)
    },
    setViewing(sobj: Record<string, unknown>): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    close(): void {
      const slf = self as TStore

      slf.restorePreviousURLIfNeed()

      slf.visible = false
      slf.canBeClose = false
      slf.type = null

      unlockPage()
      toggleGlobalBlur(false)
    },

    resetViewing(): void {
      const root = getParent(self) as TRootStore
      return root.resetViewing()
    },

    markPreviewURLIfNeed(article: TArticle): void {
      const { id, title, meta } = article

      if (!id || !contains(self.type, ARTICLE_VIEWER_TYPES)) return
      self.previousHref = Global.location.href

      const thread = meta.thread.toLowerCase()
      const nextURL = `${Global.location.origin}/${thread}/${id}`
      Global.history.replaceState(null, title, nextURL)
    },

    restorePreviousURLIfNeed(): void {
      if (!contains(self.type, ARTICLE_VIEWER_TYPES)) return
      Global.history.replaceState(null, 'new-title', self.previousHref)
    },

    resetSwipeAviliable(): void {
      self.swipeDownAviliable = true
      self.swipeUpAviliable = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof DrawerStore>

export default DrawerStore
