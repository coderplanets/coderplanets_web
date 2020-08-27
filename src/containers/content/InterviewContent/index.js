//

/*
 *
 * InterviewContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import FilterBar from './FilterBar'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:InterviewContent')

const InterviewContentContainer = ({ interviewContent: store }) => {
  useInit(store)

  // topFilter={topFilter}
  // menuOnSelect={menuOnSelect}
  // initActiveMenuId={initActiveMenuId}
  return (
    <Wrapper testId="interviewContent">
      <InnerWrapper>
        <FilterBar />
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(InterviewContentContainer)
