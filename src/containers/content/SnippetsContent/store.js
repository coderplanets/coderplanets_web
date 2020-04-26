/*
 * SnippetsContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { SNIPPET } from '@constant'
import { markStates, buildLog } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('S:SnippetsContent')

const SnippetsContent = t
  .model('SnippetsContent', {
    displayType: t.optional(
      t.enumeration([SNIPPET.LIST, SNIPPET.MASONRY, SNIPPET.DEFAULT]),
      SNIPPET.DEFAULT
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default SnippetsContent
