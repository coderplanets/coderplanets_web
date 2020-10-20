import React from 'react'

import {
  Wrapper,
  SortWrapper,
  ThreadWrapper,
  TagWrapper,
  ItemBar,
  TagDot,
} from '../styles/filter_menu/content'

const Content = () => {
  return (
    <Wrapper>
      <ThreadWrapper>
        <ItemBar>全部版块</ItemBar>
        <ItemBar>帖子</ItemBar>
        <ItemBar active>技术</ItemBar>
        <ItemBar>雷达</ItemBar>
        <ItemBar>工作</ItemBar>
        <ItemBar>同城</ItemBar>
        <ItemBar>C友</ItemBar>
      </ThreadWrapper>
      <TagWrapper>
        <ItemBar>全部标签</ItemBar>
        <ItemBar>精华</ItemBar>
        <ItemBar>设计</ItemBar>
        <ItemBar active>
          问答 <TagDot />
        </ItemBar>
        <ItemBar>职场</ItemBar>
        <ItemBar>闲聊</ItemBar>
        <ItemBar>数码</ItemBar>
        <ItemBar>其他</ItemBar>
      </TagWrapper>
      <SortWrapper>
        <ItemBar active>默认排序</ItemBar>
        <ItemBar>长度</ItemBar>
        <ItemBar>时间</ItemBar>
        <ItemBar>热度</ItemBar>
      </SortWrapper>
    </Wrapper>
  )
}

export default Content
