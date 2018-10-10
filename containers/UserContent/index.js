/*
 *
 * UserContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'
// import Link from 'next/link'

import UserSettings from '../UserSettings'
import UserFavorites from '../UserFavorites'

import {
  Affix,
  Tabber,
  DotDivider,
  Space,
  FollowButton,
} from '../../components'

import {
  Container,
  MainWrapper,
  TabberWrapper,
  SidebarWrapper,
  CardWrapper,
  // TODO: move to component
  AttactWrapper,
  AttactIcon,
  AttactLink,
} from './styles'

import AchieveInfo from './AchieveInfo'
import NumbersInfo from './NumbersInfo'

import { makeDebugger, storePlug, USER_THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserContent')
/* eslint-enable no-unused-vars */

const fakeThreads = [
  {
    title: '动态',
    raw: 'activities',
  },
  {
    title: '帖子',
    raw: 'posts',
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
    title: '设置',
    raw: 'settings',
  },
]

const TabberContent = ({ active }) => {
  switch (active) {
    case USER_THREAD.POSTS: {
      return <h2>POSTS</h2>
    }
    case USER_THREAD.COMMENTS: {
      return <h2>COMMENTS</h2>
    }
    case USER_THREAD.FAVORITES: {
      return <UserFavorites />
    }
    case USER_THREAD.LINKS: {
      return <h2>LINKS</h2>
    }
    case USER_THREAD.SETTINGS: {
      return <UserSettings />
    }
    default: {
      return <h2>Activies</h2>
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
            <React.Fragment>
              <CardWrapper>
                <AchieveInfo user={viewingUser} />
                <FollowButton
                  hasFollowd={viewingUser.viewerHasFollowed}
                  userId={viewingUser.id}
                  size="default"
                  onFollow={logic.followUser}
                  undoFollowUser={logic.undoFollowUser}
                />
              </CardWrapper>
              <CardWrapper>
                <NumbersInfo
                  user={viewingUser}
                  showFollowings={logic.showFollowings}
                  showFollowers={logic.showFollowers}
                />
              </CardWrapper>

              <AttactWrapper>
                <AttactIcon src={`${ICON_CMD}/join_at.svg`} />第{' '}
                {viewingUser.id} 位会员 <DotDivider /> 加入时间:
                <Space right="5px" />
                <TimeAgo datetime={viewingUser.insertedAt} locale="zh_CN" />
              </AttactWrapper>
              <AttactWrapper>
                <AttactIcon src={`${ICON_CMD}/contributer.svg`} />
                本站源码贡献者(
                <AttactLink
                  href="https://github.com/coderplanets/coderplanets_web/commits?author=mydearxym"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  详情
                </AttactLink>
                )
              </AttactWrapper>
              <AttactWrapper>
                <AttactIcon src={`${ICON_CMD}/sponsor.svg`} />
                本站赞助者(详情)
              </AttactWrapper>
            </React.Fragment>
          </Affix>
        </SidebarWrapper>
      </Container>
    )
  }
}

export default inject(storePlug('userContent'))(observer(UserContentContainer))
