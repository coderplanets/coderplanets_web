//

/*
 *
 * SubscribeContent
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SubscribeContent')

const SubscribeContentContainer = ({ subscribeContent: store, testid }) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <h2>SubscribeContent hooks container!</h2>
        <div>impress me!</div>
      </InnerWrapper>
    </Wrapper>
  )
}

SubscribeContentContainer.propTypes = {
  subscribeContent: T.any.isRequired,
  testid: T.string,
}

SubscribeContentContainer.defaultProps = {
  testid: 'subscribeContent',
}

export default connectStore(SubscribeContentContainer)
