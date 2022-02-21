/*
 *
 * ExploreContent
 *
 */

import { FC } from 'react'
import { isEmpty } from 'ramda'
import { isMobile } from 'react-device-detect'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Pagi from '@/widgets/Pagi'

import Banner from './Banner'
import Sidebar from './Sidebar'
import CommunityList from './CommunityList'
import NotFound from './NotFound'

import type { TStore } from './store'
import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  ContentsWrapper,
} from './styles'
import { useInit, pageOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ExploreContent')

type TProps = {
  exploreContent?: TStore
  metric?: TMetric
}

const ExploreContentContainer: FC<TProps> = ({
  exploreContent: store,
  metric,
}) => {
  useInit(store)

  const {
    searchStatus,
    pagedCommunitiesData,
    pagedCategoriesData,
    pagiInfo,
    showFilterSidebar,
  } = store

  const { isSearchMode } = searchStatus

  return (
    <Wrapper>
      <Banner searchStatus={searchStatus} />
      <ContentWrapper center={isSearchMode}>
        <InnerWrapper metric={metric}>
          {!isMobile && (
            <Sidebar
              showSearchNote={!showFilterSidebar}
              searchStatus={searchStatus}
              items={pagedCategoriesData}
            />
          )}

          <ContentsWrapper center={isSearchMode}>
            {!isEmpty(pagedCommunitiesData.entries) ? (
              <>
                <CommunityList entries={pagedCommunitiesData.entries} />
                <Pagi
                  {...pagiInfo}
                  onChange={pageOnChange}
                  margin={{ top: '30px', bottom: '40px' }}
                />
              </>
            ) : (
              <NotFound showSearchNote={!showFilterSidebar} />
            )}
          </ContentsWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default bond(ExploreContentContainer, 'exploreContent') as FC<TProps>
