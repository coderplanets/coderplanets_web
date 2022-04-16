/*
 *
 * CommunitiesBanner
 *
 */

import { FC, memo } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

import { ICON_CMD } from '@/config'
import { ROUTE } from '@/constant'
import { buildLog } from '@/utils/logger'
import { Space } from '@/widgets/Common'

import type { TSearchState } from './spec'
import SearchBox from './SearchBox'

import {
  Wrapper,
  IntroWrapper,
  IntroTitle,
  IntroDesc,
  CreateCommunityLink,
  SearchIcon,
} from './styles/banner'

import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const SloganText = dynamic(() => import('./SloganText'), {
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
  ssr: false,
})

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
  },
}) => {
  return (
    <Wrapper testid="explore-banner">
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

        {showSearchResultHint && <IntroDesc>支持中文以及英文大小写</IntroDesc>}
        {showSearchHint && (
          <IntroDesc>
            可用关键字搜索社区，比如: &apos;react&apos;, &apos;elixir&apos; 等
          </IntroDesc>
        )}

        {showCreateHint && !isMobile && (
          <IntroDesc>
            <Space right={24} />
            或者，来为你
            {/* @ts-ignore */}
            <SloganText />
            <Link href={`/${ROUTE.APPLY_COMMUNITY}`} passHref>
              <CreateCommunityLink>建立一个社区</CreateCommunityLink>
            </Link>
            吧！
          </IntroDesc>
        )}
      </IntroWrapper>
    </Wrapper>
  )
}

export default memo(Banner)
