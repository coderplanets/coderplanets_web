/*
 * MailBox store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import {
  MailStatus,
  PagedMentionMessages,
  emptyPagiData,
} from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:MailBox')
/* eslint-enable no-unused-vars */

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
