import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

// avoid cicle import
const SimpleUser = T.model('SimpleUser', {
  id: T.maybeNull(T.string),
  nickname: T.maybeNull(T.string),
  bio: T.maybeNull(T.string),
  avatar: T.maybeNull(T.string),
})

export const MailStatus = T.model('MailStatus', {
  hasMail: T.optional(T.boolean, false),
  mentionCount: T.optional(T.number, 0),
  notificationCount: T.optional(T.number, 0),
  totalCount: T.optional(T.number, 0),
})

export const MentionMsg = T.model('MentionMsg', {
  id: T.maybeNull(T.string),
  fromUser: SimpleUser,
  sourceTitle: T.string,
  sourceId: T.string,
  sourcePreview: T.maybeNull(T.string),
  sourceType: T.maybeNull(T.string),

  parentId: T.maybeNull(T.string),
  parentType: T.maybeNull(T.string),
  floor: T.maybeNull(T.number),

  community: T.maybeNull(T.string),
  read: T.optional(T.boolean, false),
})

export const PagedMentionMessages = T.model('PagedMentionMessages', {
  entries: T.optional(T.array(MentionMsg), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
