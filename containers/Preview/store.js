/*
 * PreviewStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { User } from '../../stores/SharedModel'
import { markStates, TYPE, stripMobx, unholdPage } from '../../utils'

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
        TYPE.PREVIEW_COMMUNITY_EDITORS,
        // account
        TYPE.PREVIEW_ACCOUNT_VIEW,
        TYPE.PREVIEW_ACCOUNT_EDIT,
        // article types
        ...THREAD_CONTENT_CURD_TYPES,
      ])
    ),
    attachment: t.maybeNull(Attachment),
    // header:
    // body:
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get themeKeys() {
      return self.root.theme.themeKeys
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
    get attachmentData() {
      return stripMobx(self.attachment)
    },
  }))
  .actions(self => ({
    open({ type, data }) {
      self.visible = true
      self.type = type

      // NOTE: currently the attachment is only used for article-like content
      if (data) self.attachment = R.merge({ type }, data)
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
