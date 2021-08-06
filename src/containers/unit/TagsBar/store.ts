/*
 * TagsBar store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { findIndex, propEq } from 'ramda'

import type {
  TRootStore,
  TCommunity,
  TTag,
  TGroupedTags,
  TThread,
} from '@/spec'

import { markStates, toJS } from '@/utils/mobx'
import { groupByKey } from '@/utils/helper'
import { Tag, emptyTag } from '@/model'

const TagsBar = T.model('TagsBar', {
  tags: T.optional(T.array(Tag), []),
  activeTag: T.maybeNull(Tag),
  thread: T.maybeNull(T.string),

  loading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get tagsData(): TTag[] {
      return toJS(self.tags)
    },
    get activeTagData(): TTag {
      return toJS(self.activeTag) || emptyTag
    },
    get groupedTags(): TGroupedTags {
      const { tagsData } = self as TStore

      return groupByKey(
        tagsData.map((tag) => {
          if (parseInt(tag.id, 10) < 4) {
            tag.group = '这是第一组'
          } else {
            tag.group = '这是第二组' // '__default__'
          }
          return tag
        }),
        'group',
      )
    },
  }))
  .actions((self) => ({
    selectTag(tag): void {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    getTagIdByTitle(title: string): boolean | string {
      if (!title) return false

      // @ts-ignore
      const index = findIndex(propEq('title', title), self.tagsData)
      if (index >= 0) {
        return self.tagsData[index].id
      }
      return false
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof TagsBar>
export default TagsBar
