/*
 * AccountEditorStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge, clone, concat } from 'ramda'

import { markStates, buildLog, stripMobx, changeset, flashState } from '@/utils'
import { User, EduBackground, WorkBackground } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:AccountEditorStore')

const AccountEditorStore = T.model('AccountEditorStore', {
  // user: T.optional(User, {}),
  editUser: T.optional(User, {}),
  showSocials: T.optional(T.boolean, false),

  educationBg: T.optional(EduBackground, { school: '', major: '' }),
  workBg: T.optional(WorkBackground, { company: '', title: '' }),

  updating: T.optional(T.boolean, false),
  success: T.optional(T.boolean, false),
  error: T.optional(T.boolean, false),
  warn: T.optional(T.boolean, false),
  statusMsg: T.optional(T.string, ''),
  ratKey: T.optional(T.string, ''),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get statusClean() {
      const { success, error, warn } = self
      return !success && !error && !warn
    },
    get editUserData() {
      return {
        ...stripMobx(self.editUser),
      }
    },
    get educationBgData() {
      return stripMobx(self.educationBg)
    },
    get workBgData() {
      return stripMobx(self.workBg)
    },
    get accountOrigin() {
      return self.root.account.accountInfo
    },
  }))
  .actions((self) => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    validator(type) {
      const { workBackgrounds, educationBackgrounds } = self.editUserData

      switch (type) {
        case 'work': {
          const result = changeset(self.workBgData)
            .exist({ company: '公司名称' }, self.changesetErr)
            .min({ company: '公司名称' }, 2, self.changesetErr)
            .alreadyExists(
              {
                company: `${self.workBgData.company}, ${self.workBgData.title}`,
              },
              self.workBgData,
              workBackgrounds,
              self.changesetErr,
            )
            .done()

          if (!result.passed) flashState(self, 'ratKey', result.rat)
          return result.passed
        }
        case 'education': {
          const { educationBgData } = self
          const result = changeset(educationBgData)
            .exist({ school: '学校名称' }, self.changesetErr)
            .min({ school: '学校名称' }, 2, self.changesetErr)
            .alreadyExists(
              {
                school: `${educationBgData.school}, ${educationBgData.major}`,
              },
              educationBgData,
              educationBackgrounds,
              self.changesetErr,
            )
            .done()

          if (!result.passed) flashState(self, 'ratKey', result.rat)
          return result.passed
        }
        default: {
          log('unknow validator')
          return false
        }
      }
    },

    copyAccountInfo() {
      const { accountInfo } = self.root.account
      if (accountInfo !== {}) {
        self.editUser = accountInfo
      }
    },

    updateAccount(user) {
      self.root.account.updateAccount(user)
      self.root.updateViewingIfNeed('user', user)
    },

    updateEditing(sobj) {
      const editUser = merge(self.editUser, { ...sobj })
      self.mark({ editUser })
    },

    addBackground(type) {
      if (!self.validator(type)) return false

      if (type === 'work') {
        let workBackgrounds = clone(self.editUserData.workBackgrounds)
        workBackgrounds = concat([self.workBgData], workBackgrounds)

        self.updateEditing({ workBackgrounds })
        return self.mark({ workBg: { company: '', title: '' } })
      }

      let educationBackgrounds = clone(self.editUserData.educationBackgrounds)
      educationBackgrounds = concat(
        [self.educationBgData],
        educationBackgrounds,
      )
      self.updateEditing({ educationBackgrounds })
      self.mark({ educationBg: { school: '', major: '' } })
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountEditorStore
