/*
 *
 * UserContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import UserSettings from '../UserSettings'
import UserFavorites from '../UserFavorites'
import UserPublished from '../UserPublished'

import { Affix, Tabber } from '../../components'

import { Container, MainWrapper, TabberWrapper, SidebarWrapper } from './styles'

import DigestBoard from './DigestBoard'

import { makeDebugger, storePlug, USER_THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserContent')
/* eslint-enable no-unused-vars */

const fakeThreads = [
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
      return <h2>COMMENTS</h2>
    }
    case USER_THREAD.FAVORITES: {
      return <UserFavorites />
    }
    case USER_THREAD.LINKS: {
      return <h2>LINKS</h2>
    }
    case USER_THREAD.BILLING: {
      return <h2>BILLING</h2>
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
  componentWillMount() {
    const { userContent } = this.props
    logic.init(userContent)
  }

  render() {
    const { userContent } = this.props
    const { activeThread, viewingUser } = userContent

    return (
      <Container>
        <MainWrapper>
          <TabberWrapper className="tabs-with-bottom">
            <Tabber
              source={fakeThreads}
              onChange={logic.tabChange}
              active={activeThread}
            />
          </TabberWrapper>
          <TabberContent active={activeThread} />
        </MainWrapper>
        <SidebarWrapper>
          <Affix offsetTop={30}>
            <DigestBoard user={viewingUser} />
          </Affix>
        </SidebarWrapper>
      </Container>
    )
  }
}

export default inject(storePlug('userContent'))(observer(UserContentContainer))
