/*
 * CollectionFolder store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge } from 'ramda'

import type { TUser, TRootStore, TArticle } from '@/spec'
import { THREAD } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { changeset } from '@/utils/validator'

import { FavoriteCategory, PagedFavoriteCategories, emptyPagi } from '@/model'

const emptyCat = {
  id: '',
  title: '',
  desc: '',
  private: false,
}

const CollectionFolder = T.model('CollectionFolder', {
  displayMode: T.optional(
    T.enumeration('displayMode', ['list', 'hide']),
    'hide',
  ),
  pagedCategories: T.optional(PagedFavoriteCategories, emptyPagi),
  editCategory: T.optional(FavoriteCategory, emptyCat),
  /* curView: T.optional(T.enumeration('curView', ['box', 'list']), 'box'), */
  showModal: T.optional(T.boolean, false),
  showUpdater: T.optional(T.boolean, false),
  showCreator: T.optional(T.boolean, false),
  showSetter: T.optional(T.boolean, false),
  // 创建或编辑的操作是否由 Setter 哪里发起，涉及文案，以及上一步、取消等逻辑
  actionFromSetter: T.optional(T.boolean, false),
  thread: T.optional(
    T.enumeration([THREAD.POST, THREAD.JOB, THREAD.REPO]),
    THREAD.POST,
  ),
  loading: T.optional(T.boolean, false),
  doing: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore

      return root.account.isLogin
    },
    get viewingUser(): TUser {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.user)
    },
    get isSelfViewing(): boolean {
      const root = getParent(self) as TRootStore
      return root.viewing.isSelfViewing
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingArticle
    },
    get editCategoryData() {
      return toJS(self.editCategory)
    },
    get pagedCategoriesData() {
      return toJS(self.pagedCategories)
    },
    get isCreatorView(): boolean {
      const { showModal, showUpdater, showCreator, showSetter } = self
      return showModal && showCreator && !showUpdater && !showSetter
    },
    get isUpdaterView(): boolean {
      const { showModal, showUpdater, showCreator, showSetter } = self
      return showModal && showUpdater && !showCreator && !showSetter
    },
    get isSetterView(): boolean {
      const { showModal, showUpdater, showCreator, showSetter } = self
      return showModal && showSetter && !showCreator && !showUpdater
    },
  }))
  .actions((self) => ({
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    isMemberOf(type): boolean {
      const root = getParent(self) as TRootStore
      return root.isMemberOf(type)
    },
    changesetErr(options): void {
      const root = getParent(self) as TRootStore
      root.changesetErr(merge({ position: 'topCenter' }, options))
    },
    updateEditing(sobj): void {
      const slf = self as TStore
      const editCategory = merge(slf.editCategoryData, { ...sobj })
      slf.mark({ editCategory })
    },
    validator(type): boolean {
      const slf = self as TStore
      switch (type) {
        case 'publish': {
          const opt = { msg: '不能为空 (请填写 #必填# 字段)' }
          const result = changeset(slf.editCategoryData)
            /* @ts-ignore */
            .exist({ title: '收藏夹名称' }, slf.changesetErr, opt)
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
    changeViewTo(view = 'creator'): void {
      // if (!self.isLogin) return self.authWarning()
      const slf = self as TStore

      switch (view) {
        case 'setter':
          return slf.mark({
            showModal: true,
            showSetter: true,
            showUpdater: false,
            showCreator: false,
          })

        case 'updater':
          return slf.mark({
            showModal: true,
            showUpdater: true,
            showCreator: false,
            showSetter: false,
          })

        default:
          return slf.mark({
            showModal: true,
            showCreator: true,
            showUpdater: false,
            showSetter: false,
          })
      }
    },
    cleanEditData(): void {
      const slf = self as TStore
      /* @ts-ignore */
      slf.editCategory = emptyCat
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CollectionFolder>
export default CollectionFolder
