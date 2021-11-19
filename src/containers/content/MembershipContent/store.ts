/*
 * MembershipContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore } from '@/spec'
import { markStates } from '@/utils/mobx'

import { PACKAGE, PAY } from './constant'

const MembershipContent = T.model('MembershipContent', {
  showInviteBox: T.optional(T.boolean, false),
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
          serviceItems: [
            { title: '发布各种内容' },
            { title: '参与编辑公共内容' },
            { title: '申请创建子社区' },
            { title: '查看社区基础统计' },
          ],
        },
        {
          pkgType: PACKAGE.ADVANCE,
          desc: '更好更全面的阅读、交互体验。更丰富的交流工具',
          yearlyPrice: '99',
          monthlyPrice: '9.9',
          illustration: PACKAGE.ADVANCE,
          serviceItems: [
            { title: '主题设置' },
            { title: '自定义社区布局' },
            { title: '自定义快速跳转' },
            { title: '评论表情包' },
            { title: '设置文章打赏' },
            { title: '发起投票' },
            { title: '头像特殊标识' },
            { title: '自定义背景' },
            { title: '社区详细统计数据' },
            { title: '免除广告' },
          ],
        },
        {
          pkgType: PACKAGE.GIRL,
          desc: '女生福利，高级会员的所有服务，无理由升级',
          yearlyPrice: '0',
          monthlyPrice: '0',
          illustration: PACKAGE.GIRL,
          serviceItems: [
            { title: '女生头像标识' },
            { title: '发起投票' },
            { title: '需求优先响应' },
            { title: '个别场景更高权重' },
            { title: '不定期周边礼品' },
          ],
        },
        {
          pkgType: PACKAGE.TEAM,
          desc: '社区 SaaS 服务。适合独立开发者、小团队等需要独立社区的场景',
          yearlyPrice: '1999',
          monthlyPrice: '199.9',
          illustration: PACKAGE.TEAM,
          serviceItems: [
            {
              title: '看板等个性化版块',
            },
            {
              title: '自定义二级域名',
            },
            {
              title: '第三方平台集成',
            },
            {
              title: '设置自定义广告',
            },
            {
              title: '隐藏主站其他入口',
            },
            {
              title: 'Github 主页特别鸣谢',
            },
            {
              title: '站内特别鸣谢',
            },
            {
              title: '工作日客服支持',
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
