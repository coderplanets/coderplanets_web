/*
* GirlVerifier store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:GirlVerifier')
/* eslint-enable no-unused-vars */

const GirlVerifier = t
  .model('GirlVerifier', {
    showModal: t.optional(t.boolean, false),
    message: t.optional(
      t.string,
      '我的 github 主页信息已经可以证明我是女生了。'
    ),
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
