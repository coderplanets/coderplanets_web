/*
 * MailBox store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore } from '@/spec'

import { markStates, toJS } from '@/utils/mobx'
import { MailStatus, PagedMentionMessages, emptyPagi } from '@/model'

const MailBox = T.model('MailBox', {
  panelVisiable: T.optional(T.boolean, false),
  mailStatus: T.optional(MailStatus, {}),
  pagedMentions: T.optional(PagedMentionMessages, emptyPagi),
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
      return toJS(self.mailStatus)
    },
    get pagedMentionsData() {
      return toJS(self.pagedMentions)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof MailBox>
export default MailBox
