/*
* Footer2 store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, ROUTE } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:Footer')

const Footer = t
  .model('Footer', {
    showSponsor: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
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
    authWarning(options) {
      self.root.authWarning(options)
    },
    cashierHelper(opt) {
      self.root.cashierHelper(opt)
    },
    sponsorHepler() {
      self.showSponsor = true
    },
    upgradeHepler() {
      self.root.upgradeHepler()
    },
    closeSponsor() {
      self.showSponsor = false
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Footer
