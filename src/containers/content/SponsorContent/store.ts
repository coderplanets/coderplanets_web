/*
 * SponsorContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:SponsorContent')

const SponsorContent = T.model('SponsorContent', {
  bannerVisiable: T.optional(T.boolean, true),
})
  .views(() => ({}))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof SponsorContent>
export default SponsorContent
