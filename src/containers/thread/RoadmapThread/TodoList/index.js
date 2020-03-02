import React from 'react'

import { Wrapper, Header, Item, Title } from '../styles/todo_list'

const TodoList = ({ label }) => {
  return (
    <Wrapper>
      <Header>{label}</Header>
      <Item>
        <Title>希望支持微信登录</Title>
      </Item>
      <Item>
        <Title>首页标题栏第二次进来有闪烁</Title>
      </Item>
      <Item>
        <Title>登录后侧边栏还是未登录状态的列表，刷几次正常</Title>
      </Item>
    </Wrapper>
  )
}

export default React.memo(TodoList)
