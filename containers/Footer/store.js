/*
* Footer2 store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, ROUTE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Footer')
/* eslint-enable no-unused-vars */

const Footer = t
  .model('Footer', {
    showSponsor: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curView() {
      const { mainPath } = self.root.curRoute
      if (
        R.contains(mainPath, [
          ROUTE.USER,
          ROUTE.POST,
          ROUTE.JOB,
          ROUTE.VIDEO,
          ROUTE.REPO,
          ROUTE.COMMUNITIES,
          ROUTE.CHEATSHEET,
        ])
      ) {
        return 'BRIEF'
      }
      return 'DIGEST'
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
