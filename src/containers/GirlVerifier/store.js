/*
 * GirlVerifier store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge } from 'ramda'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:GirlVerifier')

const GirlVerifier = T.model('GirlVerifier', {
  showModal: T.optional(T.boolean, false),
  message: T.optional(T.string, ''),
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
      self.root.toast('success', merge({ position: 'topCenter' }, options))
    },
    toastError(options) {
      self.root.toast('error', merge({ position: 'topCenter' }, options))
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default GirlVerifier
