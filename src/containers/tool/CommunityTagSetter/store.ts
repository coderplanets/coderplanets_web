/*
 * CommunityTagSetter store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, filter, reject, includes, map, uniq } from 'ramda'

import type { TID, TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { mockCommunities } from '@/utils/mock'

import type { TCommunitiesList, TTagsList, TTexts } from './spec'
import { TAG_VIEW, COMMUNITY_VIEW, COMMUNITY_STYLE, TYPE } from './constant'
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

  communityStyle: T.optional(
    T.enumeration(values(COMMUNITY_STYLE)),
    COMMUNITY_STYLE.NORMAL,
  ),

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

    get selectCommunityTexts(): TTexts {
      switch (self.communityStyle) {
        case COMMUNITY_STYLE.LANG: {
          return {
            header: '请选择编程语言',
            searchPlaceholder: '// 搜索编程语言',
            notice: null,
            commonUsedHint: '常用编程语言',
          }
        }
        default: {
          return {
            header: '请选择子社区',
            searchPlaceholder: '// 搜索目标社区',
            notice:
              '内测阶段所有人均可发布内容到首页。若测试请发布到「黑洞」。发布恶俗/恶意内容到社区，账号本身将进入「黑洞」，谢谢理解。',
            commonUsedHint: '常用子社区',
          }
        }
      }
    },

    get texts(): TTexts {
      const slf = self as TStore

      switch (slf.type) {
        case TYPE.MIRROR_COMMUNITY: {
          return {
            header: '镜像到其他社区',
            searchPlaceholder: '// 搜索目标社区',
            commonUsedHint: '常用子社区',
            notice: '镜像操作会同时保留原社区和目标社区标签，互不干扰。',
          }
        }
        case TYPE.SELECT_COMMUNITY: {
          return slf.selectCommunityTexts
        }
        default: {
          return {
            header: '移动到其他社区',
            searchPlaceholder: '// 搜索目标社区',
            commonUsedHint: '常用子社区',
            notice: '移动操作会从原社区中删除相关内容，只保留目标社区信息。',
          }
        }
      }
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
