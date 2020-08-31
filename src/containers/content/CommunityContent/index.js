/*
 *
 * CommunityContent
 *
 */

import React from 'react'

import { ROUTE, C11N } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import TabBar from '@/components/TabBar'
import PostsThread from '@/containers//thread/PostsThread'
import VideosThread from '@/containers/thread/VideosThread'
import ReposThread from '@/containers/thread/ReposThread'
import WikiThread from '@/containers/thread/WikiThread'
import JobsThread from '@/containers/thread/JobsThread'
import UsersThread from '@/containers/thread/UsersThread'
import CheatsheetThread from '@/containers/thread/CheatsheetThread'

import { Wrapper, InnerWrapper, TabBarWrapper } from './styles'
import { useInit, tabberChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

const ComunityContent = ({ curRoute }) => {
  const { subPath } = curRoute
  switch (subPath) {
    case ROUTE.REPOS:
      return <ReposThread />

    case ROUTE.USERS:
      return <UsersThread />

    case ROUTE.VIDEOS:
      return <VideosThread />

    case ROUTE.JOBS:
      return <JobsThread />

    case ROUTE.WIKI:
      return <WikiThread />

    case ROUTE.CHEATSHEET:
      return <CheatsheetThread />

    default:
      return <PostsThread />
  }
}

const CommunityContentContainer = ({ communityContent: store }) => {
  useInit(store)

  const {
    curRoute,
    viewing: { community, activeThread },
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  return (
    <Wrapper testId="community-content">
      <InnerWrapper lessMargin={bannerLayout === C11N.DIGEST_ROW}>
        {bannerLayout === C11N.DIGEST_ROW && (
          <TabBarWrapper>
            <TabBar
              source={community.threads}
              onChange={tabberChange}
              active={activeThread}
              // layout={layout}
              communityRaw={community.raw}
            />
          </TabBarWrapper>
        )}

        <ComunityContent curRoute={curRoute} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CommunityContentContainer)
