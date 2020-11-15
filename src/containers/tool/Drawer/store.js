/*
 * DrawerStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge, contains, values } from 'ramda'

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

import { SWIPE_THRESHOLD } from './styles/metrics'

const PREVIEWABLE_THREADS = [THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]
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
  // video
  TYPE.DRAWER.VIDEO_VIEW,
  TYPE.DRAWER.VIDEO_CREATE,
  TYPE.DRAWER.VIDEO_EDIT,
  // mails
  TYPE.DRAWER.MAILS_VIEW,
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

  // video spec
  poster: T.maybeNull(T.string),
  thumbnil: T.maybeNull(T.string),
  desc: T.maybeNull(T.string),
  duration: T.maybeNull(T.string),
  publishAt: T.maybeNull(T.string),
  source: T.maybeNull(T.string),
  link: T.maybeNull(T.string),
  originalAuthor: T.maybeNull(T.string),
  originalAuthorLink: T.maybeNull(T.string),
})

const defaultOptions = { direction: 'bottom', position: 'M' }
const DrawerStore = T.model('DrawerStore', {
  visible: T.optional(T.boolean, false),
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
  imageUploading: T.optional(T.boolean, false),
  // header:
  // body:
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isMobile() {
      return self.root.isMobile
    },
    get optionsData() {
      return stripMobx(self.options)
    },
    get swipeThreshold() {
      const { direction, position } = self.options
      return SWIPE_THRESHOLD[direction][position]
    },
    // 预览面板从最右侧滑出的偏移量
    get rightOffset() {
      const { windowWidth } = self
      const MAX_WIDTH = Number(WIDTH.COMMUNITY.PAGE.slice(0, -2))

      return `${windowWidth <= MAX_WIDTH ? 0 : (windowWidth - MAX_WIDTH) / 2}px`
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get curTheme() {
      return self.root.theme.curTheme
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
    open({ type, data, thread, options = {} }) {
      if (type === TYPE.DRAWER.MODELINE_MENU) {
        self.mmType = data
      } else if (data) {
        self.attachment = merge(data, { type })
      }
      if ((thread, contains(thread, PREVIEWABLE_THREADS))) {
        self.setViewing({ [thread]: data, viewingThread: thread })
      }

      self.visible = true
      self.type = type
      self.options = merge(defaultOptions, options)
      lockPage()
      if (self.isMobile) {
        toggleGlobalBlur(true)
        self.canBeClose = false
      }
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    close() {
      self.visible = false
      self.canBeClose = false
      unlockPage()
      if (self.isMobile) {
        toggleGlobalBlur(false)
      }
    },
    resetSwipeAviliable() {
      self.swipeDownAviliable = true
      self.swipeUpAviliable = false
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default DrawerStore
