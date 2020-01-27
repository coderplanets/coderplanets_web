/*
 * HaveADrinkContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('S:HaveADrinkContent')

const HaveADrinkContent = t
  .model('HaveADrinkContent', {
    // current sub-view of the drink page
    view: t.optional(
      t.enumeration('view', [
        'default',
        'catalog',
        'setting',
        'edit',
        'share',
        'comment',
      ]),
      'default'
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default HaveADrinkContent
