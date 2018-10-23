/*
 * TypeWriterStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { Post, Job } from '../../stores/SharedModel'

import {
  markStates,
  makeDebugger,
  stripMobx,
  THREAD,
  changeset,
} from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:TypeWriterStore')
/* eslint-enable no-unused-vars */

const TypeWriterStore = t
  .model('TypeWriterStore', {
    editPost: t.optional(Post, {}),
    editJob: t.maybeNull(Job),

    title: t.optional(t.string, ''),
    linkAddr: t.optional(t.string, ''),
    body: t.optional(t.string, ''),
    publishing: t.optional(t.boolean, false),

    isOriginal: t.optional(t.boolean, true),

    copyRight: t.optional(
      t.enumeration('copyRight', ['original', 'reprint', 'translate']),
      'original'
    ),
    curView: t.optional(
      t.enumeration('curView', [
        'MARKDOWN_HELP_VIEW',
        'EDIT_VIEW',
        'CREATE_VIEW',
        'PREVIEW_VIEW',
      ]),
      'CREATE_VIEW'
    ),
    // TODO: rename to isEditMode
    isEdit: t.optional(t.boolean, false),
    /* for StatusBox */
    success: t.optional(t.boolean, false),
    error: t.optional(t.boolean, false),
    warn: t.optional(t.boolean, false),
    statusMsg: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get statusClean() {
      const { success, error, warn } = self
      return !success && !error && !warn
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get editData() {
      switch (self.root.viewing.activeThread) {
        case THREAD.JOB: {
          return stripMobx(self.editJob)
        }
        default: {
          return stripMobx(self.editPost)
        }
      }
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get thread() {
      return self.root.viewing.activeThread
    },
    get activeThread() {
      return self.root.viewing.activeThread
    },
  }))
  .actions(self => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    validator(type) {
      switch (type) {
        case THREAD.POST: {
          const result = changeset(self.editData)
            .exsit({ title: '文章标题或内容' }, self.changesetErr)
            .exsit({ body: '文章标题或内容' }, self.changesetErr)
            .startsWith(
              { linkAddr: '版权很重要' },
              'https://',
              self.changesetErr,
              self.copyRight !== 'original'
            )
            .done()

          return result.passed
        }
        default: {
          debug('unknow validator')
          return false
        }
      }
    },
    updateEditing(sobj) {
      const editPost = R.merge(self.editData, { ...sobj })
      self.markState({ editPost })
    },
    closePreview() {
      self.root.closePreview()
    },
    reset() {
      self.markState({
        isOriginal: true,
        copyRight: 'original',
        isEdit: false,
      })

      self.editPost = {}
      self.editJob = {}
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default TypeWriterStore
