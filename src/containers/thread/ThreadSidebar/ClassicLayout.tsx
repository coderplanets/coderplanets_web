/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
import PromotionList from '@/components/PromotionList'

import type { TBaseProps } from './index'

import { onCreate } from './logic'
import {
  Wrapper,
  BadgeWrapper,
  TagsBarWrapper,
  PublishWrapper,
} from './styles/classic_layout'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

type TProps = { showCommunityBadge: boolean } & TBaseProps

const ClassicLayout: FC<TProps> = ({
  showCommunityBadge,
  onTagSelect,
  onAdsClose,
}) => {
  return (
    <Wrapper testid="thread-sidebar">
      <Sticky offsetTop={50}>
        <PublishWrapper show={showCommunityBadge}>
          <PublishButton onCreate={onCreate} />
        </PublishWrapper>

        <BadgeWrapper show={!showCommunityBadge}>
          <CommunityJoinBadge />
        </BadgeWrapper>
        <TagsBarWrapper>
          <TagsBar onSelect={onTagSelect} />
        </TagsBarWrapper>
        <PromotionList onClose={onAdsClose} />
      </Sticky>
    </Wrapper>
  )
}

export default memo(ClassicLayout)
