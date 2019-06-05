/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'

import { connectStore, makelogger } from '@utils'

import Pagi from '@components/Pagi'
import CommunityCards from './CommunityCards'

import { Wrapper } from './styles'
import { useInit, pageOnChange } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:CommunitiesContent')

const CommunitiesContentContainer = ({ communitiesContent }) => {
  useInit(communitiesContent)
  const { pagedCommunitiesData } = communitiesContent

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default connectStore(CommunitiesContentContainer)
