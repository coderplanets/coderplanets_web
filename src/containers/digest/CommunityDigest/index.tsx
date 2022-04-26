/*
 *
 * CommunityDigest
 *
 */
import { FC, Fragment } from 'react'

import type { TMetric } from '@/spec'
import { METRIC, C11N } from '@/constant'
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

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    curThread,
    curCommunity,
  } = store

  return (
    <Fragment>
      {bannerLayout === C11N.CLASSIC ? (
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
