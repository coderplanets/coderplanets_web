/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Banner from './Banner'
import Content from './Content'

import { Wrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const NewCommunityContentContainer = ({ newCommunityContent }) => {
  useInit(newCommunityContent)
  const { searchStatus, communityType } = newCommunityContent

  return (
    <Wrapper>
      <Banner searchStatus={searchStatus} communityType={communityType} />
      <ContentWrapper>
        <Content communityType={communityType} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(NewCommunityContentContainer)
