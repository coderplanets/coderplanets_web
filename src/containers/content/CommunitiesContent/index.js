/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { connectStore, buildLog } from '@utils'

import FiltersMenu from '@components/FiltersMenu'
import Pagi from '@components/Pagi'

import CommunityCards from './CommunityCards'

import {
  Wrapper,
  InnerWrapper,
  FiltersWrapper,
  ContentsWrapper,
} from './styles'
import { useInit, pageOnChange, menuOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const CommunitiesContentContainer = ({ communitiesContent }) => {
  useInit(communitiesContent)
  const {
    pagedCommunitiesData,
    pagedCategoriesData,
    activeMenuId,
  } = communitiesContent

  return (
    <Wrapper>
      <InnerWrapper>
        <FiltersWrapper>
          <Affix offsetTop={60}>
            <FiltersMenu
              items={pagedCategoriesData}
              onItemClick={menuOnChange}
              activeId={activeMenuId}
              noFilter
            />
          </Affix>
        </FiltersWrapper>
        <ContentsWrapper>
          {pagedCommunitiesData && (
            <React.Fragment>
              <CommunityCards
                entries={pagedCommunitiesData.entries}
                restProps={{ ...communitiesContent }}
              />
              <Pagi
                left="-10px"
                pageNumber={pagedCommunitiesData.pageNumber}
                pageSize={pagedCommunitiesData.pageSize}
                totalCount={pagedCommunitiesData.totalCount}
                onChange={pageOnChange}
              />
            </React.Fragment>
          )}
        </ContentsWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CommunitiesContentContainer)
