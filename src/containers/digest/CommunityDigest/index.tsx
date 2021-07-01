/*
 *
 * CommunityDigest
 *
 */
import { FC } from 'react'

import { C11N, METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import ClassicView from './ClassicView'
import HolyGrailView from './HolyGrailView'

import type { TStore } from './store'
import { Wrapper } from './styles'
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
    <Wrapper testid="community-digest">
      {bannerLayout === C11N.DIGEST ? (
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
    </Wrapper>
  )
}

export default pluggedIn(CommunityDigestContainer) as FC<TProps>
