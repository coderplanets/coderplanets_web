import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TCommunity } from '@/spec'

import CommunityBrief from './CommunityBrief'
import { LavaLampLoading } from '@/components/Loading'

import { Wrapper, Divider } from '../styles/holy_grail_layout'

// 没有各种外链接，打赏信息等的官方社区

export const DynamicPart = dynamic(() => import('./DynamicPart'), {
  /* eslint-disable react/display-name */
  loading: () => <LavaLampLoading size="small" />,
  ssr: false,
})

type TProps = {
  community: TCommunity
}

const HolyGrailLayout: FC<TProps> = ({ community }) => {
  return (
    <Wrapper testid="community-digest">
      <CommunityBrief community={community} />
      <Divider />
      <DynamicPart />
    </Wrapper>
  )
}

export default memo(HolyGrailLayout)
