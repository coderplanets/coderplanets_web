/*
 * MailsViewer store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makelogger, stripMobx } from '@utils'
import { PagedMentionMessages, emptyPagiData } from '@model'

/* eslint-disable-next-line */
const log = makelogger('S:MailsViewer')

const MailsViewer = t
  .model('MailsViewer', {
    pagedMentions: t.optional(PagedMentionMessages, emptyPagiData),
    readState: t.optional(t.boolean, false),
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
    get pagedMentionsData() {
      return stripMobx(self.pagedMentions)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default MailsViewer
