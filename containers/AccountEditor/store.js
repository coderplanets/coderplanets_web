/*
 * AccountEditorStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  markStates,
  makeDebugger,
  stripMobx,
  objAlreadyExsits,
} from '../../utils'
import { User, EduBackground, WorkBackground } from '../../stores/SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountEditorStore')
/* eslint-enable no-unused-vars */

const AccountEditorStore = t
  .model('AccountEditorStore', {
    // user: t.optional(User, {}),
    // TODO: rename to editObj
    editingUser: t.optional(User, {}),
    showSocials: t.optional(t.boolean, false),

    educationBg: t.optional(EduBackground, { school: '', major: '' }),
    workBg: t.optional(WorkBackground, { company: '', title: '' }),

    updating: t.optional(t.boolean, false),
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
    get editingUserData() {
      return {
        ...stripMobx(self.editingUser),
      }
    },
    get educationBgData() {
      return {
        ...stripMobx(self.educationBg),
      }
    },
    get workBgData() {
      return {
        ...stripMobx(self.workBg),
      }
    },
    get accountOrigin() {
      return self.root.account.accountInfo
    },
  }))
  .actions(self => ({
    toast(type, options) {
      self.root.toast(type, options)
    },

    copyAccountInfo() {
      const { accountInfo } = self.root.account
      if (accountInfo !== {}) {
        self.editingUser = accountInfo
      }
    },

    updateAccount(user) {
      self.root.account.updateAccount(user)
      self.root.updateViewingIfNeed('user', user)
    },

    updateEditing(sobj) {
      const editingUser = R.merge(self.editingUser, { ...sobj })
      self.markState({ editingUser })
    },

    addBg(type) {
      if (!self.validator(type)) return false

      if (type === 'work') {
        let workBackgrounds = R.clone(self.editingUserData.workBackgrounds)
        /* workBackgrounds.push(self.workBgData) */
        workBackgrounds = R.concat([self.workBgData], workBackgrounds)

        self.updateEditing({ workBackgrounds })
        return self.markState({ workBg: { company: '', title: '' } })
      }

      let educationBackgrounds = R.clone(
        self.editingUserData.educationBackgrounds
      )
      /* educationBackgrounds.push(self.educationBgData) */
      educationBackgrounds = R.concat(
        [self.educationBgData],
        educationBackgrounds
      )
      self.updateEditing({ educationBackgrounds })
      self.markState({ educationBg: { school: '', major: '' } })
    },

    validator(type) {
      const { workBackgrounds, educationBackgrounds } = self.editingUserData

      switch (type) {
        case 'work': {
          if (R.isEmpty(self.workBgData.company))
            return self.toast('error', { title: '公司名称', msg: '不能为空' })
          if (objAlreadyExsits(self.workBgData, workBackgrounds))
            return self.toast('error', { title: '工作经历', msg: '已经存在' })

          return true
        }
        case 'education': {
          if (R.isEmpty(self.educationBgData.school))
            return self.toast('error', { title: '学校名称', msg: '不能为空' })

          if (objAlreadyExsits(self.educationBgData, educationBackgrounds))
            return self.toast('error', { title: '教育经历', msg: '已经存在' })

          return true
        }
        default: {
          debug('unknow validator')
          return false
        }
      }
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountEditorStore
