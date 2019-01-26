/*
 * TagsBar store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx, TOPIC } from 'utils'
import { Tag } from 'stores/SharedModel'

/* eslint-disable-next-line */
const debug = makeDebugger('S:TagsBar')

const TagsBar = t
  .model('TagsBar', {
    tags: t.optional(t.array(Tag), []),
    activeTag: t.maybeNull(Tag),
    thread: t.maybeNull(t.string),
    topic: t.optional(t.string, TOPIC.POST),

    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
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
  .actions(self => ({
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    getTagIdByTitle(title) {
      if (!title) return false

      const index = R.findIndex(R.propEq('title', title), self.tagsData)
      if (index >= 0) {
        return self.tagsData[index].id
      }
      return false
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default TagsBar
