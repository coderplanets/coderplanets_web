/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Tabber from '@components/Tabber'
import SearchBox from './SearchBox'

import {
  BannerContainer,
  BannerContentWrapper,
  ContentWrapper,
  TabberWrapper,
  // Title,
} from './styles'

import { useInit, tabOnChange, searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const CommunitiesBannerContainer = ({ communitiesBanner }) => {
  useInit(communitiesBanner)

  const {
    pagedCategoriesData,
    activeTab,
    searchValue,
    isSearchMode,
    searching,
  } = communitiesBanner

  return (
    <BannerContainer testid="communities-banner">
      <BannerContentWrapper>
        <ContentWrapper>
          <SearchBox
            onChange={searchOnChange}
            value={searchValue}
            searching={searching}
          />
        </ContentWrapper>
        {!isSearchMode && pagedCategoriesData && (
          <TabberWrapper>
            <Tabber
              source={pagedCategoriesData.entries}
              active={activeTab}
              onChange={tabOnChange}
            />
          </TabberWrapper>
        )}
      </BannerContentWrapper>
    </BannerContainer>
  )
}

export default connectStore(CommunitiesBannerContainer)
