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
    type: t.optional(t.enumeration('visibleType', ['post', 'user']), 'post'),
    // header:
    // body:
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    open(type) {
      self.visible = !self.visible
      self.type = type === 'user' ? 'user' : 'post'
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
