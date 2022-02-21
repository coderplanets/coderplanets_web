/*
 *
 * SubscribeContent
 *
 */
import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Content from './Content'
import Actions from './Actions'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, StickyWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SubscribeContent')

type TProps = {
  subscribeContent?: TStore
  testid?: string
  metric?: TMetric
}

const SubscribeContentContainer = ({
  subscribeContent: store,
  testid = 'subscribe-content',
  metric = METRIC.SUBSCRIBE,
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <Content />
        <StickyWrapper offsetTop={200}>
          <Actions />
        </StickyWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

// @ts-ignore
export default bond(SubscribeContentContainer, 'subscribeContent') as FC<TProps>
