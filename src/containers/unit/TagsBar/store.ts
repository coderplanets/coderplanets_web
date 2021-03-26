/*
 * TagsBar store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { findIndex, propEq } from 'ramda'

import type { TRootStore, TCommunity, TTag, TThread } from '@/spec'

import { TOPIC } from '@/constant'
import { markStates, buildLog, stripMobx, groupByKey } from '@/utils'
import { Tag } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:TagsBar')

const TagsBar = T.model('TagsBar', {
  tags: T.optional(T.array(Tag), []),
  activeTag: T.maybeNull(Tag),
  thread: T.maybeNull(T.string),
  topic: T.optional(T.string, TOPIC.POST),

  loading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get tagsData(): TTag[] {
      return stripMobx(self.tags)
    },
    get activeTagData(): TTag {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get groupedTags(): any {
      const { tagsData } = self as TStore

      return groupByKey(
        tagsData.map((tag) => {
          if (tag.id < 4) {
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
    getTagIdByTitle(title: string): boolean | number {
      if (!title) return false

      const index = findIndex(propEq('title', title), self.tagsData)
      if (index >= 0) {
        return self.tagsData[index].id
      }
      return false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof TagsBar>
export default TagsBar
