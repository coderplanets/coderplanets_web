/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'

import { Button } from 'antd'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'

import Tabber from '@components/Tabber'
import SearchBox from './SearchBox'

import {
  BannerContainer,
  IntroWraper,
  IntroTitle,
  BannerContentWrapper,
  ContentWrapper,
  TabberWrapper,
  SearchIcon,
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
      <IntroWraper>
        <IntroTitle>
          <SearchIcon src={`${ICON_CMD}/search.svg`} />
          寻找你感兴趣的社区
        </IntroTitle>
        <SearchBox
          onChange={searchOnChange}
          value={searchValue}
          searching={searching}
        />
        <Button ghost type="primary" size="small">
          + &nbsp;建立新社区
        </Button>
      </IntroWraper>
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
