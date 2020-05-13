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

const CoolGuideContentContainer = ({ coolGuideContent }) => {
  useInit(coolGuideContent)

  const { initActiveMenuId, topFilter, displayType } = coolGuideContent

  return (
    <Wrapper>
      <InnerWrapper>
        <FilterBar
          topFilter={topFilter}
          menuOnSelect={menuOnSelect}
          initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper offset={displayType !== GUIDE.PREVIEW}>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CoolGuideContentContainer)
