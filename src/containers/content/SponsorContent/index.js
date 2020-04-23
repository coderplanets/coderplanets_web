//

/*
 *
 * SponsorContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import { SponsorGallery } from '@components/GalleryHub'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SponsorContent')

const SponsorContentContainer = ({ sponsorContent }) => {
  useInit(sponsorContent)

  return (
    <Wrapper testid="sponsorContent">
      <InnerWrapper>
        <SponsorGallery />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(SponsorContentContainer)
