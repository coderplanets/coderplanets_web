/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'

import FilterBar from './FilterBar'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, menuOnSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const CoolGuideContentContainer = ({ coolGuideContent: store, metric }) => {
  useInit(store)

  const { initActiveMenuId, topFilter, displayType } = store

  return (
    <Wrapper testid="cool-guide-content">
      <InnerWrapper metric={metric}>
        <FilterBar
          topFilter={topFilter}
          menuOnSelect={menuOnSelect}
          initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CoolGuideContentContainer)
