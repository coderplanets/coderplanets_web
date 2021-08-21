/*
 *
 * DiscoveryContent
 *
 */

import { FC } from 'react'
import { isEmpty } from 'ramda'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Pagi from '@/components/Pagi'

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
import { useInit, pageOnChange, menuOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:DiscoveryContent')

type TProps = {
  discoveryContent?: TStore
  metric?: TMetric
}

const DiscoveryContentContainer: FC<TProps> = ({
  discoveryContent: store,
  metric,
}) => {
  useInit(store)

  const {
    searchStatus,
    pagedCommunitiesData,
    pagedCategoriesData,
    activeMenuId,
    pagiInfo,
    showFilterSidebar,
    subscribing,
    subscribingId,
  } = store

  const { isSearchMode, searchValue } = searchStatus

  return (
    <Wrapper>
      <Banner searchStatus={searchStatus} />
      <ContentWrapper center={isSearchMode}>
        <InnerWrapper metric={metric}>
          <Sidebar
            show={showFilterSidebar}
            items={pagedCategoriesData}
            onItemClick={menuOnChange}
            activeid={activeMenuId}
          />
          <ContentsWrapper center={isSearchMode}>
            {!isEmpty(pagedCommunitiesData.entries) ? (
              <>
                <CommunityList
                  entries={pagedCommunitiesData.entries}
                  subscribing={subscribing}
                  subscribingId={subscribingId}
                />
                <Pagi
                  {...pagiInfo}
                  onChange={pageOnChange}
                  margin={{ bottom: '60px' }}
                >
                  <div>社区行动指南</div>
                </Pagi>
              </>
            ) : (
              <NotFound searchValue={searchValue} />
            )}
          </ContentsWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default pluggedIn(DiscoveryContentContainer) as FC<TProps>
