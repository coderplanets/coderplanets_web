/*
 * SponsorContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

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
