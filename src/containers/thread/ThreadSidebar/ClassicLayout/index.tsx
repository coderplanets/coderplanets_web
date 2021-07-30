/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils'

import Sticky from '@/components/Sticky'
import { LavaLampLoading } from '@/components/Loading'
import { PublishButton } from '@/components/Buttons'

import type { TBaseProps } from '../index'

import { Wrapper, PublishWrapper } from '../styles/classic_layout'
import { onCreate } from '../logic'

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
        <DynamicPart
          onTagSelect={onTagSelect}
          onAdsClose={onAdsClose}
          showCommunityBadge={showCommunityBadge}
        />
      </Sticky>
    </Wrapper>
  )
}

export default memo(ClassicLayout)
