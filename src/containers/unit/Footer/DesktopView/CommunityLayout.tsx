import { FC, memo } from 'react'

import type { TC11NLayout, TMetric } from '@/spec'
import { ISSUE_ADDR, API_SERVER_ADDR, GITHUB } from '@/config'
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
} from '../styles/desktop_view/community_layout'

type TProps = {
  metric: TMetric
  layout: TC11NLayout
}

const CommunityView: FC<TProps> = ({ metric, layout }) => {
  return (
    <Wrapper metric={metric} layout={layout}>
      <InnerWrapper>
        <TopInfo metric={METRIC.COMMUNITY} title="javascript" noBottomBorder />
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
            <Item
              href={`${ISSUE_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              开放数据
            </Item>
          </BaseInfo>
        </MainInfos>
      </InnerWrapper>
      <BottomInfo metric={metric} />
    </Wrapper>
  )
}

export default memo(CommunityView)
