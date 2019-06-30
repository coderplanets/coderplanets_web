/*
 * GirlVerifier store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:GirlVerifier')

const GirlVerifier = t
  .model('GirlVerifier', {
    showModal: t.optional(t.boolean, false),
    message: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
  }))
  .actions(self => ({
    show() {
      self.showModal = true
    },
    toastDone(options) {
      self.root.toast('success', R.merge({ position: 'topCenter' }, options))
    },
    toastError(options) {
      self.root.toast('error', R.merge({ position: 'topCenter' }, options))
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default GirlVerifier
