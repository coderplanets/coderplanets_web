/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'

import LavaLampLoading from '@/components/Loading/LavaLampLoading'

import type { TBaseProps } from '../index'

import { Wrapper } from '../styles/classic_layout'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

export const DynamicPart = dynamic(() => import('./DynamicPart'), {
  /* eslint-disable react/display-name */
  loading: () => (
    <>
      <br />
      <LavaLampLoading size="small" />
    </>
  ),
  ssr: false,
})

type TProps = { showCommunityBadge: boolean } & TBaseProps

const ClassicLayout: FC<TProps> = ({ showCommunityBadge, onTagSelect }) => {
  return (
    <Wrapper testid="thread-sidebar">
      <DynamicPart
        onTagSelect={onTagSelect}
        showCommunityBadge={showCommunityBadge}
      />
    </Wrapper>
  )
}

export default memo(ClassicLayout)
