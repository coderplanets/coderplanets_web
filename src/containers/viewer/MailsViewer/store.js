/*
 * MailsViewer store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, toJS } from '@/utils/mobx'
import { PagedMentionMessages, emptyPagi } from '@/model'

const MailsViewer = T.model('MailsViewer', {
  pagedMentions: T.optional(PagedMentionMessages, emptyPagi),
  readState: T.optional(T.boolean, false),
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
    get root() {
      return getParent(self)
    },
    get pagedMentionsData() {
      return toJS(self.pagedMentions)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default MailsViewer
