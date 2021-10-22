/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { send } from '@/utils/helper'
import { EVENT } from '@/constant'

import type { TThread } from '@/spec'

import Sticky from '@/widgets/Sticky'
// import FiltersMenu from '@/widgets/FiltersMenu'
import PublishButton from '@/widgets/Buttons/PublishButton'
import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'
// import PromotionList from '@/widgets/PromotionList'

import type { TBaseProps } from '../index'

import {
  BadgeWrapper,
  TagsBarWrapper,
  PublishWrapper,
} from '../styles/classic_layout'
import { onCreate } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

type TProps = { showCommunityBadge: boolean; thread: TThread } & TBaseProps

const ClassicLayout: FC<TProps> = ({ showCommunityBadge, thread }) => {
  return (
    <Sticky offsetTop={50}>
      <PublishWrapper show={showCommunityBadge}>
        <PublishButton thread={thread} onCreate={onCreate} />
      </PublishWrapper>
      <BadgeWrapper show={!showCommunityBadge}>
        <CommunityJoinBadge />
      </BadgeWrapper>
      <TagsBarWrapper>
        <TagsBar onSelect={() => send(EVENT.REFRESH_ARTICLES)} />
        {/* <FiltersMenu tags={mockFilterMenuTags()} revert /> */}
      </TagsBarWrapper>
    </Sticky>
  )
}

export default memo(ClassicLayout)
