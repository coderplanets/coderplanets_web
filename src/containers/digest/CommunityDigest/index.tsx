/*
 *
 * CommunityDigest
 *
 */
import { FC, Fragment } from 'react'

import { C11N, METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import ClassicView from './ClassicView'
import HolyGrailView from './HolyGrailView'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityDigest')

type TProps = {
  communityDigest?: TStore
  metric?: string
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
    descExpand,
  } = store

  return (
    <Fragment>
      {bannerLayout === C11N.CLASSIC ? (
        <ClassicView
          metric={metric}
          community={curCommunity}
          activeThread={curThread}
          layout={bannerLayout}
          descExpand={descExpand}
        />
      ) : (
        <HolyGrailView community={curCommunity} />
      )}
    </Fragment>
  )
}

export default pluggedIn(CommunityDigestContainer) as FC<TProps>
