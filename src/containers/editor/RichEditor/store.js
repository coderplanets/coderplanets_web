/*
 * RichEditor store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:RichEditor')

// NOTE: add me to stores/index && stores/RootStore/index
const RichEditor = t
  .model('RichEditor', {})
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

export default RichEditor
