/*
 * Share store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TCommunity, TRootStore } from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'

import { SITE_SHARE_TYPE } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:Share')

const Share = T.model('Share', {
  show: T.optional(T.boolean, false),
  siteShareType: T.optional(
    T.enumeration(values(SITE_SHARE_TYPE)),
    SITE_SHARE_TYPE.LINKS,
  ),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof Share>

export default Share
