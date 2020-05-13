import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

// NOTE: the SimpleXXX version is to avoid circle import issue which cause MST error
const SimpleCommunity = t.model('SimpleCommunity', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  desc: t.optional(t.string, ''),
  raw: t.maybeNull(t.string),
  logo: t.maybeNull(t.string),
})

const SimpleUser = t.model('SimpleUser', {
  id: t.maybeNull(t.string),
  nickname: t.maybeNull(t.string),
  bio: t.maybeNull(t.string),
  avatar: t.maybeNull(t.string),
})

export const Category = t.model('Category', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  raw: t.maybeNull(t.string),
  index: t.maybeNull(t.number),
  communities: t.optional(t.array(SimpleCommunity), []),
  author: t.optional(SimpleUser, {}),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedCategories = t.model('PagedCategories', {
  entries: t.optional(t.array(Category), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
