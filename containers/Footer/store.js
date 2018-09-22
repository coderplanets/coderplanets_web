/*
* Footer2 store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Footer')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../../stores/index && ../../stores/RootStore/index
const Footer = t
  .model('Footer', {
    showSponsor: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    sponsorHepler() {
      self.showSponsor = true
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Footer
