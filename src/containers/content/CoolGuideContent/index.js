/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'
import { GUIDE } from '@/constant'

import FilterBar from './FilterBar'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, menuOnSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const CoolGuideContentContainer = ({ coolGuideContent: store }) => {
  useInit(store)

  const { initActiveMenuId, topFilter, displayType } = store

  return (
    <Wrapper testId="cool-guide-content">
      <InnerWrapper>
        <FilterBar
          topFilter={topFilter}
          menuOnSelect={menuOnSelect}
          initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper marginRight={displayType !== GUIDE.PREVIEW}>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CoolGuideContentContainer)
