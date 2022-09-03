/*
 * ModeLineMenu store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { prop, trim, filter, contains } from 'ramda'

import type { TRootStore, TArticle, TCommunity } from '@/spec'
import { sortByIndex } from '@/utils/helper'
import { markStates, toJS } from '@/utils/mobx'
import { notEmpty } from '@/utils/validator'

import type { TCurActive } from './spec'

const ModeLineMenu = T.model('ModeLineMenu', {
  searchCommunityValue: T.optional(T.string, ''),
})
  .views((self) => ({
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewingArticle)
    },
    get curActive(): TCurActive {
      const root = getParent(self) as TRootStore
      const slf = self as TStore

      return {
        community: toJS(root.viewing.community),
        thread: root.viewing.activeThread,
        article: toJS(slf.viewingArticle),
      }
    },
    get subscribedCommunities(): TCommunity[] {
      const root = getParent(self) as TRootStore
      const { subscribedCommunities } = root.account
      const { searchCommunityValue } = self as TStore

      if (notEmpty(trim(searchCommunityValue))) {
        return filter(
          // @ts-ignore
          (item) => contains(searchCommunityValue, prop('title', item)),
          subscribedCommunities.entries,
        )
      }

      return subscribedCommunities
        ? sortByIndex(subscribedCommunities.entries)
        : []
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ModeLineMenu>
export default ModeLineMenu
