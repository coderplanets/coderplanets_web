/*
 *
 * CommunityBanner
 *
 */
import React from 'react'

import { C11N } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import DigestView from './DigestView'
import BriefView from './BriefView'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityBanner')

const CommunityBannerContainer = ({ communityBanner }) => {
  useInit(communityBanner)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    viewing: { community, activeThread },
    descExpand,
  } = communityBanner

  return (
    <div data-testid="community-banner">
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
    </div>
  )
}

export default connectStore(CommunityBannerContainer)
