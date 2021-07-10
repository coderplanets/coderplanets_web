/*
 *
 * CommunityContent
 *
 */

import { FC } from 'react'

import { C11N, THREAD } from '@/constant'
import { useDevice } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import CommunityDigest from '@/containers/digest/CommunityDigest'
import ThreadSidebar from '@/containers/thread/ThreadSidebar'
import ArticlesThread from '@/containers//thread/ArticlesThread'
import ReposThread from '@/containers/thread/ReposThread'
import UsersThread from '@/containers/thread/UsersThread'

import TabBar from '@/components/TabBar'

import SubscribedList from './SubscribedList'
import type { TStore } from './store'

import { Wrapper, InnerWrapper, ContentWrapper, TabsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

const ComunityContent = ({ thread }) => {
  switch (thread) {
    case THREAD.REPO:
      return <ReposThread />

    case THREAD.USER:
      return <UsersThread />

    default:
      return <ArticlesThread />
  }
}

type TProps = {
  communityContent?: TStore
}

const CommunityContentContainer: FC<TProps> = ({ communityContent: store }) => {
  useInit(store)
  const { isMobile } = useDevice()

  const {
    curThread,
    curCommunity,
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
        <ContentWrapper>
          {isHolyGrailLayout && (
            <TabsWrapper>
              <TabBar
                source={curCommunity.threads}
                onChange={console.log}
                active={curThread}
                layout={C11N.HOLY_GRAIL}
                communityRaw={curCommunity.raw}
              />
            </TabsWrapper>
          )}
          <ComunityContent thread={curThread} />
        </ContentWrapper>
        {isHolyGrailLayout && <ThreadSidebar />}
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CommunityContentContainer) as FC<TProps>
