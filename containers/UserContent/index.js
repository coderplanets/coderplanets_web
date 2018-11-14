/*
 *
 * UserContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import UserPublished from '../UserPublished'
import UserPublishedComments from '../UserPublishedComments'
import UserBilling from '../UserBilling'
import UserSettings from '../UserSettings'
import UserStared from '../UserStared'
import UserFavorited from '../UserFavorited'

import { Affix, Tabber } from '../../components'

import { Container, MainWrapper, TabberWrapper, SidebarWrapper } from './styles'

import DigestBoard from './DigestBoard'

import { makeDebugger, storePlug, USER_THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserContent')
/* eslint-enable no-unused-vars */

const taberThreads = [
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
    case USER_THREAD.COMMENTS: {
      return <UserPublishedComments />
    }
    case USER_THREAD.FAVORITES: {
      return <UserFavorited />
    }
    case USER_THREAD.LINKS: {
      return <UserStared />
    }
    case USER_THREAD.BILLING: {
      return <UserBilling />
    }
    case USER_THREAD.SETTINGS: {
      return <UserSettings />
    }
    default: {
      return <UserPublished />
    }
  }
}

class UserContentContainer extends React.Component {
  constructor(props) {
    super(props)
    const { userContent } = props
    logic.init(userContent)
  }

  render() {
    const { userContent } = this.props
    const { activeThread, viewingUser, accountInfo } = userContent

    return (
      <Container>
        <MainWrapper>
          <TabberWrapper className="tabs-with-bottom">
            <Tabber
              source={taberThreads}
              onChange={logic.tabChange}
              active={activeThread}
            />
          </TabberWrapper>
          <TabberContent active={activeThread} />
        </MainWrapper>
        <SidebarWrapper>
          <Affix offsetTop={30}>
            <DigestBoard user={viewingUser} accountId={accountInfo.id} />
          </Affix>
        </SidebarWrapper>
      </Container>
    )
  }
}

export default inject(storePlug('userContent'))(observer(UserContentContainer))
