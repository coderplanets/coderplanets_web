/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { ICON_CMD } from '@config'
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
import { useInit, pageOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesContent')

const filtersItems = [
  {
    id: '0',
    title: '编程语言',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '101',
    title: '大数据',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '102',
    title: '后端',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '103',
    title: '移动端',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '1033',
    title: 'AI / 算法',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '104',
    title: '设计',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '105',
    title: '区块链',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '106',
    title: '同城',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '107',
    title: '其他',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
]

const CommunitiesContentContainer = ({ communitiesContent }) => {
  useInit(communitiesContent)
  const { pagedCommunitiesData, pagedCategoriesData } = communitiesContent

  console.log('bbb -> pagedCategoriesData: ', pagedCategoriesData)

  return (
    <Wrapper>
      <InnerWrapper>
        <FiltersWrapper>
          <Affix offsetTop={60}>
            <FiltersMenu items={filtersItems} noFilter />
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
