/*
 *
 * Content
 *
 */

import React from 'react'

import NewsBoard from './NewsBoard'
// import NormalList from './NormalList'

import { Wrapper, InnerWrapper } from './styles/content'

const Content = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <NewsBoard />
        {/* <NormalList /> */}
      </InnerWrapper>
    </Wrapper>
  )
}

export default Content
