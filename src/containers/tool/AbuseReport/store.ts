/*
 * AbuseReport store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { find, propEq } from 'ramda'

import { REPORT_TYPE } from '@/constant'

import type { TCommunity, TRootStore } from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'

import type { TREPORT_ITEM } from './spec'
/* eslint-disable-next-line */
const log = buildLog('S:AbuseReport')

const initItem = {
  title: '',
  raw: '',
  checked: false,
  info: '',
  detail: '',
}

const Item = T.model('AbuseReport', {
  title: T.string,
  raw: T.string,
  checked: T.optional(T.boolean, false),
  info: T.optional(T.string, ''),
  detail: T.optional(T.string, ''),
})

const AbuseReport = T.model('AbuseReport', {
  show: T.optional(T.boolean, false),
  type: T.optional(T.string, REPORT_TYPE.ARTICLE),
  items: T.maybeNull(T.array(Item)),
  checkedItemRaw: T.maybeNull(T.string),
  view: T.optional(T.enumeration(['main', 'detail']), 'main'),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
    get itemsData(): TREPORT_ITEM[] {
      return stripMobx(self.items || [])
    },

    get activeItem(): TREPORT_ITEM {
      const { itemsData, checkedItemRaw } = self as TStore
      const findItem = find(
        propEq('raw', checkedItemRaw),
        itemsData,
      ) as TREPORT_ITEM

      return findItem || initItem
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof AbuseReport>

export default AbuseReport
