/*
 * JobEditorStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import {
  merge,
  filter,
  contains,
  clone,
  uniq,
  concat,
  map,
  findIndex,
} from 'ramda'

import { THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, changeset } from '@/utils'
import { Job } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:JobEditorStore')

const Mention = T.model('Mention', {
  id: T.string,
  name: T.string,
  avatar: T.string,
})

const JobEditorStore = T.model('JobEditorStore', {
  editJob: T.optional(Job, {}),

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
  contentDomId: T.optional(T.string, 'job_editor_content_id'),

  publishing: T.optional(T.boolean, false),
  isEdit: T.optional(T.boolean, false),
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
      return stripMobx(self.editJob)
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
            .startsWith(
              { linkAddr: '原链接地址' },
              'https://',
              self.changesetErr,
              self.editData.copyRight !== 'original'
            )
            .done()

          return result.passed
        }
        case `${THREAD.JOB}_LABELS`: {
          const result = changeset(self.labelsData)
            .exist({ tags: '所在城市' }, self.changesetErr)
            .exist({ salary: '月薪' }, self.changesetErr)
            .exist({ education: '学历要求' }, self.changesetErr)
            .exist({ exp: '工作经验' }, self.changesetErr)
            .exist({ field: '领域(主要业务)' }, self.changesetErr)
            .exist({ finance: '公司融资情况' }, self.changesetErr)
            .exist({ scale: '公司规模' }, self.changesetErr)
            .done()

          return result.passed
        }
        case 'companyInfo': {
          const result = changeset(self.editData)
            .exist({ company: '公司名称' }, self.changesetErr)
            .exist({ companyLogo: '公司Logo' }, self.changesetErr)
            .exist({ companyLink: '公司主页' }, self.changesetErr)
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
      const editJob = merge(self.editData, { ...sobj })
      return self.mark({ editJob })
    },
    reset() {
      self.mark({ isEdit: false, mentionList: [] })
      self.editJob = { title: '', body: '' }
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

export default JobEditorStore
