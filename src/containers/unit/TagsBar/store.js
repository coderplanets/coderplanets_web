/*
 * TagsBar store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { findIndex, propEq } from 'ramda'

import { TOPIC } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'
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
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get curThread() {
      return self.root.viewing.activeThread
    },
    get tagsData() {
      return stripMobx(self.tags)
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
  }))
  .actions((self) => ({
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    getTagIdByTitle(title) {
      if (!title) return false

      const index = findIndex(propEq('title', title), self.tagsData)
      if (index >= 0) {
        return self.tagsData[index].id
      }
      return false
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default TagsBar
