import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

export const timestampFields = () => {
  return {
    insertedAt: T.optional(T.string, ''),
    updatedAt: T.optional(T.string, ''),
  }
}

export const pagiFields = () => {
  return {
    pageNumber: T.optional(T.number, 1),
    pageSize: T.optional(T.number, PAGE_SIZE.D),
    totalCount: T.optional(T.number, 0),
    totalPages: T.optional(T.number, 0),
  }
}

export const emptyPagi = {
  entries: [],
  pageNumber: 1,
  pageSize: PAGE_SIZE.D,
  totalCount: 0,
  totalPages: 0,
}
