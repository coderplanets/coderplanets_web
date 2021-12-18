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
          yearlyPrice: '1',
          monthlyPrice: '0.1',
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
          desc: '支持性别平权，鼓励更多女性加入开发者群体。',
          yearlyPrice: '1',
          monthlyPrice: '0.1',
          illustration: PACKAGE.GIRL,
          serviceItems: [{ title: '头像标识（可选）' }],
        },
        {
          pkgType: PACKAGE.TEAM,
          desc: '社区 SaaS 服务。适合独立开发者、小团队等需要独立社区的场景',
          yearlyPrice: '--',
          monthlyPrice: '--',
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
