/*
 * SubscribeContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:SubscribeContent')

const SubscribeContent = T.model('SubscribeContent', {
  subscribeView: T.optional(T.enumeration(['default', 'detail']), 'default'),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default SubscribeContent
