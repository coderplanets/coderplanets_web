/*
 *
 * PostsThread
 *
 */

import { FC } from 'react'

import type { TTag } from '@/spec'
import { THREAD } from '@/constant'
import { buildLog } from '@/utils'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
import PromotionList from '@/components/PromotionList'

import {
  Wrapper,
  BadgeWrapper,
  TagsBarWrapper,
  PublishWrapper,
} from './styles/classic_sidebar'

import { onContentCreate, onTagSelect, onAdsClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostsThread')

type TProps = {
  show: boolean
  activeTag: TTag
}

const ClassicSidebar: FC<TProps> = ({ show, activeTag }) => {
  return (
    <Wrapper>
      <PublishWrapper show={show}>
        <PublishButton onCreate={() => onContentCreate()} />
      </PublishWrapper>

      <Sticky offsetTop={55}>
        <BadgeWrapper show={!show}>
          <CommunityJoinBadge />
        </BadgeWrapper>
        <TagsBarWrapper>
          <TagsBar
            thread={THREAD.POST}
            onSelect={onTagSelect}
            active={activeTag}
          />
        </TagsBarWrapper>
        <PromotionList onClose={onAdsClose} />
      </Sticky>
    </Wrapper>
  )
}

export default ClassicSidebar
