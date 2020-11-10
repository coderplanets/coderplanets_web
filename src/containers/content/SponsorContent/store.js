/*
 * SponsorContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:SponsorContent')

const SponsorContent = T.model('SponsorContent', {
  bannerVisiable: T.optional(T.boolean, true),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default SponsorContent
