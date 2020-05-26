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

  return (
    <Wrapper testid="interviewContent">
      <InnerWrapper>
        <FilterBar
        // topFilter={topFilter}
        // menuOnSelect={menuOnSelect}
        // initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(InterviewContentContainer)
