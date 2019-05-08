/*
 *
 * CommunityBanner
 *
 */

import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { makeDebugger, storePlug, C11N } from '@utils'
import DigestView from './DigestView'
import BriefView from './BriefView'

import { useInit } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunityBanner')

const CommunityBannerContainer = ({ communityBanner }) => {
  useInit(communityBanner)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    viewing: { community, activeThread },
  } = communityBanner

  return (
    <div data-testid="community-banner">
      {bannerLayout === C11N.DIGEST ? (
        <DigestView
          community={community}
          activeThread={activeThread}
          layout={bannerLayout}
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

export default inject(storePlug('communityBanner'))(
  observer(CommunityBannerContainer)
)
