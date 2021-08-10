/*
 * CommunityTagSetter store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'

import { TAG_VIEW } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityTagSetter')

const CommunityTagSetter = T.model('CommunityTagSetter', {
  tagView: T.optional(T.enumeration(values(TAG_VIEW)), TAG_VIEW.SELECT),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommunityTagSetter>

export default CommunityTagSetter
