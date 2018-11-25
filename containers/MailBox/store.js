/*
 * MailBox store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { PAGE_SIZE } from '../../config'
import { emptyPagiData, User } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:MailBox')
/* eslint-enable no-unused-vars */

const MailStatus = t.model('MailStatus', {
  hasMail: t.optional(t.boolean, false),
  mentionCount: t.optional(t.number, 0),
  notificationCount: t.optional(t.number, 0),
  totalCount: t.optional(t.number, 0),
})

const MentionMsg = t.model('MentionMsg', {
  id: t.maybeNull(t.string),
  fromUser: User,
  sourceTitle: t.string,
  sourcePreview: t.maybeNull(t.string),
  sourceType: t.maybeNull(t.string),
  read: t.optional(t.boolean, false),
})

export const PagedMentionMessages = t.model('PagedMentionMessages', {
  entries: t.optional(t.array(MentionMsg), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})

const MailBox = t
  .model('MailBox', {
    panelVisiable: t.optional(t.boolean, false),
    mailStatus: t.optional(MailStatus, {}),
    pagedMentions: t.optional(PagedMentionMessages, emptyPagiData),
    activeRaw: t.optional(
      t.enumeration('notifications', [
        'notifications',
        'mentions',
        'sys_notifications',
      ]),
      'mentions'
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get mailStatusData() {
      return stripMobx(self.mailStatus)
    },
    get pagedMentionsData() {
      return stripMobx(self.pagedMentions)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default MailBox
