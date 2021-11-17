/*
 * HaveADrinkContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { find, propEq } from 'ramda'

import { markStates } from '@/utils/mobx'

import type {
  TSettingOption,
  TDrinkCategory,
  TDrinkItem,
  TPagiState,
} from './spec'
import { VIEW } from './constant'
import demo from './demo'

const HaveADrinkContent = T.model('HaveADrinkContent', {
  // current sub-view of the drink page
  view: T.optional(
    T.enumeration('view', [
      VIEW.DEFAULT,
      VIEW.CATALOG,
      VIEW.SETTING,
      VIEW.ABOUT,
      VIEW.EDIT,
      VIEW.SHARE,
      VIEW.COMMENT,
    ]),
    VIEW.DEFAULT,
  ),
  category: T.optional(T.string, 'IT 冷知识'),

  // refresh timer
  drinkIdx: T.optional(T.number, 0),
  // setting
  fontSize: T.optional(T.enumeration(['24px', '27px']), '24px'),
  animateType: T.optional(T.enumeration(['fade', 'bounce']), 'fade'),
  // timmer
  timer: T.maybeNull(T.number),
  timerInterval: T.optional(
    T.enumeration('timerInterval', ['3s', '5s', '10s']),
    '3s',
  ),
})
  .views((self) => ({
    get drinks(): TDrinkItem[] {
      const { category } = self

      const targetCategory = find(
        propEq('title', category),
        demo,
      ) as TDrinkCategory

      return targetCategory.entries
    },
    get curDrink(): TDrinkItem {
      const slf = self as TStore
      const { drinks, drinkIdx } = slf

      return drinks[drinkIdx]
    },
    get pagiState(): TPagiState {
      const slf = self as TStore
      const { drinks, drinkIdx } = slf

      return {
        curIdx: drinkIdx + 1,
        total: drinks.length,
      }
    },
    get settingOptions(): TSettingOption {
      const { fontSize, animateType } = self

      return { fontSize, animateType }
    },
    get timerIntervalVal(): number {
      const { timerInterval } = self
      return {
        '3s': 3000,
        '5s': 5000,
        '10s': 10000,
      }[timerInterval]
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof HaveADrinkContent>
export default HaveADrinkContent
