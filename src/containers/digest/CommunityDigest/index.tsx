/*
 *
 * CommunityDigest
 *
 */
import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ClassicLayout from './ClassicLayout'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityDigest')

type TProps = {
  communityDigest?: TStore
  metric?: TMetric
}

const CommunityDigestContainer: FC<TProps> = ({
  communityDigest: store,
  metric = METRIC.COMMUNITY,
}) => {
  useInit(store)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    realtimeVisitors,
    curThread,
    curCommunity,
    descExpand,
  } = store

  return (
    <ClassicLayout
      metric={metric}
      realtimeVisitors={realtimeVisitors}
      community={curCommunity}
      activeThread={curThread}
      layout={bannerLayout}
      descExpand={descExpand}
    />
  )
}

export default bond(CommunityDigestContainer, 'communityDigest') as FC<TProps>
