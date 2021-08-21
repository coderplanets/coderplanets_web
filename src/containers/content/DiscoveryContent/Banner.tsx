/*
 *
 * CommunitiesBanner
 *
 */

import { FC, memo } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import type { TSearchState } from './spec'
import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import SearchBox from './SearchBox'

import {
  BannerContainer,
  IntroWrapper,
  IntroTitle,
  IntroDesc,
  SloganTextWrapper,
  CreateCommunityLink,
  SearchIcon,
} from './styles/banner'

import { searchOnChange } from './logic'

export const SloganText = dynamic(() => import('./SloganText'), {
  /* eslint-disable react/display-name */
  loading: () => <SloganTextWrapper>心爱的作品</SloganTextWrapper>,
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

type TProps = {
  searchStatus: TSearchState
}

const Banner: FC<TProps> = ({
  searchStatus: {
    searchValue,
    showSearchMask,
    showCreateHint,
    showSearchHint,
    showSearchResultHint,
    searchResultCount,
  },
}) => {
  return (
    <BannerContainer testid="discovery-banner">
      <IntroWrapper>
        <IntroTitle>
          <SearchIcon src={`${ICON_CMD}/search.svg`} />
          寻找你感兴趣的社区
        </IntroTitle>
        <SearchBox
          showSearchMask={showSearchMask}
          onChange={searchOnChange}
          value={searchValue}
        />

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
            <SloganText />
            <Link href="/create/community" passHref>
              <CreateCommunityLink>建立一个社区</CreateCommunityLink>
            </Link>
            吧！
          </IntroDesc>
        )}
      </IntroWrapper>
    </BannerContainer>
  )
}

export default memo(Banner)
