/*
 * TagsBar store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { Tag } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:TagsBar')
/* eslint-enable no-unused-vars */

const TagsBar = t
  .model('TagsBar', {
    tags: t.optional(t.array(Tag), []),
    activeTag: t.maybeNull(Tag),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
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
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default TagsBar
