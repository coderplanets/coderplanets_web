/*
 * PreviewStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  markStates,
  TYPE,
  stripMobx,
  unholdPage,
  THREAD,
  Global,
  cs,
} from 'utils'

import { User, EmptyAchievement } from 'stores/SharedModel'

const PREVIEWABLE_THREADS = [THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]
/* const debug = makeDebugger('S:PreviewStore') */
const THREAD_CONTENT_CURD_TYPES = [
  // post
  TYPE.PREVIEW_POST_VIEW,
  TYPE.PREVIEW_POST_CREATE,
  TYPE.PREVIEW_POST_EDIT,
  // job
  TYPE.PREVIEW_JOB_VIEW,
  TYPE.PREVIEW_JOB_CREATE,
  TYPE.PREVIEW_JOB_EDIT,
  // repo
  TYPE.PREVIEW_REPO_VIEW,
  TYPE.PREVIEW_REPO_CREATE,
  // video
  TYPE.PREVIEW_VIDEO_VIEW,
  TYPE.PREVIEW_VIDEO_CREATE,
  TYPE.PREVIEW_VIDEO_EDIT,
  // mails
  TYPE.PREVIEW_MAILS_VIEW,
]

const Attachment = t.model('Attachment', {
  id: t.string,
  type: t.optional(
    t.enumeration('type', [...THREAD_CONTENT_CURD_TYPES]),
    TYPE.PREVIEW_POST_VIEW
  ),
  /* type: t.maybeNull(t.string), // t.optional(t.enumeration('edittype', [TYPE.POST, TYPE.JOB]), TYPE.POST), */
  title: t.string,
  body: t.maybeNull(t.string),
  digest: t.maybeNull(t.string),
  author: t.maybeNull(User),

  // video spec
  poster: t.maybeNull(t.string),
  thumbnil: t.maybeNull(t.string),
  desc: t.maybeNull(t.string),
  duration: t.maybeNull(t.string),
  publishAt: t.maybeNull(t.string),
  source: t.maybeNull(t.string),
  link: t.maybeNull(t.string),
  originalAuthor: t.maybeNull(t.string),
  originalAuthorLink: t.maybeNull(t.string),
})

const PreviewStore = t
  .model('PreviewStore', {
    visible: t.optional(t.boolean, false),
    type: t.maybeNull(
      t.enumeration('previewType', [
        TYPE.PREVIEW_ROOT_STORE,
        // account
        TYPE.PREVIEW_ACCOUNT_VIEW,
        TYPE.PREVIEW_USER_VIEW,
        TYPE.PREVIEW_ACCOUNT_EDIT,
        // article types
        ...THREAD_CONTENT_CURD_TYPES,
      ])
    ),
    attUser: t.maybeNull(User),
    attachment: t.maybeNull(Attachment),

    imageUploading: t.optional(t.boolean, false),
    // header:
    // body:
  })
  .views(self => ({
    get root() {
      return getParent(self)
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
      return self.visible && Global.innerWidth > cs.mediaBreakPoints.desktop
    },

    get slideVisible() {
      return self.visible && Global.innerWidth < cs.mediaBreakPoints.desktop
    },
  }))
  .actions(self => ({
    open({ type, data, thread }) {
      // NOTE: currently the attachment is only used for article-like content
      if (type === TYPE.PREVIEW_USER_VIEW) {
        self.attUser = R.merge(data, EmptyAchievement)
      } else if (data) {
        self.attachment = R.merge(data, { type })
      }
      // if (data) self.attachment = R.merge({ type }, data)

      if ((thread, R.contains(thread, PREVIEWABLE_THREADS))) {
        self.setViewing({ [thread]: data, viewingThread: thread })
      }

      self.visible = true
      self.type = type
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    close() {
      self.visible = false
      unholdPage()
      // self.type = TYPE.PREVIEW_ROOT_STORE
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PreviewStore
