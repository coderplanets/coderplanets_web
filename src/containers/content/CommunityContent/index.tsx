/*
 *
 * CommunityContent
 *
 */

import { FC } from 'react'

import { ROUTE, C11N } from '@/constant'
import { useDevice } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import CommunityDigest from '@/containers/digest/CommunityDigest'
import ThreadSidebar from '@/containers/thread/ThreadSidebar'
import PostsThread from '@/containers//thread/PostsThread'
import BlogsThread from '@/containers//thread/BlogsThread'
import ReposThread from '@/containers/thread/ReposThread'
import JobsThread from '@/containers/thread/JobsThread'
import UsersThread from '@/containers/thread/UsersThread'

import SubscribedList from './SubscribedList'
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
    subscribedCommunitiesData,
  } = store

  const isClassicLayout = !isMobile && bannerLayout === C11N.CLASSIC
  const isHolyGrailLayout = !isMobile && bannerLayout === C11N.HOLY_GRAIL

  // console.log('subscribedCommunitiesData ->> ', subscribedCommunitiesData)

  return (
    <Wrapper testid="community-content" layout={bannerLayout}>
      {isClassicLayout && <CommunityDigest />}
      <InnerWrapper isClassicLayout={isClassicLayout}>
        {isHolyGrailLayout && (
          <SubscribedList communities={subscribedCommunitiesData} />
        )}
        <ComunityContent curRoute={curRoute} />
        {isHolyGrailLayout && <ThreadSidebar activeTag={{}} />}
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CommunityContentContainer) as FC<TProps>
