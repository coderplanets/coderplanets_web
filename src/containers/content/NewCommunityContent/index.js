/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Banner from './Banner'

import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  ContentsWrapper, // move out
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const NewCommunityContentContainer = ({ newCommunityContent }) => {
  useInit(newCommunityContent)
  const { searchStatus } = newCommunityContent

  const { isSearchMode } = searchStatus

  return (
    <Wrapper>
      <Banner searchStatus={searchStatus} />
      <ContentWrapper center={isSearchMode}>
        <InnerWrapper>
          <ContentsWrapper center={isSearchMode}>
            <div>contents</div>
          </ContentsWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(NewCommunityContentContainer)
