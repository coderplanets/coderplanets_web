/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'
// import dynamic from 'next/dynamic'

import type { TThread, TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'

// import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import DynamicPart from './DynamicPart'

import type { TBaseProps } from '../index'

import { Wrapper } from '../styles/classic_layout'

/* eslint-disable-next-line */
const log = buildLog('w:ClassicSidebar')

export type TProps = {
  showCommunityBadge: boolean
  thread: TThread
  community: TCommunity
} & TBaseProps

const ClassicLayout: FC<TProps> = ({
  showCommunityBadge,
  thread,
  community,
}) => {
  return (
    <Wrapper testid="thread-sidebar">
      <DynamicPart
        community={community}
        thread={thread}
        showCommunityBadge={showCommunityBadge}
      />
    </Wrapper>
  )
}

export default memo(ClassicLayout)
