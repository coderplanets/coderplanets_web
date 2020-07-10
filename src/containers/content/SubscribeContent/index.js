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

const SubscribeContentContainer = ({ subscribeContent: store, testid }) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <Content />
        <StickyWrapper offsetTop={150}>
          <Actions />
        </StickyWrapper>
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
