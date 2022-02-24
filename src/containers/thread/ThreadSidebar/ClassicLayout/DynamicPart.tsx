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
import { SpaceGrow } from '@/widgets/Common'
// import FiltersMenu from '@/widgets/FiltersMenu'
import PublishButton from '@/widgets/Buttons/PublishButton'
import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'
// import PromotionList from '@/widgets/PromotionList'

import {
  BadgeWrapper,
  NoteWrapper,
  TagsBarWrapper,
  StickyWrapper,
  CommunityNoteWrapper,
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
      <CommunityNoteWrapper>
        关于 CoderPlanets 的各种建议，吐槽等请发布到这里
      </CommunityNoteWrapper>
      <StickyWrapper>
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
        <SpaceGrow />
      </StickyWrapper>
    </Sticky>
  )
}

export default memo(ClassicLayout)
