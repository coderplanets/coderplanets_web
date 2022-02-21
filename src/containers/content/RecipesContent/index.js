//

/*
 *
 * RecipesContent
 *
 */

import React from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { RECIPE } from '@/constant'

import Snippets from './Snippets'
import Cheatsheets from './Cheatsheets'
import FilterBar from './FilterBar'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RecipesContent')

const RecipesContentContainer = ({ recipesContent: store, metric }) => {
  useInit(store)

  const { galleryType, mainView } = store

  return (
    <Wrapper testid="recipes-content">
      <InnerWrapper metric={metric}>
        <FilterBar
          mainView={mainView}
          // topFilter={topFilter}
          // menuOnSelect={menuOnSelect}
          // initActiveMenuId={initActiveMenuId}
        />
        <ContentWrapper>
          {mainView === RECIPE.SNIPPETS_VIEW ? (
            <Snippets galleryType={galleryType} />
          ) : (
            <Cheatsheets galleryType={galleryType} />
          )}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(RecipesContentContainer, 'recipesContent')
