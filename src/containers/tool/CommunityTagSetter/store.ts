/*
 * CommunityTagSetter store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, filter, reject, includes, map, uniq } from 'ramda'

import type { TID, TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { mockCommunities } from '@/utils/mock'

import type { TCommunitiesList, TTagsList } from './spec'
import { TAG_VIEW, COMMUNITY_VIEW, TYPE } from './constant'
import { Community, Tag } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityTagSetter')

export type TCommunitiesData = {
  selectedCommunities: TCommunity[]
  searchedCommunities: TCommunity[]
  commonUsedCommunities: TCommunity[]
}

// const allCommunities = mockCommunities(5)
const CommunityTagSetter = T.model('CommunityTagSetter', {
  show: T.optional(T.boolean, false),
  type: T.optional(T.enumeration(values(TYPE)), TYPE.MIRROR_COMMUNITY),
  tagView: T.optional(T.enumeration(values(TAG_VIEW)), TAG_VIEW.SELECT),
  communityView: T.optional(
    T.enumeration(values(COMMUNITY_VIEW)),
    COMMUNITY_VIEW.DEFAULT,
  ),
  // communities states
  communitySearchValue: T.optional(T.string, ''),
  communitiesSearching: T.optional(T.boolean, false),
  selectedCommunities: T.optional(T.array(Community), []),
  searchedCommunities: T.optional(T.array(Community), []),
  commonUsedCommunities: T.optional(T.array(Community), mockCommunities(5)),

  // tags states
  tagsLoading: T.optional(T.boolean, false),
  tags: T.optional(T.array(Tag), []),
  selectedTags: T.optional(T.array(Tag), []),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
    get communitiesList(): TCommunitiesList {
      const slf = self as TStore
      return {
        canActOnSeleted: slf.canActOnSeleted,
        searching: slf.communitiesSearching,
        searchValue: slf.communitySearchValue,
        selectedCommunities: toJS(slf.selectedCommunities),
        // searchedCommunities: toJS(self.searchedCommunities),
        searchedCommunities: reject(
          (c) =>
            includes(
              c.id,
              map((s) => s.id, toJS(slf.selectedCommunities)),
            ),
          toJS(slf.searchedCommunities),
        ),

        // commonUsedCommunities: toJS(self.commonUsedCommunities),
        commonUsedCommunities: reject(
          (c) =>
            includes(
              c.id,
              map((s) => s.id, toJS(slf.selectedCommunities)),
            ),
          toJS(slf.commonUsedCommunities),
        ),
      }
    },
    get tagsList(): TTagsList {
      return {
        loading: self.tagsLoading,
        tags: toJS(self.tags),
        selectedTags: toJS(self.selectedTags),
      }
    },
    get selectableCommunities(): TCommunity[] {
      const { commonUsedCommunities, searchedCommunities } = self

      return uniq([
        ...toJS(searchedCommunities),
        ...toJS(commonUsedCommunities),
      ])
    },
    get canActOnSeleted(): boolean {
      // if (self.type === TYPE.M)
      return false
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
