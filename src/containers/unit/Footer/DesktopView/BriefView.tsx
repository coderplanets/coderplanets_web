import React from 'react'

import type { TArticle } from '@/spec'
import { ISSUE_ADDR, API_SERVER_ADDR } from '@/config'
import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  BaseInfo,
  Item,
} from '../styles/desktop_view/brief_view'

type TProps = {
  curView: string // todo
  viewingArticle: TArticle
  metric: string
}

const BriefView: React.FC<TProps> = ({ curView, metric, viewingArticle }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper>
        <TopInfo type="article" title={viewingArticle.title} noBottomBorder />
        {/* <MainInfos center={curView === 'BRIEF' || false}> */}
        <MainInfos>
          <BaseInfo>
            <Item href="/home/post/1" rel="noopener noreferrer" target="_blank">
              关于
            </Item>
            <Item
              href="/cps-support/posts"
              rel="noopener noreferrer"
              target="_blank"
            >
              创建社区
            </Item>
            <Item
              href="/cps-support/posts"
              rel="noopener noreferrer"
              target="_blank"
            >
              加入我们
            </Item>
            <Item
              href={`${API_SERVER_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenSource
            </Item>
            <Item
              href={`${API_SERVER_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              特别感谢
            </Item>
            <Item
              href={`${ISSUE_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              反馈与建议
            </Item>
          </BaseInfo>
        </MainInfos>
      </InnerWrapper>
      <BottomInfo />
    </Wrapper>
  )
}

export default React.memo(BriefView)
