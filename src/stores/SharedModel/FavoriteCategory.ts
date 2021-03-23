import { types as T } from 'mobx-state-tree'
import { PAGE_SIZE } from '@/config'

export const FavoriteCategory = T.model('FavoriteCategory', {
  id: T.maybeNull(T.string),
  title: T.optional(T.string, ''),
  desc: T.maybeNull(T.string),
  totalCount: T.optional(T.number, 0),
  private: T.optional(T.boolean, false),
  updatedAt: T.optional(T.string, ''),
})

export const PagedFavoriteCategories = T.model('PagedFavoriteCategories', {
  entries: T.optional(T.array(FavoriteCategory), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
