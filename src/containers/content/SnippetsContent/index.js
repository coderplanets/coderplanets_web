//

/*
 *
 * SnippetsContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Content from './Content'
import FilterBar from './FilterBar'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SnippetsContent')

const SnippetsContentContainer = ({ snippetsContent }) => {
  useInit(snippetsContent)

  const { displayType } = snippetsContent

  return (
    <Wrapper testid="snippetsContent">
      <InnerWrapper>
        <FilterBar
        // topFilter={topFilter}
        // menuOnSelect={menuOnSelect}
        // initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(SnippetsContentContainer)
