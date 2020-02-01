/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'

import Tabber from '@components/Tabber'
import SearchBox from './SearchBox'

import {
  BannerContainer,
  IntroWraper,
  IntroTitle,
  IntroDesc,
  SlogenTextWrapper,
  // SlogenText,
  CreateButton,
  BannerContentWrapper,
  ContentWrapper,
  TabberWrapper,
  SearchIcon,
  // Title,
} from './styles'

import { useInit, tabOnChange, searchOnChange } from './logic'

const SlogenText = dynamic({
  loader: () => import('./SlogenText'),
  // eslint-disable-next-line react/display-name
  loading: () => <SlogenTextWrapper>心爱的作品</SlogenTextWrapper>,
  ssr: false,
})
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
        <IntroDesc>
          或者，来为你
          <SlogenText />
          <CreateButton>建立一个新社区</CreateButton>吧！
          {/* <Button ghost type="primary" size="small">
          建立新社区
        </Button> */}
        </IntroDesc>
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
