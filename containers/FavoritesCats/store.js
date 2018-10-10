/*
 * FavoritesCats store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  FavoriteCategory,
  PagedFavoriteCategories,
  emptyPagiData,
} from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, changeset } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:FavoritesCats')
/* eslint-enable no-unused-vars */

const FavoritesCats = t
  .model('FavoritesCats', {
    pagedCategories: t.optional(PagedFavoriteCategories, emptyPagiData),
    editCategory: t.optional(FavoriteCategory, {
      title: '',
      desc: '',
      private: false,
    }),
    curView: t.optional(t.enumeration('view', ['box', 'list']), 'box'),
    showModal: t.optional(t.boolean, false),
    showUpdater: t.optional(t.boolean, false),
    showCreator: t.optional(t.boolean, false),
    showSetter: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get editCategoryData() {
      return stripMobx(self.editCategory)
    },
    get pagedCategoriesData() {
      return stripMobx(self.pagedCategories)
    },
  }))
  .actions(self => ({
    changesetErr(options) {
      self.root.changesetErr(R.merge({ position: 'topCenter' }, options))
    },
    updateEditing(sobj) {
      const editCategory = R.merge(self.editCategoryData, { ...sobj })
      self.markState({ editCategory })
    },
    validator(type) {
      switch (type) {
        case 'publish': {
          const opt = { msg: '不能为空 (请填写 #必填# 字段)' }
          const result = changeset(self.editCategoryData)
            .exsit({ title: '收藏夹名称' }, self.changesetErr, opt)
            .done()

          return result.passed
        }
        default: {
          return false
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default FavoritesCats
