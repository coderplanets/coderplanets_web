/*
 *
 * UserContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { Tabber, Button, Icon } from '../../components'

import {
  Container,
  MainWrapper,
  TabberWrapper,
  SidebarWrapper,
  CardWrapper,
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
    title: '自定义',
    raw: 'customizations',
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
      return <h2>FAVORITES</h2>
    }
    case USER_THREAD.LINKS: {
      return <h2>LINKS</h2>
    }
    case USER_THREAD.CUSTOMIZATIONS: {
      return <h2>CUSTOMIZATIONS</h2>
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

    console.log('activeThread --> ', activeThread)
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
            <h3>个人成就</h3>
            <div>共获得 xx 赞</div>
            <div>创作的内容被收藏 xx 次</div>
            <br />
            <br />
            <Button type="primary">
              <Icon type="plus" />
              关注他
            </Button>
          </CardWrapper>
          <CardWrapper>
            <div>关注中</div>
            <div>关注者</div>
          </CardWrapper>
          <CardWrapper>
            <div>Javascript 社区编辑</div>
          </CardWrapper>
        </SidebarWrapper>
      </Container>
    )
  }
}

export default inject(storePlug('userContent'))(observer(UserContentContainer))
