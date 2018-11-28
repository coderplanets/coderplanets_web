/*
 * MailsViewer store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { PagedMentionMessages, emptyPagiData } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:MailsViewer')
/* eslint-enable no-unused-vars */

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
