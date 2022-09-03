/*
 * SubscribeContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates } from '@/utils/mobx'

const SubscribeContent = T.model('SubscribeContent', {
  subscribeView: T.optional(T.enumeration(['default', 'detail']), 'default'),
})
  // .views((self) => ({}))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof SubscribeContent>
export default SubscribeContent
