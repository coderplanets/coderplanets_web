import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

// NOTE: the SimpleXXX version is to avoid circle import issue which cause MST error
const SimpleCommunity = T.model('SimpleCommunity', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  desc: T.optional(T.string, ''),
  raw: T.maybeNull(T.string),
  logo: T.maybeNull(T.string),
})

const SimpleUser = T.model('SimpleUser', {
  id: T.maybeNull(T.string),
  nickname: T.maybeNull(T.string),
  bio: T.maybeNull(T.string),
  avatar: T.maybeNull(T.string),
})

export const Category = T.model('Category', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  raw: T.maybeNull(T.string),
  index: T.maybeNull(T.number),
  communities: T.optional(T.array(SimpleCommunity), []),
  author: T.optional(SimpleUser, {}),
  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
})

export const PagedCategories = T.model('PagedCategories', {
  entries: T.optional(T.array(Category), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
