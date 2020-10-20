import React from 'react'

import { ICON } from '@/config'
import { Trans } from '@/utils'

import {
  Wrapper,
  SortWrapper,
  ThreadWrapper,
  TagWrapper,
  ItemBar,
  TagDot,
  ArrowIcon,
} from '../styles/filter_menu/content'

const Content = ({ curActive }) => {
  const { community, thread } = curActive

  return (
    <Wrapper>
      <ThreadWrapper>
        {community.threads.map((item) => (
          <ItemBar key={item.raw} active={item.raw === thread}>
            {Trans(item.title)}
            {item.raw === thread && (
              <ArrowIcon src={`${ICON}/shape/arrow-solid.svg`} />
            )}
          </ItemBar>
        ))}
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
