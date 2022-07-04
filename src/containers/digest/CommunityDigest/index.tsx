/*
 *
 * CommunityDigest
 *
 */
import { FC, Fragment } from 'react'

import type { TMetric } from '@/spec'
import { METRIC, BANNER_LAYOUT } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ClassicLayout from './ClassicLayout'
import SimpleLayout from './SimpleLayout'

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

  const { curThread, curCommunity, globalLayout } = store

  return (
    <Fragment>
      {globalLayout.banner === BANNER_LAYOUT.TABBER ? (
        <ClassicLayout
          metric={metric}
          community={curCommunity}
          activeThread={curThread}
        />
      ) : (
        <SimpleLayout
          metric={metric}
          community={curCommunity}
          activeThread={curThread}
        />
      )}
    </Fragment>
  )
}

export default bond(CommunityDigestContainer, 'communityDigest') as FC<TProps>
