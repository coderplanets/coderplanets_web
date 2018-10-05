/*
 * Labeler store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { Tag } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Labeler')
/* eslint-enable no-unused-vars */

const RealLabel = t.model('RealLabel', {
  uniqId: t.string,
  popVisible: t.optional(t.boolean, false),
  tags: t.optional(t.array(Tag), []),
  label: t.optional(
    t.enumeration([
      'default',
      'salary',
      'city',
      'exp',
      'education',
      'finance',
      'scale',
      'field',
    ]),
    'default'
  ),
  multi: t.optional(t.boolean, false),
  selected: t.optional(t.array(t.string), []),
})

/*
   NOTE: this is a triky modal
   normaly the same container should be uniq on the viewing page,
   but the label containers may occured many in same place, like job attrs selector,
   this will cause serious problem, because labeler maybe lot, bug the they are all
   connect to the same store in the rootStore. so i manulay ass a uniqId to store
   each copy of the current labeler store.
 */
const Labeler = t
  .model('Labeler', {
    labelEntries: t.optional(t.array(RealLabel), []),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get curThread() {
      return self.root.viewing.activeThread
    },
    get labelEntriesData() {
      return stripMobx(self.labelEntries)
    },
  }))
  .actions(self => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    markUniqState(uniqId, sobj) {
      sobj = R.merge(sobj, { uniqId })
      const index = R.findIndex(R.propEq('uniqId', uniqId))(
        self.labelEntriesData
      )

      if (index >= 0) {
        self.labelEntries[index] = R.merge(self.labelEntriesData[index], sobj)
      } else {
        self.labelEntries = R.concat(self.labelEntriesData, [sobj])
      }
    },
    uninit(uniqId) {
      self.labelEntries = R.reject(
        R.propEq('uniqId', uniqId),
        self.labelEntriesData
      )
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Labeler
