import React from 'react'

import { ICON } from '@/config'
import { Trans } from '@/utils'

import CustomScroller from '@/components/CustomScroller'
import SortColumn from './SortColumn/index'

import {
  Wrapper,
  RightPartWrapper,
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
      <CustomScroller
        width="calc(68vw - 40px)"
        autoHide={false}
        barSize="medium"
      >
        <RightPartWrapper>
          <CustomScroller direction="vertical" height="calc(50vh - 100px)">
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
          </CustomScroller>
          <CustomScroller direction="vertical" height="calc(50vh - 100px)">
            <TagWrapper>
              <ItemBar>全部</ItemBar>
              <ItemBar>精华</ItemBar>
              <ItemBar>设计</ItemBar>
              <ItemBar active>
                问答 <TagDot />
              </ItemBar>
              <ItemBar>职场</ItemBar>
              <ItemBar>闲聊</ItemBar>
              <ItemBar>数码</ItemBar>
              <ItemBar>其他</ItemBar>
              <br />
            </TagWrapper>
          </CustomScroller>

          <CustomScroller direction="vertical" height="calc(50vh - 100px)">
            <SortWrapper>
              <ItemBar>默认排序</ItemBar>
              <ItemBar>长度</ItemBar>
              <ItemBar active>时间</ItemBar>
              <ItemBar>热度</ItemBar>
            </SortWrapper>
          </CustomScroller>
          <CustomScroller direction="vertical" height="calc(50vh - 100px)">
            <SortWrapper>
              <ItemBar>今天</ItemBar>
              <ItemBar>本周</ItemBar>
              <ItemBar>本月</ItemBar>
              <ItemBar>今年</ItemBar>
            </SortWrapper>
          </CustomScroller>
        </RightPartWrapper>
      </CustomScroller>
    </Wrapper>
  )
}

export default Content
