/*
 *
 * TrendingContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import { OrButton } from '@/components/Buttons'
import NewsBoard from './NewsBoard'

import { Wrapper, InnerWrapper, SwitchBtn, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:TrendingContent')

const TrendingContentContainer = ({ trendingContent: store }) => {
  useInit(store)

  return (
    <Wrapper testid="trendingContent">
      <InnerWrapper>
        <SwitchBtn>
          <OrButton
            direction="column"
            type="primary"
            activeKey="inside"
            group={[
              {
                key: 'inside',
                title: '站内',
              },
              {
                key: 'outside',
                title: '站外',
              },
            ]}
          />
        </SwitchBtn>
        <ContentWrapper>
          <NewsBoard />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(TrendingContentContainer)
