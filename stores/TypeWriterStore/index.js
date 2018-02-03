/*
 * TypeWriterStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:TypeWriterStore')
/* eslint-enable no-unused-vars */

const TypeWriterStore = t
  .model('TypeWriterStore', {
    title: t.optional(t.string, ''),
    linkAddr: t.optional(t.string, ''),
    body: t.optional(t.string, ''),
    publishing: t.optional(t.boolean, false),

    isOriginal: t.optional(t.boolean, true),
    articleType: t.optional(
      t.enumeration('articleType', ['original', 'reprint', 'translate']),
      'original'
    ),
    curView: t.optional(
      t.enumeration('curView', [
        'MARKDOWN_HELP_VIEW',
        'EDIT_VIEW',
        'CREATE_VIEW',
        'PREVIEW_VIEW',
      ]),
      'CREATE_VIEW'
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default TypeWriterStore
