import React from 'react'

import { VerticalScroller } from '@components/CustomScroller'

import UpVote from './UpVote'
import PostInfo from './PostInfo'

import { Wrapper, Header, Label, Item } from '../styles/todo_list'

const fakePosts = [
  {
    id: 0,
    title: '希望支持微信登录',
    author: {
      username: 'mydearxym',
    },
  },
  {
    id: 1,
    title: '首页标题栏第二次进来有闪烁',
    author: {
      username: 'dude',
    },
  },
  {
    id: 2,
    title: '登录后侧边栏还是未登录状态的列表，刷几次正常',
    author: {
      username: 'hello',
    },
  },
  {
    id: 3,
    title:
      '登录后侧边栏还是未登录状态的列表，刷几次正常未登录状态的列表，刷几次正常',
    author: {
      username: 'hello',
    },
  },
  {
    id: 4,
    title: '登录后侧边栏还是未表，刷几次正常',
    author: {
      username: 'hello',
    },
  },
  {
    id: 5,
    title: '登录后侧边栏还是未登录状态的列表，刷几',
    author: {
      username: 'hello',
    },
  },
  {
    id: 6,
    title:
      '登录后侧边栏还是未登录状态的列表，刷几次正常未登录状态的列表，刷几次正常',
    author: {
      username: 'hello',
    },
  },
  {
    id: 7,
    title: '登录后侧边栏还是未表，刷几次正常',
    author: {
      username: 'hello',
    },
  },
  {
    id: 8,
    title: '登录后侧边栏还是未登录状态的列表，刷几',
    author: {
      username: 'hello',
    },
  },
]

const TodoList = ({ label }) => {
  return (
    <Wrapper>
      <Header>
        <Label>{label}</Label>
      </Header>
      <VerticalScroller height="calc(80vh - 40px)" withBorder>
        {fakePosts.map(item => (
          <Item key={item.id}>
            <UpVote num={28} />
            <PostInfo post={item} />
          </Item>
        ))}
      </VerticalScroller>
    </Wrapper>
  )
}

export default React.memo(TodoList)
