/*
 * PostEditor store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { Post, Mention } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, changeset } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('S:PostEditorf')

const PostEditor = t
  .model('PostEditor', {
    editPost: t.optional(Post, {}),

    mentionList: t.optional(t.array(Mention), []),
    // current "@user" in valid array format
    referUsers: t.optional(t.array(Mention), []),
    // current "@user" in string list
    extractMentions: t.optional(t.array(t.string), []),

    curView: t.optional(
      t.enumeration('curView', [
        'MARKDOWN_HELP_VIEW',
        'EDIT_VIEW',
        'CREATE_VIEW',
        'PREVIEW_VIEW',
      ]),
      'CREATE_VIEW'
    ),

    publishing: t.optional(t.boolean, false),
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
    get curRoute() {
      return self.root.curRoute
    },
    get statusClean() {
      const { success, error, warn } = self
      return !success && !error && !warn
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get editData() {
      return stripMobx(self.editPost)
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
    get labelsData() {
      return self.root.labeler.labelsData
    },
    get mentionListData() {
      return stripMobx(self.mentionList)
    },
    get referUsersData() {
      const referUsers = stripMobx(self.referUsers)
      const extractMentions = stripMobx(self.extractMentions)
      return R.filter(
        user => R.contains(user.name, extractMentions),
        referUsers
      )
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
        case 'general': {
          const result = changeset(self.editData)
            .exsit({ title: '文章标题或内容' }, self.changesetErr)
            .exsit({ body: '文章标题或内容' }, self.changesetErr)
            // .exsit({ linkAddr: '原链接地址' }, self.changesetErr)
            .startsWith(
              { linkAddr: '原链接地址' },
              'https://',
              self.changesetErr,
              self.editData.copyRight !== 'original'
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
      return self.markState({ editPost })
    },
    reset() {
      self.markState({ isEdit: false, mentionList: [] })
      self.editPost = { title: '', body: '' }
      self.editJob = { title: '', body: '' }
    },
    updateMentionList(mentionArray) {
      const curMentionList = R.clone(self.mentionList)
      const uniqList = R.uniq(R.concat(curMentionList, mentionArray))
      const mentionList = R.map(m => ({ ...m, name: m.nickname }), uniqList)
      self.mentionList = mentionList
    },
    addReferUser(user) {
      const index = R.findIndex(u => u.id === String(user.id), self.referUsers)
      if (index === -1) {
        self.referUsers.push({
          id: String(user.id),
          name: user.name,
          avatar: user.avatar,
        })
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostEditor
