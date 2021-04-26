/*
 * MembershipContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore } from '@/spec'
import { markStates, buildLog } from '@/utils'

import { PACKAGE, PAY } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:MembershipContent')

const MembershipContent = T.model('MembershipContent', {
  payType: T.optional(T.enumeration(values(PAY)), PAY.YEARLY),
  pkgType: T.optional(T.enumeration(values(PACKAGE)), PACKAGE.ADVANCE),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get dashboardItems() {
      return [
        {
          pkgType: PACKAGE.FREE,
          desc: '免费用户，常规社区功能，部分高级选项有数量限制',
          yearlyPrice: '0',
          monthlyPrice: '0',
          illustration: PACKAGE.FREE,
          serviceItems: [{ title: '发布各种内容' }, { title: '创建子社区' }],
        },
        {
          pkgType: PACKAGE.ADVANCE,
          desc: '更好更全面的阅读、交互体验。优先参与社区规划共建',
          yearlyPrice: '59',
          monthlyPrice: '5.9',
          illustration: PACKAGE.ADVANCE,
          serviceItems: [
            { title: '主题设置' },
            { title: '头像特殊标识' },
            { title: '发起投票' },
            { title: '设置文章打赏' },
            // { title: '订阅栏分组' },
            { title: '需求优先响应' },
          ],
        },
        {
          pkgType: PACKAGE.GIRL,
          desc: '女生福利，高级会员的所有服务，无理由升级',
          yearlyPrice: '0',
          monthlyPrice: '0',
          illustration: PACKAGE.GIRL,
          serviceItems: [
            { title: '主题设置' },
            { title: '头像特殊标识' },
            { title: '发起投票' },
            { title: '设置文章打赏' },
            // { title: '订阅栏分组' },
            { title: '需求优先响应' },
          ],
        },
        {
          pkgType: PACKAGE.TEAM,
          desc: '全部功能。适合独立开发者、小团队等需要独立空间的场景',
          yearlyPrice: '199',
          monthlyPrice: '19.9',
          illustration: PACKAGE.TEAM,
          serviceItems: [
            {
              title: '自定义二级域名',
            },
            {
              title: '隐藏主站其他入口',
            },
            {
              title: '8 小时工单支持',
            },
            {
              title: 'Github 主页鸣谢',
            },
            {
              title: '站内鸣谢',
            },
          ],
        },
      ]
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    cashierHelper(opt) {
      const root = getParent(self) as TRootStore
      root.cashierHelper(opt)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof MembershipContent>
export default MembershipContent
