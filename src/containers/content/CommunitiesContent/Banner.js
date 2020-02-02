/*
 *
 * CommunitiesBanner
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import SearchBox from './SearchBox'

import {
  BannerContainer,
  IntroWraper,
  IntroTitle,
  IntroDesc,
  SlogenTextWrapper,
  CreateButton,
  SearchIcon,
} from './styles/banner'

import { searchOnChange } from './logic'

const SlogenText = dynamic({
  loader: () => import('./SlogenText'),
  // eslint-disable-next-line react/display-name
  loading: () => <SlogenTextWrapper>心爱的作品</SlogenTextWrapper>,
  ssr: false,
})
/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const Banner = ({ searchValue }) => {
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
          searching={false}
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
    </BannerContainer>
  )
}

export default Banner
