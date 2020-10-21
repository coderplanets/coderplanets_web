import React from 'react'

import { ICON } from '@/config'
import { Trans } from '@/utils'

import CustomScroller from '@/components/CustomScroller'
import SortColumn from './SortColumn/index'

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
      <SortColumn />
      <CustomScroller width="65%" withBorder autoHide={false}>
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
        <CustomScroller
          direction="vertical"
          height="100px"
          withBorder
          autoHide={false}
        >
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
        </CustomScroller>

        <SortWrapper>
          <ItemBar>默认排序</ItemBar>
          <ItemBar>长度</ItemBar>
          <ItemBar active>时间</ItemBar>
          <ItemBar>热度</ItemBar>
        </SortWrapper>
        <SortWrapper>
          <ItemBar>今天</ItemBar>
          <ItemBar>本周</ItemBar>
          <ItemBar>本月</ItemBar>
          <ItemBar>今年</ItemBar>
        </SortWrapper>
      </CustomScroller>
    </Wrapper>
  )
}

export default Content
