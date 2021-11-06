/*
 *
 * UserContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { USER_THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import UserProfile from '@/containers/user/UserProfile'
import UserPublishedArticles from '@/containers/user/UserPublishedArticles'
import UserPublishedComments from '@/containers/user/UserPublishedComments'
// import UserBilling from '@/containers/user/UserBilling'
import UserSettings from '@/containers/user/UserSettings'
import UserStared from '@/containers/user/UserStared'
import UserFavorited from '@/containers/user/UserFavorited'

import TabBar from '@/widgets/TabBar'

import type { TStore } from './store'
import Sidebar from './Sidebar'

import {
  Wrapper,
  InnerWrapper,
  BannerWrapper,
  ContentWrapper,
  TabBarWrapper,
} from './styles'

import { useInit, tabOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserContent')

const BaseTaberThreads = [
  {
    title: 'profile',
    raw: 'profile',
  },
  {
    title: '发布',
    raw: 'publish',
  },
  {
    title: '讨论',
    raw: 'comments',
  },
  {
    title: '收藏',
    raw: 'favorites',
  },
  {
    title: '喜欢',
    raw: 'likes',
  },
]

const FullTaberThreads = [
  ...BaseTaberThreads,
  // {
  //   title: '账单',
  //   raw: 'billing',
  // },
  {
    title: '设置',
    raw: 'settings',
  },
]

const TabberContent = ({ active }) => {
  switch (active) {
    case USER_THREAD.PROFILE:
      return <UserProfile />

    case USER_THREAD.COMMENTS:
      return <UserPublishedComments />

    case USER_THREAD.FAVORITES:
      return <UserFavorited />

    case USER_THREAD.LINKS:
      return <UserStared />

    // case USER_THREAD.BILLING:
    //   return <UserBilling />

    case USER_THREAD.SETTINGS:
      return <UserSettings />

    default:
      return <UserPublishedArticles />
  }
}

type TProps = {
  userContent: TStore
  metric: TMetric
}

const UserContentContainer: FC<TProps> = ({ userContent: store, metric }) => {
  useInit(store)

  const {
    activeThread,
    viewingUser,
    isSelfViewing,
    pagedWorksData,
    pagedEditableCommunitiesData,
  } = store
  const taberSource = isSelfViewing ? FullTaberThreads : BaseTaberThreads

  return (
    <Wrapper>
      <BannerWrapper metric={metric} />
      <InnerWrapper metric={metric}>
        <Sidebar
          user={viewingUser}
          isSelfViewing={isSelfViewing}
          works={pagedWorksData}
          editableCommunities={pagedEditableCommunitiesData}
        />
        <ContentWrapper>
          <TabBarWrapper className="tabs-with-bottom">
            <TabBar
              source={taberSource}
              onChange={tabOnChange}
              active={activeThread}
            />
          </TabBarWrapper>
          <TabberContent active={activeThread} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(UserContentContainer)
