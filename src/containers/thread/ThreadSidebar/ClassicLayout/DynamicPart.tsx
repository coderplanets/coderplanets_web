/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'

import type { TThread, TCommunity } from '@/spec'

import { buildLog } from '@/utils/logger'
import { send } from '@/utils/helper'
import { EVENT } from '@/constant'

import Sticky from '@/widgets/Sticky'
// import FiltersMenu from '@/widgets/FiltersMenu'
import PublishButton from '@/widgets/Buttons/PublishButton'
import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'
// import PromotionList from '@/widgets/PromotionList'

import {
  BadgeWrapper,
  NoteWrapper,
  TagsBarWrapper,
  PublishWrapper,
} from '../styles/classic_layout'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

export type TProps = {
  showCommunityBadge: boolean
  thread: TThread
  community: TCommunity
}

const ClassicLayout: FC<TProps> = ({
  community,
  thread,
  showCommunityBadge,
}) => {
  return (
    <Sticky offsetTop={50}>
      <PublishWrapper show={showCommunityBadge}>
        {community.raw !== 'blackhole' ? (
          <PublishButton thread={thread} community={community.raw} />
        ) : (
          <NoteWrapper>
            这里的内容将不会被开放给搜索引擎，只进不出。如果有异议，可联系志愿者移出。
          </NoteWrapper>
        )}
      </PublishWrapper>
      <BadgeWrapper show={!showCommunityBadge}>
        <CommunityJoinBadge />
      </BadgeWrapper>
      <TagsBarWrapper>
        <TagsBar onSelect={() => send(EVENT.REFRESH_ARTICLES)} />
      </TagsBarWrapper>
    </Sticky>
  )
}

export default memo(ClassicLayout)
