/*
 *
 * CommunityDigest
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
const log = buildLog('C:CommunityDigest')

const CommunityDigestContainer = ({ communityDigest: store }) => {
  useInit(store)

  const {
    accountInfo: {
      customization: { bannerLayout },
    },
    viewing: { community, activeThread },
    descExpand,
    isHeaderFixed,
  } = store

  return (
    <Wrapper testId="community-banner">
      {bannerLayout === C11N.BRIEF ? (
        <BriefView
          community={community}
          activeThread={activeThread}
          layout={bannerLayout}
        />
      ) : (
        <DigestView
          community={community}
          activeThread={activeThread}
          layout={bannerLayout}
          descExpand={descExpand}
          isHeaderFixed={isHeaderFixed}
        />
      )}
    </Wrapper>
  )
}

export default connectStore(CommunityDigestContainer)
