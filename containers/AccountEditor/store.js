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
  changeset,
  flashState,
} from '../../utils'
import { User, EduBackground, WorkBackground } from '../../stores/SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountEditorStore')
/* eslint-enable no-unused-vars */

const AccountEditorStore = t
  .model('AccountEditorStore', {
    // user: t.optional(User, {}),
    editUser: t.optional(User, {}),
    showSocials: t.optional(t.boolean, false),

    educationBg: t.optional(EduBackground, { school: '', major: '' }),
    workBg: t.optional(WorkBackground, { company: '', title: '' }),

    updating: t.optional(t.boolean, false),
    success: t.optional(t.boolean, false),
    error: t.optional(t.boolean, false),
    warn: t.optional(t.boolean, false),
    statusMsg: t.optional(t.string, ''),
    ratKey: t.optional(t.string, ''),
  })
  .views(self => ({
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
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    validator(type) {
      const { workBackgrounds, educationBackgrounds } = self.editUserData

      switch (type) {
        case 'work': {
          const result = changeset(self.workBgData)
            .exsit({ company: '公司名称' }, self.changesetErr)
            .min({ company: '公司名称' }, 2, self.changesetErr)
            .alreadyExsits(
              {
                company: `${self.workBgData.company}, ${self.workBgData.title}`,
              },
              self.workBgData,
              workBackgrounds,
              self.changesetErr
            )
            .done()

          if (!result.passed) flashState(self, 'ratKey', result.rat)
          return result.passed
        }
        case 'education': {
          const { educationBgData } = self
          const result = changeset(educationBgData)
            .exsit({ school: '学校名称' }, self.changesetErr)
            .min({ school: '学校名称' }, 2, self.changesetErr)
            .alreadyExsits(
              {
                school: `${educationBgData.school}, ${educationBgData.major}`,
              },
              educationBgData,
              educationBackgrounds,
              self.changesetErr
            )
            .done()

          if (!result.passed) flashState(self, 'ratKey', result.rat)
          return result.passed
        }
        default: {
          debug('unknow validator')
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
      const editUser = R.merge(self.editUser, { ...sobj })
      self.markState({ editUser })
    },

    addBg(type) {
      if (!self.validator(type)) return false

      if (type === 'work') {
        let workBackgrounds = R.clone(self.editUserData.workBackgrounds)
        /* workBackgrounds.push(self.workBgData) */
        workBackgrounds = R.concat([self.workBgData], workBackgrounds)

        self.updateEditing({ workBackgrounds })
        return self.markState({ workBg: { company: '', title: '' } })
      }

      let educationBackgrounds = R.clone(self.editUserData.educationBackgrounds)
      /* educationBackgrounds.push(self.educationBgData) */
      educationBackgrounds = R.concat(
        [self.educationBgData],
        educationBackgrounds
      )
      self.updateEditing({ educationBackgrounds })
      self.markState({ educationBg: { school: '', major: '' } })
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountEditorStore
