/*
 * MailsViewer store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'
import { PagedMentionMessages, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:MailsViewer')

const MailsViewer = T.model('MailsViewer', {
  pagedMentions: T.optional(PagedMentionMessages, emptyPagiData),
  readState: T.optional(T.boolean, false),
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
    get pagedMentionsData() {
      return stripMobx(self.pagedMentions)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default MailsViewer
