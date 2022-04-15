import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TCommunity, TThread } from '@/spec'

import CommunityBrief from './CommunityBrief'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import { Wrapper, Divider } from '../styles/holy_grail_layout'

// 没有各种外链接，打赏信息等的官方社区

export const DynamicPart = dynamic(() => import('./DynamicPart'), {
  /* eslint-disable react/display-name */
  loading: () => <LavaLampLoading size="small" />,
  ssr: false,
})

export type TProps = {
  thread: TThread
  community: TCommunity
  realtimeVisitors?: number
}

const HolyGrailLayout: FC<TProps> = ({
  community,
  thread,
  realtimeVisitors = 1,
}) => {
  return (
    <Wrapper testid="community-digest">
      <CommunityBrief
        community={community}
        realtimeVisitors={realtimeVisitors}
      />
      <Divider />
      {/* @ts-ignore */}
      <DynamicPart community={community} thread={thread} />
    </Wrapper>
  )
}

export default memo(HolyGrailLayout)
