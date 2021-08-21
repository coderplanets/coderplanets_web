/*
 * Footer2 store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TAccount, TC11N, TArticle, TCommunity } from '@/spec'
import { METRIC } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

// import { VIEW, TFooterView } from './constants'

const FooterStore = T.model('FooterStore', {
  showSponsor: T.optional(T.boolean, false),
  metric: T.optional(T.string, METRIC.COMMUNITY),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewingArticle
    },

    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },

    // get type(): TFooterView {
    //   const root = getParent(self) as TRootStore
    //   if (root.viewing.community.raw === HCN) return VIEW.HOME
    //   // TODO: check if the community is hosting
    //   // if (self.curCommunity.isHosting) return VIEW.COMMUNITY
    //   if (self.metric === METRIC.COMMUNITY) return VIEW.HOSTING_COMMUNITY
    //   if (self.metric === METRIC.WORKS_ARTICLE) return METRIC.WORKS_ARTICLE

    //   if (
    //     contains(self.metric, [
    //       METRIC.USER,
    //       METRIC.EXPLORE,
    //       METRIC.ARTICLE,
    //       METRIC.WORKS_EDITOR,
    //       METRIC.COMMUNITY_EDITOR,
    //     ])
    //   ) {
    //     return VIEW.ARTICLE
    //   }
    // },
  }))
  .actions((self) => ({
    authWarning(options?: Record<string, unknown>): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    sponsorHepler(): void {
      self.showSponsor = true
    },
    closeSponsor(): void {
      self.showSponsor = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof FooterStore>
export default FooterStore
