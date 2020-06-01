/*
 * MailBox store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'
import { MailStatus, PagedMentionMessages, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:MailBox')

const MailBox = T.model('MailBox', {
  panelVisiable: T.optional(T.boolean, false),
  mailStatus: T.optional(MailStatus, {}),
  pagedMentions: T.optional(PagedMentionMessages, emptyPagiData),
  activeRaw: T.optional(
    T.enumeration('notifications', [
      'notifications',
      'mentions',
      'sys_notifications',
    ]),
    'mentions'
  ),
  loading: T.optional(T.boolean, false),
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default MailBox
