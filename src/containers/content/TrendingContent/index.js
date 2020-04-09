/*
 *
 * TrendingContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import { OrButton } from '@components/Buttons'
import NewsBoard from './NewsBoard'

import { Wrapper, InnerWrapper, SwitchBtn, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:TrendingContent')

const TrendingContentContainer = ({ trendingContent }) => {
  useInit(trendingContent)

  return (
    <Wrapper testid="trendingContent">
      <InnerWrapper>
        <SwitchBtn>
          <OrButton direction="vertical" />
        </SwitchBtn>
        <ContentWrapper>
          <NewsBoard />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(TrendingContentContainer)
