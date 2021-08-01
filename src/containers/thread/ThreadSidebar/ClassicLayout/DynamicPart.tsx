/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { Fragment, FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'
import PromotionList from '@/components/PromotionList'

import type { TBaseProps } from '../index'

import { BadgeWrapper, TagsBarWrapper } from '../styles/classic_layout'
import { onCreate } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

type TProps = { showCommunityBadge: boolean } & TBaseProps

const ClassicLayout: FC<TProps> = ({
  showCommunityBadge,
  onTagSelect,
  onAdsClose,
}) => {
  return (
    <Fragment>
      <BadgeWrapper show={!showCommunityBadge}>
        <CommunityJoinBadge />
      </BadgeWrapper>
      <TagsBarWrapper>
        <TagsBar onSelect={onTagSelect} />
      </TagsBarWrapper>
      <PromotionList onClose={onAdsClose} />
    </Fragment>
  )
}

export default memo(ClassicLayout)
