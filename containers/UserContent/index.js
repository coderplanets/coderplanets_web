/*
 *
 * UserContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { USER_THREAD } from '@constant'
import { connectStore, buildLog } from '@utils'

import UserPublished from '@containers/UserPublished'
import UserPublishedComments from '@containers/UserPublishedComments'
import UserBilling from '@containers/UserBilling'
import UserSettings from '@containers/UserSettings'
import UserStared from '@containers/UserStared'
import UserFavorited from '@containers/UserFavorited'

import Tabber from '@components/Tabber'
import DigestBoard from './DigestBoard'

import {
  Container,
  MainWrapper,
  TabberWrapper,
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

const UserContentContainer = ({ userContent }) => {
  useInit(userContent)

  const {
    activeThread,
    viewingUser,
    accountInfo,
    isSelfViewing,
    following,
  } = userContent

  const taberSource = isSelfViewing ? FullTaberThreads : BaseTaberThreads

  return (
    <Container>
      <MainWrapper>
        <TabberWrapper className="tabs-with-bottom">
          <Tabber
            source={taberSource}
            onChange={tabOnChange}
            active={activeThread}
          />
        </TabberWrapper>
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
        <Affix offsetTop={30}>
          <DigestBoard
            user={viewingUser}
            accountId={accountInfo.id}
            following={following}
          />
        </Affix>
      </SidebarWrapper>
    </Container>
  )
}

export default connectStore(UserContentContainer)
