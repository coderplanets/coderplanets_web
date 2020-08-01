/*
 *
 * DiscoveryContent
 *
 */

import React from 'react'
import { isEmpty } from 'ramda'

import { connectStore, buildLog } from '@/utils'

import Pagi from '@/components/Pagi'

import Banner from './Banner'
import Sidebar from './Sidebar'
import CommunityList from './CommunityList'
import NotFound from './NotFound'

import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  ContentsWrapper,
} from './styles'
import { useInit, pageOnChange, menuOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:DiscoveryContent')

const DiscoveryContentContainer = ({ discoveryContent: store }) => {
  useInit(store)

  const {
    searchStatus,
    pagedCommunitiesData,
    pagedCategoriesData,
    activeMenuId,
    pagiInfo,
    showFilterSidebar,
  } = store

  const { isSearchMode, searchValue } = searchStatus

  return (
    <Wrapper>
      <Banner searchStatus={searchStatus} />
      <ContentWrapper center={isSearchMode}>
        <InnerWrapper>
          <Sidebar
            show={showFilterSidebar}
            items={pagedCategoriesData}
            onItemClick={menuOnChange}
            activeId={activeMenuId}
          />
          <ContentsWrapper center={isSearchMode}>
            {!isEmpty(pagedCommunitiesData.entries) ? (
              <React.Fragment>
                <CommunityList
                  entries={pagedCommunitiesData.entries}
                  restProps={{ ...store }}
                />
                <Pagi
                  {...pagiInfo}
                  onChange={pageOnChange}
                  margin={{ bottom: '60px' }}
                >
                  <div>社区行动指南</div>
                </Pagi>
              </React.Fragment>
            ) : (
              <NotFound searchValue={searchValue} />
            )}
          </ContentsWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(DiscoveryContentContainer)
