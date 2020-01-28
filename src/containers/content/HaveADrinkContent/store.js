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
    // refresh timer

    timer: t.maybeNull(t.number),
    timerInterval: t.optional(
      t.enumeration('timerInterval', ['3s', '5s', '10s']),
      '3s'
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get timerIntervalVal() {
      const { timerInterval } = self
      return {
        '3s': 3000,
        '5s': 5000,
        '10s': 10000,
      }[timerInterval]
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default HaveADrinkContent
