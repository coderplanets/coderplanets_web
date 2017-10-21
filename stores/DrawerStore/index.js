/*
 * DrawerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

// import { isObject, makeDebugger } from '../../utils/functions'
import { isObject } from '../../utils/functions'

// const debug = makeDebugger('S:DrawerStore')

const DrawerStore = t
  .model('DrawerStore', {
    visible: t.optional(t.boolean, false),
    // header:
    // body:
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    open() {
      self.visible = !self.visible
      // true
    },

    close() {
      self.visible = false
    },

    // TODO: not need?
    markState(sobj) {
      if (!isObject(sobj)) {
        throw new Error('S:DrawerStore markState get no object params')
      }
      R.forEachObjIndexed((val, key) => {
        self[key] = val
      }, sobj)
    },
  }))

export default DrawerStore
