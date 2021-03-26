/*
 * MailBox store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore } from '@/spec'

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
    'mentions',
  ),
  loading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get mailStatusData() {
      return stripMobx(self.mailStatus)
    },
    get pagedMentionsData() {
      return stripMobx(self.pagedMentions)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof MailBox>
export default MailBox
