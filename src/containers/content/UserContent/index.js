/*
 *
 * UserContent
 *
 */

import React from 'react'

import { USER_THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import UserPublished from '@/containers/user/UserPublished'
import UserPublishedComments from '@/containers/user/UserPublishedComments'
import UserBilling from '@/containers/user/UserBilling'
import UserSettings from '@/containers/user/UserSettings'
import UserStared from '@/containers/user/UserStared'
import UserFavorited from '@/containers/user/UserFavorited'

import Sticky from '@/components/Sticky'
import TabBar from '@/components/TabBar'

import DigestBoard from './DigestBoard'

import {
  Container,
  MainWrapper,
  TabBarWrapper,
  SidebarWrapper,
  MobileBottom,
} from './styles'

import { useInit, tabOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserContent')

const BaseTaberThreads = [
  {
    title: '发布',
    raw: 'publish',
  },
  {
    title: '评论',
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
  {
    title: '账单',
    raw: 'billing',
  },
  {
    title: '设置',
    raw: 'settings',
  },
]

const TabberContent = ({ active }) => {
  switch (active) {
    case USER_THREAD.COMMENTS:
      return <UserPublishedComments />

    case USER_THREAD.FAVORITES:
      return <UserFavorited />

    case USER_THREAD.LINKS:
      return <UserStared />

    case USER_THREAD.BILLING:
      return <UserBilling />

    case USER_THREAD.SETTINGS:
      return <UserSettings />

    default:
      return <UserPublished />
  }
}

const UserContentContainer = ({ userContent: store }) => {
  useInit(store)

  const {
    activeThread,
    viewingUser,
    accountInfo,
    isSelfViewing,
    following,
  } = store

  const taberSource = isSelfViewing ? FullTaberThreads : BaseTaberThreads

  return (
    <Container>
      <MainWrapper>
        <TabBarWrapper className="tabs-with-bottom">
          <TabBar
            source={taberSource}
            onChange={tabOnChange}
            active={activeThread}
          />
        </TabBarWrapper>
        <TabberContent active={activeThread} />
        <MobileBottom>
          <DigestBoard
            user={viewingUser}
            accountId={accountInfo.id}
            following={following}
          />
        </MobileBottom>
      </MainWrapper>
      <SidebarWrapper>
        <Sticky offsetTop={30}>
          <DigestBoard
            user={viewingUser}
            accountId={accountInfo.id}
            following={following}
          />
        </Sticky>
      </SidebarWrapper>
    </Container>
  )
}

export default connectStore(UserContentContainer)
