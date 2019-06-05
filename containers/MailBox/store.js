/*
 * MailBox store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makelogger, stripMobx } from '@utils'
import { MailStatus, PagedMentionMessages, emptyPagiData } from '@model'

/* eslint-disable-next-line */
const log = makelogger('S:MailBox')

const MailBox = t
  .model('MailBox', {
    visible: t.optional(t.boolean, false),
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
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
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
