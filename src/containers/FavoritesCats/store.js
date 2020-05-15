/*
 * FavoritesCats store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, changeset } from '@/utils'

import {
  FavoriteCategory,
  PagedFavoriteCategories,
  emptyPagiData,
} from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:FavoritesCats')

const emptyCat = {
  id: '',
  title: '',
  desc: '',
  private: false,
}

const FavoritesCats = T.model('FavoritesCats', {
  displayMode: T.optional(
    T.enumeration('displayMode', ['list', 'hide']),
    'hide'
  ),
  pagedCategories: T.optional(PagedFavoriteCategories, emptyPagiData),
  editCategory: T.optional(FavoriteCategory, emptyCat),
  /* curView: T.optional(T.enumeration('curView', ['box', 'list']), 'box'), */
  showModal: T.optional(T.boolean, false),
  showUpdater: T.optional(T.boolean, false),
  showCreator: T.optional(T.boolean, false),
  showSetter: T.optional(T.boolean, false),
  // open creator from setter, so we can go back to setter based on this state
  createfromSetter: T.optional(T.boolean, false),
  thread: T.maybeNull(
    T.enumeration(
      [THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO],
      THREAD.POST
    )
  ),
  loading: T.optional(T.boolean, false),
  doing: T.optional(T.boolean, false),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get isSelfViewing() {
      return self.root.viewing.isSelfViewing
    },
    // NOTE: can't not use root's viewingData because the
    // activeThread is not right on user's page
    // and it's passible set/unset favrites on user's page
    get viewingData() {
      switch (self.thread) {
        case THREAD.JOB:
          return stripMobx(self.root.viewing.job)

        case THREAD.REPO:
          return stripMobx(self.root.viewing.repo)

        case THREAD.VIDEO:
          return stripMobx(self.root.viewing.video)

        default:
          return stripMobx(self.root.viewing.post)
      }
    },

    get editCategoryData() {
      return stripMobx(self.editCategory)
    },
    get pagedCategoriesData() {
      return stripMobx(self.pagedCategories)
    },
    get isCreatorView() {
      const { showModal, showUpdater, showCreator, showSetter } = self
      return showModal && showCreator && !showUpdater && !showSetter
    },
    get isUpdaterView() {
      const { showModal, showUpdater, showCreator, showSetter } = self
      return showModal && showUpdater && !showCreator && !showSetter
    },
    get isSetterView() {
      const { showModal, showUpdater, showCreator, showSetter } = self
      return showModal && showSetter && !showCreator && !showUpdater
    },
    get hasLockAuth() {
      return self.isMemberOf('seniorMember') || self.isMemberOf('sponsorMember')
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    isMemberOf(type) {
      return self.root.isMemberOf(type)
    },
    changesetErr(options) {
      self.root.changesetErr(R.merge({ position: 'topCenter' }, options))
    },
    updateEditing(sobj) {
      const editCategory = R.merge(self.editCategoryData, { ...sobj })
      self.mark({ editCategory })
    },
    validator(type) {
      switch (type) {
        case 'publish': {
          const opt = { msg: '不能为空 (请填写 #必填# 字段)' }
          const result = changeset(self.editCategoryData)
            .exist({ title: '收藏夹名称' }, self.changesetErr, opt)
            .done()

          return result.passed
        }
        default: {
          return false
        }
      }
    },
    /*
    updateCategory(cat) {
      const { id } = cat
      const pagedCategoriesData = R.clone(self.pagedCategoriesData)
      const { entries } = pagedCategoriesData
      const index = R.findIndex(R.propEq('id', id), entries)

      if (index >= 0) {
        entries[index] = R.merge(entries[index], { ...cat })
        self.pagedCategories = R.merge(pagedCategoriesData, { entries })
      }
    },
    */
    changeViewTo(view = 'creator') {
      if (!self.isLogin) return self.authWarning()

      switch (view) {
        case 'setter':
          return self.mark({
            showModal: true,
            showSetter: true,
            showUpdater: false,
            showCreator: false,
          })

        case 'updater':
          return self.mark({
            showModal: true,
            showUpdater: true,
            showCreator: false,
            showSetter: false,
          })

        default:
          return self.mark({
            showModal: true,
            showCreator: true,
            showUpdater: false,
            showSetter: false,
          })
      }
    },
    cleanEditData() {
      self.editCategory = emptyCat
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default FavoritesCats
