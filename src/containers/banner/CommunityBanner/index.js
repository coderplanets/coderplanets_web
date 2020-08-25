/*
 *
 * CommunityBanner
 *
 */
import React from 'react'

import { C11N } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import DigestView from './DigestView/index'
import BriefView from './BriefView'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityBanner')

const CommunityBannerContainer = ({ communityBanner: store }) => {
  useInit(store)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    viewing: { community, activeThread },
    descExpand,
  } = store

  return (
    <Wrapper testid="community-banner">
      {bannerLayout === C11N.DIGEST ? (
        <DigestView
          community={community}
          activeThread={activeThread}
          layout={bannerLayout}
          descExpand={descExpand}
        />
      ) : (
        <BriefView
          community={community}
          activeThread={activeThread}
          layout={bannerLayout}
        />
      )}
    </Wrapper>
  )
}

export default connectStore(CommunityBannerContainer)
