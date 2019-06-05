/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'

import { connectStore, makelogger } from '@utils'

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
const log = makelogger('C:CommunitiesBanner')

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
    <BannerContainer>
      <BannerContentWrapper>
        <ContentWrapper>
          <SearchBox
            onChange={searchOnChange}
            value={searchValue}
            searching={searching}
          />
        </ContentWrapper>
        {!isSearchMode &&
          pagedCategoriesData && (
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
