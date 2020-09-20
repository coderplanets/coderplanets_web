/*
 *
 * CommunityContent
 *
 */

import React from 'react'

import { ROUTE, C11N } from '@/constant'
import { connectStore, buildLog } from '@/utils'
import { useMedia } from '@/hooks'

import PostsThread from '@/containers//thread/PostsThread'
import VideosThread from '@/containers/thread/VideosThread'
import ReposThread from '@/containers/thread/ReposThread'
import WikiThread from '@/containers/thread/WikiThread'
import JobsThread from '@/containers/thread/JobsThread'
import UsersThread from '@/containers/thread/UsersThread'
import CheatsheetThread from '@/containers/thread/CheatsheetThread'

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

const CommunityContentContainer = ({ communityContent: store }) => {
  useInit(store)
  const { mobile } = useMedia()

  const {
    curRoute,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  const isCardView = !mobile && bannerLayout === C11N.DIGEST_ROW

  return (
    <Wrapper testId="community-content">
      <InnerWrapper cardView={isCardView}>
        <ComunityContent curRoute={curRoute} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CommunityContentContainer)
