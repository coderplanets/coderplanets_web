/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { ArrowButton } from '@components/FanceButtons'

// import SearchBox from './SearchBox'

import {
  BannerContainer,
  IntroWraper,
  IntroTitle,
  IntroDesc,
  CreateButton,
  AddNewIcon,
  NextBtn,
} from './styles/banner'

import SelectBoxes from './SelectBoxes'
// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const Banner = ({
  communityType,
  searchStatus: {
    searchValue,
    // showSearchMask,
    showCreateHint,
    showSearchHint,
    showSearchResultHint,
    searchResultCount,
  },
}) => {
  return (
    <BannerContainer testid="communities-banner">
      <IntroWraper>
        <IntroTitle>
          <AddNewIcon src={`${ICON_CMD}/community_new.svg`} />
          你想创建一个什么类型的社区?
        </IntroTitle>
        <SelectBoxes communityType={communityType} />
        {/* <SearchBox
          showSearchMask={showSearchMask}
          onChange={searchOnChange}
          value={searchValue}
          searching={false}
        /> */}

        <NextBtn>
          <ArrowButton size="large">下一步</ArrowButton>
        </NextBtn>

        {showSearchResultHint && (
          <IntroDesc>
            共找到 &apos;{searchValue} &apos; 相关社区 {searchResultCount} 个
          </IntroDesc>
        )}
        {showSearchHint && (
          <IntroDesc>
            可用关键字搜索社区，比如: &apos;react&apos;, &apos;elixir&apos; 等
          </IntroDesc>
        )}

        {showCreateHint && (
          <IntroDesc>
            或者，来为你
            <CreateButton>建立一个新社区</CreateButton>吧！
          </IntroDesc>
        )}
      </IntroWraper>
    </BannerContainer>
  )
}

export default Banner
