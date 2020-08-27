//

/*
 *
 * SubscribeContent
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import Content from './Content'
import Actions from './Actions'

import { Wrapper, InnerWrapper, StickyWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SubscribeContent')

const SubscribeContentContainer = ({ subscribeContent: store, testId }) => {
  useInit(store)

  const { subscribeView } = store

  return (
    <Wrapper testId={testId}>
      <InnerWrapper>
        <Content />
        <StickyWrapper offsetTop={200}>
          <Actions view={subscribeView} />
        </StickyWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

SubscribeContentContainer.propTypes = {
  subscribeContent: T.any.isRequired,
  testId: T.string,
}

SubscribeContentContainer.defaultProps = {
  testId: 'subscribe-content',
}

export default connectStore(SubscribeContentContainer)
