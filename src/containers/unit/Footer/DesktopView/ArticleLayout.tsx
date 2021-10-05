import { FC, memo } from 'react'

import type { TArticle, TC11NLayout, TMetric } from '@/spec'
import { ISSUE_ADDR, GITHUB, API_SERVER_ADDR } from '@/config'
import { METRIC } from '@/constant'
import { joinUS } from '@/utils/helper'

import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  BaseInfo,
  Item,
  NoLinkItem,
} from '../styles/desktop_view/article_layout'

type TProps = {
  article: TArticle
  metric: TMetric
  layout: TC11NLayout
}

const BriefView: FC<TProps> = ({ metric, article, layout }) => {
  return (
    <Wrapper metric={metric} layout={layout}>
      <InnerWrapper>
        <TopInfo metric={METRIC.ARTICLE} article={article} noBottomBorder />
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
            <NoLinkItem onClick={() => joinUS()}>加入群聊</NoLinkItem>
            <Item href={`${GITHUB}`} rel="noopener noreferrer" target="_blank">
              Github
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
      <BottomInfo metric={metric} />
    </Wrapper>
  )
}

export default memo(BriefView)
