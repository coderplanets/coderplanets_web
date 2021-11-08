/*
 * UserProfile store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { reject } from 'ramda'

import type {
  TRootStore,
  TUser,
  TPagedCommunities,
  TUserActivity,
} from '@/spec'
import { HCN } from '@/constant'

import { markStates, toJS } from '@/utils/mobx'
import { PagedCommunities, emptyPagi, PagedPosts } from '@/model'

const UserProfile = T.model('UserProfile', {
  subscribedCommunities: T.optional(PagedCommunities, emptyPagi),
  pagedPosts: T.optional(PagedPosts, emptyPagi),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingUser(): TUser {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.user)
    },
    get pagedSubscribedCommunitiesData(): TPagedCommunities {
      const { subscribedCommunities } = self
      const subscribedCommunitiesData = toJS(subscribedCommunities)

      if (subscribedCommunities.totalCount === 1) {
        return subscribedCommunitiesData
      }

      const { entries, ...rest } = subscribedCommunitiesData

      return {
        entries: reject((c) => c.raw === HCN, entries),
        ...rest,
      }
    },
    get activities(): TUserActivity[] {
      const slf = self as TStore
      const { pagedPosts } = slf

      return toJS(pagedPosts.entries).map((a) => {
        return {
          articleTitle: a.title,
          digest: a.digest,
          insertedAt: a.insertedAt,
        }
      })
    },
  }))
  .actions((self) => ({
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof UserProfile>
export default UserProfile
