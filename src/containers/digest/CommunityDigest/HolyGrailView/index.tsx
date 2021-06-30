import { FC, Fragment, memo } from 'react'

import type { TCommunity } from '@/spec'
import { THREAD } from '@/constant'

import { Br } from '@/components/Common'
import Sticky from '@/components/Sticky'
import TagsBar from '@/containers/unit/TagsBar'
import { PublishButton } from '@/components/Buttons'

import CommunityBrief from './CommunityBrief'
import ExtraInfo from './ExtraInfo'

import { Wrapper, Divider } from '../styles/holy_grail_view'

// 没有各种外链接，打赏信息等的官方社区

type TProps = {
  community: TCommunity
}

const HolyGrailView: FC<TProps> = ({ community }) => {
  return (
    <Fragment>
      <CommunityBrief community={community} />
      <Divider />
      <ExtraInfo />
      <Br top={25} bottom={20} />
      <PublishButton />
      <Br top={22} bottom={30} />
      <Sticky offsetTop={80}>
        <Wrapper>
          <TagsBar thread={THREAD.POST} onSelect={console.log} />
        </Wrapper>
      </Sticky>
    </Fragment>
  )
}

export default memo(HolyGrailView)
