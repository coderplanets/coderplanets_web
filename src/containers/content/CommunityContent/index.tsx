/*
 *
 * CommunityContent
 *
 */

import { FC } from 'react'

import { ROUTE, C11N } from '@/constant'
import { useDevice } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import PostsThread from '@/containers//thread/PostsThread'
import BlogsThread from '@/containers//thread/BlogsThread'
import ReposThread from '@/containers/thread/ReposThread'
import JobsThread from '@/containers/thread/JobsThread'
import UsersThread from '@/containers/thread/UsersThread'

import type { TStore } from './store'
import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

const ComunityContent = ({ curRoute }) => {
  const { subPath } = curRoute
  switch (subPath) {
    case ROUTE.REPOS:
      return <ReposThread />

    case ROUTE.BLOGS:
      return <BlogsThread />

    case ROUTE.USERS:
      return <UsersThread />

    case ROUTE.JOBS:
      return <JobsThread />

    default:
      return <PostsThread />
  }
}

type TProps = {
  communityContent?: TStore
}

const CommunityContentContainer: FC<TProps> = ({ communityContent: store }) => {
  useInit(store)
  const { isMobile } = useDevice()

  const {
    curRoute,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  const isCardView = !isMobile && bannerLayout === C11N.DIGEST_ROW

  return (
    <Wrapper testid="community-content">
      <InnerWrapper cardView={isCardView}>
        <ComunityContent curRoute={curRoute} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CommunityContentContainer) as FC<TProps>
