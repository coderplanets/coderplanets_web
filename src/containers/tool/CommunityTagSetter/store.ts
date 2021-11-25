/*
 * CommunityTagSetter store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, filter, reject, includes, map, uniq } from 'ramda'

import type { TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
// import { mockCommunities } from '@/utils/mock'

import type { TCommunitiesList, TTagsList, TTexts } from './spec'
import {
  TAG_VIEW,
  COMMUNITY_VIEW,
  COMMUNITY_STYLE,
  TYPE,
  COMMON_COMMUNITIES,
} from './constant'
import { Community, Tag } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityTagSetter')

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
  communitiesSearched: T.optional(T.boolean, false),
  selectedCommunities: T.optional(T.array(Community), []),
  searchedCommunities: T.optional(T.array(Community), []),
  // commonUsedCommunities: T.optional(T.array(Community), mockCommunities(5)),

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
    get commonUsedCommunities(): TCommunity[] {
      const { communityStyle } = self
      return (
        COMMON_COMMUNITIES[communityStyle.toUpperCase()] ||
        COMMON_COMMUNITIES.LANG
      )
    },
    get communitiesList(): TCommunitiesList {
      const slf = self as TStore
      const selectedCommunities = toJS(slf.selectedCommunities)

      return {
        canActOnSeleted: slf.canActOnSeleted,
        searching: slf.communitiesSearching,
        searched: slf.communitiesSearched,
        searchValue: slf.communitySearchValue,
        selectedCommunities,
        // searchedCommunities: toJS(self.searchedCommunities),
        searchedCommunities: reject(
          (c) =>
            includes(
              // @ts-ignore
              c.raw,
              map((s) => s.raw, selectedCommunities),
            ),
          toJS(slf.searchedCommunities),
        ),

        commonUsedCommunities: reject(
          (c) =>
            includes(
              // @ts-ignore
              c.raw,
              map((s) => s.raw, selectedCommunities),
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
      const slf = self as TStore
      const { commonUsedCommunities, searchedCommunities } = slf

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
            notFoundHint:
              '抱歉，未找到相关编程语言，请在该评论区或子社区 /feedback 中反馈。',
          }
        }
        case COMMUNITY_STYLE.FRAMEWORK: {
          return {
            header: '请选择框架 / 库',
            searchPlaceholder: '// 搜索框架 / 库',
            notice: null,
            commonUsedHint: '常用框架 / 库',
            notFoundHint:
              '抱歉，未找到相关框架 / 库，请在该评论区或子社区 /feedback 中反馈。',
          }
        }
        case COMMUNITY_STYLE.DATABASE: {
          return {
            header: '请选择数据库',
            searchPlaceholder: '// 搜索数据库',
            notice: null,
            commonUsedHint: '常用数据库',
            notFoundHint:
              '抱歉，未找到相关数据库，请在该评论区或子社区 /feedback 中反馈。',
          }
        }
        case COMMUNITY_STYLE.DEVOPS: {
          return {
            header: '请选择 DevOps 工具 / 平台',
            searchPlaceholder: '// 搜索工具 / 平台',
            notice: null,
            commonUsedHint: '常用工具 / 平台',
            notFoundHint:
              '抱歉，未找到相关工具 / 平台，请在该评论区或子社区 /feedback 中反馈。',
          }
        }
        case COMMUNITY_STYLE.DESIGN: {
          return {
            header: '请选择设计工具',
            searchPlaceholder: '// 设计工具',
            notice: null,
            commonUsedHint: '设计工具',
            notFoundHint:
              '抱歉，未找到相关设计工具，请在该评论区或子社区 /feedback 中反馈。',
          }
        }
        default: {
          return {
            header: '请选择子社区',
            searchPlaceholder: '// 搜索目标社区',
            notice:
              '内测阶段所有人均可发布内容到首页。若测试请发布到「黑洞」。发布恶俗 / 恶意内容到社区，账号本身将进入「黑洞」，谢谢理解。',
            commonUsedHint: '常用子社区',
            notFoundHint:
              '抱歉，未找到相关子社区，请在该评论区或子社区 /feedback 中反馈。',
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
    selectCommunity(raw: string): void {
      const slf = self as TStore
      const { selectableCommunities, selectedCommunities } = slf

      const targetCommunities = filter(
        (c) => c.raw === raw,
        selectableCommunities,
      )

      slf.mark({
        selectedCommunities: uniq([
          ...toJS(selectedCommunities),
          ...targetCommunities,
        ]),
      })
    },

    undoSelectCommunity(raw: string): void {
      const slf = self as TStore
      const { selectedCommunities } = slf

      slf.mark({
        selectedCommunities: reject(
          (c: TCommunity) => c.raw === raw,
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
