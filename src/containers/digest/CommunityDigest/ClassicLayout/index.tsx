import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import type { TC11NLayout, TThread, TCommunity, TMetric } from '@/spec'
import { EVENT } from '@/constant'
import { send } from '@/utils/helper'

import TabBar from '@/widgets/TabBar'
import ViewportTracker from '@/widgets/ViewportTracker'
// import CommunityStatesPad from '@/widgets/CommunityStatesPad'

import CommunityBrief from './CommunityBrief'
import AccountUnit from './AccountUnit'

import {
  Wrapper,
  InnerWrapper,
  BannerContentWrapper,
  CommunityBaseInfo,
  TabBarWrapper,
} from '../styles/classic_layout'

import { setViewport } from '../logic'

// 没有各种外链接，打赏信息等的官方社区
// const NON_STANDARD_COMMUNITIES = [HCN, 'feedback']

type TProps = {
  community: TCommunity
  realtimeVisitors: number
  descExpand: boolean
  activeThread: TThread
  layout: TC11NLayout
  metric: TMetric
}

const ClassicLayout: FC<TProps> = ({
  community,
  realtimeVisitors,
  descExpand,
  activeThread,
  layout,
  metric,
}) => {
  return (
    <Wrapper
      testid="community-digest"
      descExpand={descExpand}
      // noSocial={contains(community.raw, NON_STANDARD_COMMUNITIES)}
      noSocial
      isMobile={isMobile}
    >
      <InnerWrapper
        metric={metric}
        descExpand={descExpand}
        // noSocial={contains(community.raw, NON_STANDARD_COMMUNITIES)}
        noSocial
        isMobile={isMobile}
      >
        <BannerContentWrapper descExpand={descExpand}>
          <CommunityBaseInfo>
            <CommunityBrief community={community} descExpand={descExpand} />
            <AccountUnit />
            {/* <CommunityStatesPad
              community={community}
              onShowEditorList={onShowEditorList}
              onShowSubscriberList={onShowSubscriberList}
              realtimeVisitors={realtimeVisitors}
            /> */}
          </CommunityBaseInfo>
          <TabBarWrapper>
            <TabBar
              source={community.threads}
              onChange={(data) => send(EVENT.COMMUNITY_THREAD_CHANGE, { data })}
              active={activeThread}
              layout={layout}
              communityRaw={community.raw}
            />
          </TabBarWrapper>
        </BannerContentWrapper>
      </InnerWrapper>
      <ViewportTracker
        onEnter={() => setViewport(true)}
        onLeave={() => setViewport(false)}
      />
    </Wrapper>
  )
}

export default memo(ClassicLayout)
