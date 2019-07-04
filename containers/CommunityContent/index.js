/*
 *
 * CommunityContent
 *
 */

import React from 'react'

import { ROUTE } from '@constant'
import { connectStore, buildLog } from '@utils'

import PostsThread from '@containers//PostsThread'
import VideosThread from '@containers/VideosThread'
import ReposThread from '@containers/ReposThread'
import WikiThread from '@containers/WikiThread'
import JobsThread from '@containers/JobsThread'
import UsersThread from '@containers/UsersThread'
import CheatsheetThread from '@containers/CheatsheetThread'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

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

const CommunityContentContainer = ({ communityContent }) => {
  useInit(communityContent)

  const { curRoute } = communityContent

  return (
    <Wrapper testid="community-content">
      <InnerWrapper>
        <ComunityContent curRoute={curRoute} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CommunityContentContainer)
