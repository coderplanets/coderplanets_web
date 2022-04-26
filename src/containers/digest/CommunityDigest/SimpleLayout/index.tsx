import { FC, memo } from 'react'

import type { TThread, TCommunity, TMetric } from '@/spec'
import { EVENT } from '@/constant'
import { send } from '@/utils/helper'

import ViewportTracker from '@/widgets/ViewportTracker'

import ThreadTab from './ThreadTab'
import CommunityBrief from './CommunityBrief'
import AccountUnit from './AccountUnit'

import {
  Wrapper,
  InnerWrapper,
  BannerContentWrapper,
  CommunityBaseInfo,
} from '../styles/simple_layout'

import { setViewport } from '../logic'

// 没有各种外链接，打赏信息等的官方社区
// const NON_STANDARD_COMMUNITIES = [HCN, 'feedback']

type TProps = {
  community: TCommunity
  activeThread: TThread
  metric: TMetric
}

const SimpleLayout: FC<TProps> = ({ community, activeThread, metric }) => {
  return (
    <Wrapper testid="community-digest">
      <InnerWrapper metric={metric}>
        <BannerContentWrapper>
          <CommunityBaseInfo>
            <CommunityBrief community={community} />
            <ThreadTab
              threads={community.threads}
              onChange={(data) => send(EVENT.COMMUNITY_THREAD_CHANGE, { data })}
              active={activeThread}
            />
            <AccountUnit />
          </CommunityBaseInfo>
        </BannerContentWrapper>
      </InnerWrapper>
      <ViewportTracker
        onEnter={() => setViewport(true)}
        onLeave={() => setViewport(false)}
      />
    </Wrapper>
  )
}

export default memo(SimpleLayout)
