/*
 * Footer2 store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { ROUTE } from '@constant'
import { markStates, buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:Footer')

const Footer = t
  .model('Footer', {
    showSponsor: t.optional(t.boolean, false),
    showBusBanner: t.optional(t.boolean, false),
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
    get hasTopBorder() {
      const { mainPath } = self.curRoute

      return R.contains(mainPath, [
        ROUTE.MEETUPS,
        ROUTE.COOL_GUIDE,
        ROUTE.WORKS,
        ROUTE.TRENDING,
        ROUTE.SPONSOR,
        ROUTE.SNIPPETS,
      ])
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get curView() {
      const { mainPath, subPath } = self.root.curRoute
      if (
        R.contains(mainPath, [
          ROUTE.USER,
          ROUTE.COMMUNITIES,
          ROUTE.CHEATSHEET,
        ]) ||
        R.contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default Footer
