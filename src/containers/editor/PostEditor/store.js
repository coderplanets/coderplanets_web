/*
 * PostEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import {
  merge,
  map,
  uniq,
  concat,
  clone,
  findIndex,
  filter,
  contains,
} from 'ramda'

import { markStates, buildLog, stripMobx, changeset } from '@/utils'
import { Post, Mention } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:PostEditorf')

const PostEditor = T.model('PostEditor', {
  editPost: T.optional(Post, {}),

  mentionList: T.optional(T.array(Mention), []),
  // current "@user" in valid array format
  referUsers: T.optional(T.array(Mention), []),
  // current "@user" in string list
  extractMentions: T.optional(T.array(T.string), []),

  curView: T.optional(
    T.enumeration('curView', [
      'MARKDOWN_HELP_VIEW',
      'EDIT_VIEW',
      'CREATE_VIEW',
      'PREVIEW_VIEW',
    ]),
    'CREATE_VIEW'
  ),
  contentDomId: T.optional(T.string, 'post_editor_content_id'),

  publishing: T.optional(T.boolean, false),
  // TODO: rename to isEditMode
  isEdit: T.optional(T.boolean, false),
  /* show radar note if radar source not supported */
  showRadarNote: T.optional(T.boolean, false),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
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
      return filter(user => contains(user.name, extractMentions), referUsers)
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
            .exist({ title: '文章标题或内容' }, self.changesetErr)
            .exist({ body: '文章标题或内容' }, self.changesetErr)
            // .exist({ linkAddr: '原链接地址' }, self.changesetErr)
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
          log('unknow validator')
          return false
        }
      }
    },
    updateEditing(sobj) {
      const editPost = merge(self.editData, { ...sobj })
      return self.mark({ editPost })
    },
    reset() {
      self.mark({ isEdit: false, mentionList: [] })
      self.editPost = { title: '', body: '' }
    },
    updateMentionList(mentionArray) {
      const curMentionList = clone(self.mentionList)
      const uniqList = uniq(concat(curMentionList, mentionArray))
      const mentionList = map(m => ({ ...m, name: m.nickname }), uniqList)
      self.mentionList = mentionList
    },
    addReferUser(user) {
      const index = findIndex(u => u.id === String(user.id), self.referUsers)
      if (index === -1) {
        self.referUsers.push({
          id: String(user.id),
          name: user.name,
          avatar: user.avatar,
        })
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostEditor
