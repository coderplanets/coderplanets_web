/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { connectStore, buildLog } from '@utils'

import FiltersMenu from '@components/FiltersMenu'
import PagiFooter from '@components/PagiFooter'

import Banner from './Banner'
import CommunityCards from './CommunityCards'

import {
  Wrapper,
  ContentWrapper,
  InnerWrapper,
  FiltersWrapper,
  ContentsWrapper, // move out
} from './styles'
import { useInit, pageOnChange, menuOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const CommunitiesContentContainer = ({ communitiesContent }) => {
  useInit(communitiesContent)
  const {
    searchStatus,
    pagedCommunitiesData,
    pagedCategoriesData,
    activeMenuId,
    pagiInfo,
  } = communitiesContent

  const { isSearchMode } = searchStatus

  return (
    <Wrapper>
      <Banner searchStatus={searchStatus} />
      <ContentWrapper center={isSearchMode}>
        <InnerWrapper>
          <FiltersWrapper show={!isSearchMode}>
            <Affix offsetTop={60}>
              <FiltersMenu
                items={pagedCategoriesData}
                onItemClick={menuOnChange}
                activeId={activeMenuId}
                noFilter
              />
            </Affix>
          </FiltersWrapper>
          <ContentsWrapper center={isSearchMode}>
            {pagedCommunitiesData && (
              <React.Fragment>
                <CommunityCards
                  entries={pagedCommunitiesData.entries}
                  restProps={{ ...communitiesContent }}
                />
                <PagiFooter {...pagiInfo} onChange={pageOnChange}>
                  <div>社区行动指南</div>
                </PagiFooter>
                <br />
                <br />
                <br />
              </React.Fragment>
            )}
          </ContentsWrapper>
        </InnerWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(CommunitiesContentContainer)
