//

/*
 *
 * SnippetsContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'
import { SNIPPET } from '@constant'

import Snippets from './Snippets'
import Cheatsheets from './Cheatsheets'
import FilterBar from './FilterBar'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:SnippetsContent')

const SnippetsContentContainer = ({ snippetsContent }) => {
  useInit(snippetsContent)

  const { galleryType, mainView } = snippetsContent

  return (
    <Wrapper testid="snippetsContent">
      <InnerWrapper>
        <FilterBar
          mainView={mainView}
          // topFilter={topFilter}
          // menuOnSelect={menuOnSelect}
          // initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper>
          {mainView === SNIPPET.SNIPPETS_VIEW ? (
            <Snippets galleryType={galleryType} />
          ) : (
            <Cheatsheets galleryType={galleryType} />
          )}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(SnippetsContentContainer)
