/*
 *
 * UserContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'
// import Link from 'next/link'

import { Tabber, Button, Icon } from '../../components'
import { UserSettings, UserFavorites } from '..'

import AchieveInfo from './AchieveInfo'
import NumbersInfo from './NumbersInfo'

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
  AttactDivider,
} from './styles'

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
    const { activeThread } = userContent

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
          <CardWrapper>
            <AchieveInfo />
            <Button type="primary">
              <Icon type="plus" />
              关注他
            </Button>
          </CardWrapper>
          <CardWrapper>
            <NumbersInfo />
          </CardWrapper>

          <AttactWrapper>
            <AttactIcon src={`${ICON_CMD}/join_at.svg`} />第 1 位会员{' '}
            <AttactDivider /> 加入时间: 2018-08-18
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
        </SidebarWrapper>
      </Container>
    )
  }
}

export default inject(storePlug('userContent'))(observer(UserContentContainer))
