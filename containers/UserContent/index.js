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

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserContent')
/* eslint-enable no-unused-vars */

const fakeThreads = [
  {
    title: '动态',
    raw: 'activity',
  },
  {
    title: '帖子',
    raw: 'post',
  },
  {
    title: '评论',
    raw: 'comment',
  },
  {
    title: '收藏',
    raw: 'favorite',
  },
  {
    title: '喜欢',
    raw: 'like',
  },
  {
    title: '自定义',
    raw: 'customization',
  },
]

class UserContentContainer extends React.Component {
  componentWillMount() {
    const userContent = this.props
    logic.init(userContent)
  }

  render() {
    return (
      <Container>
        <MainWrapper>
          <TabberWrapper className="tabs-with-bottom">
            <Tabber source={fakeThreads} onChange={debug} active="activity" />
          </TabberWrapper>
          <h2>UserContent container!</h2>
        </MainWrapper>
        <SidebarWrapper>
          <CardWrapper>
            <h3>个人成就</h3>
            <div>共获得 xx 赞</div>
            <div>创作的内容被收藏 xx 次</div>
            <br />
            <br />
            <Button type="primary">
              <Icon type="plus" />关注他
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
