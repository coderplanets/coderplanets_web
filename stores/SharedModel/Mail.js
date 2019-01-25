import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from 'config'

// avoid cicle import
const SimpleUser = t.model('SimpleUser', {
  id: t.maybeNull(t.string),
  nickname: t.maybeNull(t.string),
  bio: t.maybeNull(t.string),
  avatar: t.maybeNull(t.string),
})

export const MailStatus = t.model('MailStatus', {
  hasMail: t.optional(t.boolean, false),
  mentionCount: t.optional(t.number, 0),
  notificationCount: t.optional(t.number, 0),
  totalCount: t.optional(t.number, 0),
})

export const MentionMsg = t.model('MentionMsg', {
  id: t.maybeNull(t.string),
  fromUser: SimpleUser,
  sourceTitle: t.string,
  sourceId: t.string,
  sourcePreview: t.maybeNull(t.string),
  sourceType: t.maybeNull(t.string),
  community: t.maybeNull(t.string),
  read: t.optional(t.boolean, false),
})

export const PagedMentionMessages = t.model('PagedMentionMessages', {
  entries: t.optional(t.array(MentionMsg), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
