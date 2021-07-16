/*
 * DrawerStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, contains, values } from 'ramda'

import type { TRootStore, TCommunity, TThread, TID } from '@/spec'
import { TYPE, THREAD } from '@/constant'

import {
  markStates,
  stripMobx,
  lockPage,
  unlockPage,
  Global,
  WIDTH,
  css,
  toggleGlobalBlur,
} from '@/utils'
import { User } from '@/model'

import { TSwipeOption } from './spec'
import { SWIPE_THRESHOLD } from './styles/metrics'

const defaultOptions: TSwipeOption = { direction: 'bottom', position: 'M' }

const PREVIEWABLE_THREADS = [THREAD.POST, THREAD.JOB, THREAD.REPO]
const THREAD_CONTENT_CURD_TYPES = [
  // post
  TYPE.DRAWER.POST_VIEW,
  TYPE.DRAWER.POST_CREATE,
  TYPE.DRAWER.POST_EDIT,
  // job
  TYPE.DRAWER.JOB_VIEW,
  TYPE.DRAWER.JOB_CREATE,
  TYPE.DRAWER.JOB_EDIT,
  // repo
  TYPE.DRAWER.REPO_VIEW,
  TYPE.DRAWER.REPO_CREATE,
  // mails
  TYPE.DRAWER.MAILS_VIEW,
]

const VIEWER_TYPES = [
  TYPE.DRAWER.POST_VIEW,
  TYPE.DRAWER.JOB_VIEW,
  TYPE.DRAWER.REPO_VIEW,
]

const Options = T.model('Options', {
  direction: T.optional(
    T.enumeration('direction', ['top', 'bottom']),
    'bottom',
  ),
  // like vi-mode
  position: T.optional(T.enumeration('position', ['H', 'M', 'L']), 'M'),
})

const Attachment = T.model('Attachment', {
  id: T.string,
  type: T.optional(
    T.enumeration('type', [...THREAD_CONTENT_CURD_TYPES]),
    TYPE.DRAWER.POST_VIEW,
  ),
  title: T.string,
  body: T.maybeNull(T.string),
  digest: T.maybeNull(T.string),
  author: T.maybeNull(User),
  copyRight: T.optional(T.string, 'original'),
  linkAddr: T.maybeNull(T.string),
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
      // article types
      ...THREAD_CONTENT_CURD_TYPES,
      //
      TYPE.DRAWER.C11N_SETTINGS,
      TYPE.DRAWER.MODELINE_MENU,
    ]),
  ),
  attUser: T.maybeNull(User),
  attachment: T.maybeNull(Attachment),

  // shortcut for modelineMenuType
  mmType: T.optional(
    T.enumeration([...values(TYPE.MM_TYPE)]),
    TYPE.MM_TYPE.MORE,
  ),
  // header:
  // body:
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isMobile(): boolean {
      const root = getParent(self) as TRootStore
      return root.isMobile
    },
    get optionsData() {
      return stripMobx(self.options)
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
      return stripMobx(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get attachmentData() {
      return stripMobx(self.attachment)
    },
    get attUserData() {
      return stripMobx(self.attUser)
    },
    get modalVisible() {
      return self.visible && Global.innerWidth > css.mediaBreakPoints.desktopL
    },

    get slideVisible() {
      return self.visible && Global.innerWidth <= css.mediaBreakPoints.desktopL
    },
  }))
  .actions((self) => ({
    open({ type, data, thread, options = {} }): void {
      const slf = self as TStore

      if (type === TYPE.DRAWER.MODELINE_MENU) {
        slf.mmType = data
      } else if (data) {
        // @ts-ignore TODO: fix later
        slf.attachment = merge(data, { type })
      }
      if (contains(thread, PREVIEWABLE_THREADS)) {
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

      slf.markPreviewURLIfNeed(data?.id)
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

    // TODO: 重构时用 article.meta.thread 来替代 thread
    markPreviewURLIfNeed(id: TID): void {
      if (!id || !contains(self.type, VIEWER_TYPES)) return

      self.previousHref = Global.location.href

      const thread = self.curThread
      const nextURL = `${Global.location.origin}/${thread}/${id}`
      Global.history.replaceState(null, 'new-title', nextURL)
    },

    restorePreviousURLIfNeed(): void {
      if (!contains(self.type, VIEWER_TYPES)) return
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
