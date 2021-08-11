/*
 * CommunityTagSetter store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, filter, reject, includes, map, uniq } from 'ramda'

import type { TID, TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { mockCommunities } from '@/utils/mock'

import type { TCommunitiesList } from './spec'
import { TAG_VIEW, COMMUNITY_VIEW, COMMUNITY_ACTION } from './constant'
import { Community, PagedCommunities } from '@/model/Community'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityTagSetter')

export type TCommunitiesData = {
  selectedCommunities: TCommunity[]
  searchedCommunities: TCommunity[]
  commonUsedCommunities: TCommunity[]
}

// const allCommunities = mockCommunities(5)
const CommunityTagSetter = T.model('CommunityTagSetter', {
  tagView: T.optional(T.enumeration(values(TAG_VIEW)), TAG_VIEW.SELECT),
  communityView: T.optional(
    T.enumeration(values(COMMUNITY_VIEW)),
    COMMUNITY_VIEW.DEFAULT,
  ),
  communityAction: T.optional(
    T.enumeration(values(COMMUNITY_ACTION)),
    COMMUNITY_ACTION.MIRROR,
  ),
  communitySearchValue: T.optional(T.string, ''),
  //
  communitiesSearching: T.optional(T.boolean, false),
  selectedCommunities: T.optional(T.array(Community), []),
  searchedCommunities: T.optional(T.array(Community), []),
  commonUsedCommunities: T.optional(T.array(Community), mockCommunities(5)),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get communitiesList(): TCommunitiesList {
      return {
        searching: self.communitiesSearching,
        searchValue: self.communitySearchValue,
        selectedCommunities: toJS(self.selectedCommunities),
        // searchedCommunities: toJS(self.searchedCommunities),
        searchedCommunities: reject(
          (c) =>
            includes(
              c.id,
              map((s) => s.id, toJS(self.selectedCommunities)),
            ),
          toJS(self.searchedCommunities),
        ),

        // commonUsedCommunities: toJS(self.commonUsedCommunities),
        commonUsedCommunities: reject(
          (c) =>
            includes(
              c.id,
              map((s) => s.id, toJS(self.selectedCommunities)),
            ),
          toJS(self.commonUsedCommunities),
        ),
      }
    },

    get selectableCommunities(): TCommunity[] {
      const { commonUsedCommunities, searchedCommunities } = self

      return uniq([
        ...toJS(searchedCommunities),
        ...toJS(commonUsedCommunities),
      ])
    },
  }))
  .actions((self) => ({
    selectCommunity(id: TID): void {
      const slf = self as TStore
      const { selectableCommunities, selectedCommunities } = slf

      const targetCommunities = filter(
        (c) => c.id === id,
        selectableCommunities,
      )

      slf.mark({
        selectedCommunities: uniq([
          ...toJS(selectedCommunities),
          ...targetCommunities,
        ]),
      })
    },

    undoSelectCommunity(id: TID): void {
      const slf = self as TStore
      const { selectedCommunities } = slf

      slf.mark({
        selectedCommunities: reject(
          (c: TCommunity) => c.id === id,
          toJS(selectedCommunities),
        ),
      })
    },

    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommunityTagSetter>

export default CommunityTagSetter
