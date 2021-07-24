import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'

import { Br } from '@/components/Common'
import Sticky from '@/components/Sticky'
import TagsBar from '@/containers/unit/TagsBar'
import { PublishButton } from '@/components/Buttons'

import CommunityBrief from './CommunityBrief'
import ExtraInfo from './ExtraInfo'

import { Wrapper, Divider } from '../styles/holy_grail_layout'

// 没有各种外链接，打赏信息等的官方社区

type TProps = {
  community: TCommunity
}

const HolyGrailLayout: FC<TProps> = ({ community }) => {
  return (
    <Wrapper testid="community-digest">
      <CommunityBrief community={community} />
      <Divider />
      <ExtraInfo />
      <Br bottom={20} />
      <PublishButton />
      <Br bottom={25} />
      <Sticky offsetTop={80}>
        <TagsBar onSelect={console.log} />
      </Sticky>
    </Wrapper>
  )
}

export default memo(HolyGrailLayout)
