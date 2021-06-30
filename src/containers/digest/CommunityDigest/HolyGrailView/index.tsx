import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { THREAD } from '@/constant'

import Sticky from '@/components/Sticky'
import TagsBar from '@/containers/unit/TagsBar'

import CommunityBrief from './CommunityBrief'
import ExtraInfo from './ExtraInfo'

import { Wrapper, Divider } from '../styles/holy_grail_view'

// 没有各种外链接，打赏信息等的官方社区

type TProps = {
  community: TCommunity
}

const HolyGrailView: FC<TProps> = ({ community }) => {
  return (
    <>
      <CommunityBrief community={community} />
      <Divider />
      <ExtraInfo />
      <Divider />
      <Sticky offsetTop={80}>
        <Wrapper>
          <TagsBar thread={THREAD.POST} onSelect={console.log} />
        </Wrapper>
      </Sticky>
    </>
  )
}

export default memo(HolyGrailView)
