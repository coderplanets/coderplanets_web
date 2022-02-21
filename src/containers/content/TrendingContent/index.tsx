/*
 *
 * TrendingContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import OrButton from '@/widgets/Buttons/OrButton'
import NewsBoard from './NewsBoard'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, SwitchBtn, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:TrendingContent')

type TProps = {
  trendingContent?: TStore
  metric?: TMetric
}

const TrendingContentContainer: FC<TProps> = ({
  trendingContent: store,
  metric = METRIC.TRENDING,
}) => {
  useInit(store)

  return (
    <Wrapper testid="trendingContent">
      <InnerWrapper metric={metric}>
        <SwitchBtn>
          <OrButton
            direction="column"
            activeKey="outside"
            group={[
              {
                key: 'outside',
                title: '站外',
              },
              {
                key: 'inside',
                title: '站内',
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

export default bond(TrendingContentContainer, 'trendingContent') as FC<TProps>
