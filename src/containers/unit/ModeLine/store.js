/*
 * ModeLine store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:ModeLine')

const ModeLine = T.model('ModeLine', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ModeLine
