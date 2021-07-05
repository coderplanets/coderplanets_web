/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC } from 'react'

import { THREAD } from '@/constant'
import { buildLog } from '@/utils'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
// import PromotionList from '@/components/PromotionList'

import type { TBaseProps } from './index'

import {
  Wrapper,
  BadgeWrapper,
  TagsBarWrapper,
  PublishWrapper,
} from './styles/classic_view'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

type TProps = { showCommunityBadge: boolean } & TBaseProps

const ClassicView: FC<TProps> = ({
  showCommunityBadge,
  activeTag,
  onCreate,
  onTagSelect,
  onAdsClose,
}) => {
  return (
    <Wrapper testid="thread-sidebar">
      <PublishWrapper show={showCommunityBadge}>
        <PublishButton onCreate={() => onCreate()} />
      </PublishWrapper>

      <Sticky offsetTop={55}>
        <BadgeWrapper show={!showCommunityBadge}>
          <CommunityJoinBadge />
        </BadgeWrapper>
        <TagsBarWrapper>
          <TagsBar
            thread={THREAD.POST}
            onSelect={onTagSelect}
            active={activeTag}
          />
        </TagsBarWrapper>
        {/* <PromotionList onClose={onAdsClose} /> */}
      </Sticky>
    </Wrapper>
  )
}

export default ClassicView
