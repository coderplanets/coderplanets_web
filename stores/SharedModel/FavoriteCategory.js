import { types as t } from 'mobx-state-tree'
import { PAGE_SIZE } from 'config'

export const FavoriteCategory = t.model('FavoriteCategory', {
  id: t.maybeNull(t.string),
  title: t.optional(t.string, ''),
  desc: t.maybeNull(t.string),
  totalCount: t.optional(t.number, 0),
  private: t.optional(t.boolean, false),
  updatedAt: t.optional(t.string, ''),
})

export const PagedFavoriteCategories = t.model('PagedFavoriteCategories', {
  entries: t.optional(t.array(FavoriteCategory), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
