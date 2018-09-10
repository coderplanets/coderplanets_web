/*
 * PreviewStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { User } from '../../stores/SharedModel'
import { markStates, TYPE, stripMobx } from '../../utils'

// const debug = makeDebugger('S:PreviewStore')

const Attachment = t.model('EditData', {
  id: t.string,
  type: t.optional(t.enumeration('edittype', [TYPE.POST, TYPE.JOB]), TYPE.POST),
  title: t.string,
  body: t.maybeNull(t.string),
  digest: t.maybeNull(t.string),
  author: t.maybeNull(User),
})

const PreviewStore = t
  .model('PreviewStore', {
    visible: t.optional(t.boolean, false),
    type: t.maybeNull(
      t.enumeration('previewType', [
        TYPE.PREVIEW_ROOT_STORE,
        TYPE.PREVIEW_COMMUNITY_EDITORS,
        // post
        TYPE.PREVIEW_POST_VIEW,
        TYPE.PREVIEW_POST_CREATE,
        TYPE.PREVIEW_POST_EDIT,
        // job
        TYPE.PREVIEW_JOB_VIEW,
        TYPE.PREVIEW_JOB_CREATE,
        TYPE.PREVIEW_JOB_EDIT,
        // account
        TYPE.PREVIEW_ACCOUNT_VIEW,
        TYPE.PREVIEW_ACCOUNT_EDIT,
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
      if (data) self.attachment = data
      /*
         if (type === TYPE.PREVIEW_POST_EDIT || type === TYPE.PREVIEW_POST_VIEW) {
         self.attachment = R.merge({ type: TYPE.POST }, data)
         }
         if (type === TYPE.PREVIEW_JOB_EDIT || type === TYPE.PREVIEW_JOB_VIEW) {
         self.attachment = R.merge({ type: TYPE.JOB }, data)
         }
       */
    },
    close() {
      self.visible = false
      // self.type = TYPE.PREVIEW_ROOT_STORE
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PreviewStore
