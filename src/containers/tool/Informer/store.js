/*
 * Informer store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge } from 'ramda'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:Informer')

const Informer = T.model('Informer', {
  showModal: T.optional(T.boolean, false),
  curView: T.optional(
    T.enumeration('curView', ['overview', 'form']),
    'overview',
  ),
  type: T.optional(T.string, ''),
  message: T.optional(T.string, ''),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions((self) => ({
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

export default Informer
