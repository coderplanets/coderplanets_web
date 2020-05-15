/*
 * Labeler store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { markStates, buildLog, stripMobx } from '@/utils'
import { Tag } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:Labeler')

const RealLabel = T.model('RealLabel', {
  uniqId: T.string,
  popVisible: T.optional(T.boolean, false),
  tags: T.optional(T.array(Tag), []),
  label: T.optional(
    T.enumeration([
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
  multi: T.optional(T.boolean, false),
  selected: T.optional(T.array(T.string), []),
})

/*
   NOTE: this is a triky modal
   normaly the same container should be uniq on the viewing page,
   but the label containers may occured many in same place, like job attrs selector,
   this will cause serious problem, because labeler maybe lot, bug the they are all
   connect to the same store in the rootStore. so i manulay ass a uniqId to store
   each copy of the current labeler store.
 */
const Labeler = T.model('Labeler', {
  labelEntries: T.optional(T.array(RealLabel), []),
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
    // TODO: refactor those shit code below
    // return the label map key-value
    get labelsData() {
      const labelList = stripMobx(self.labelEntries)

      const mapData = { tags: [] }
      R.forEach(label => {
        if (label.label === 'city' || label.label === 'default') {
          if (label.multi) {
            R.forEach(selectedLabel => {
              const tagId = self.root.tagsBar.getTagIdByTitle(selectedLabel)
              if (tagId !== false) {
                mapData.tags.push({ id: tagId })
              }
            }, label.selected)
          } else {
            const tagId = self.root.tagsBar.getTagIdByTitle(label.selected[0])
            if (tagId !== false) {
              mapData.tags.push({ id: tagId })
            }
            return false
          }
        }

        if (label.multi) {
          mapData[label.label] = label.selected
        } else {
          mapData[label.label] = label.selected[0] || ''
        }
      }, labelList)

      return mapData
    },
  }))
  .actions(self => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    // getSelectedTagId(uniqId, label) {
    getSelectedTagId(label) {
      // const labelList = stripMobx(self.labelEntries)
      // const index = R.findIndex(R.propEq('uniqId', uniqId))(
      //  self.labelEntriesData
      // )

      const tagId = self.root.tagsBar.getTagIdByTitle(label)
      return tagId
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default Labeler
