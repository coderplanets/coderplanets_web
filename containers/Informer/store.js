/*
* Informer store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Informer')
/* eslint-enable no-unused-vars */

const Informer = t
  .model('Informer', {
    showModal: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    show() {
      self.show = true
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Informer
