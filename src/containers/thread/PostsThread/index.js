/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'
import { contains } from 'ramda'

import { C11N, THREAD, ROUTE } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import TagsBar from '@/containers/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
import Maybe from '@/components/Maybe'
import FaqPeekList from '@/components/FaqPeekList'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'
import ConstructingThread from '@/components/ConstructingThread'
import StrategicPartners from '@/components/StrategicPartners'

import CityList from './CityList'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublisherWrapper,
} from './styles'

import {
  useInit,
  inAnchor,
  outAnchor,
  onFilterSelect,
  onUserSelect,
  onPreview,
  onPageChange,
  onFaqChange,
  onContentCreate,
  onTagSelect,
  onAdsClose,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostsThread')

const LabelText = {
  radar: '采集信息',
  share: '我要分享',
  city: '发布同城帖',
}

const isSpecThread = (community, thread) => {
  if (contains(thread, [THREAD.GROUP, THREAD.COMPANY])) {
    return true
  }

  if (community === ROUTE.HOME && thread === THREAD.CITY) {
    return true
  }

  return false
}

const SpecThread = ({ community, thread, cityCommunities }) => {
  if (community === ROUTE.HOME && thread === THREAD.CITY) {
    return <CityList items={cityCommunities.entries} />
  }

  return <ConstructingThread thread={thread} />
}

const PostsThreadContainer = ({ postsThread: store }) => {
  useInit(store)

  const {
    pagedPostsData,
    curView,
    filtersData,
    activePost,
    faqActive,
    curRoute,
    accountInfo,
    isLogin,
    activeTagData,
    curCommunity,
    curThread,
    pagedCityCommunitiesData,
    showFilterBar,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  const { subPath } = curRoute
  const { totalCount } = pagedPostsData
  const topic = subPath

  return (
    <Wrapper>
      {isSpecThread(curCommunity.raw, curThread) ? (
        <SpecThread
          community={curCommunity.raw}
          thread={curThread}
          cityCommunities={pagedCityCommunitiesData}
        />
      ) : (
        <>
          <LeftPart>
            <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
            <Maybe test={showFilterBar}>
              <FilterWrapper>
                <ContentFilter
                  thread={THREAD.POST}
                  onSelect={onFilterSelect}
                  activeFilter={filtersData}
                  isLogin={isLogin}
                  accountInfo={accountInfo}
                  totalCount={totalCount}
                  faqActive={faqActive}
                  onFaqChange={onFaqChange}
                />
              </FilterWrapper>
            </Maybe>
            <FaqPeekList active={faqActive} />
            <PagedContents
              data={pagedPostsData}
              cover={curThread === THREAD.RADAR ? 'source' : 'avatar'}
              community={curCommunity.raw}
              thread={THREAD.POST}
              curView={curView}
              active={activePost}
              accountInfo={accountInfo}
              onUserSelect={onUserSelect}
              onAuthorSelect={onUserSelect}
              onPreview={onPreview}
              onPageChange={onPageChange}
            />
          </LeftPart>

          {bannerLayout === C11N.DIGEST && (
            <RightPart>
              <>
                <PublisherWrapper>
                  <PublishButton
                    label={LabelText[subPath] || '发布帖子'}
                    onPublish={onContentCreate}
                  />
                </PublisherWrapper>

                <Sticky offsetTop={120}>
                  <TagsBar
                    thread={THREAD.POST}
                    topic={topic}
                    onSelect={onTagSelect}
                    active={activeTagData}
                  />
                  <StrategicPartners onClose={onAdsClose} />
                </Sticky>
              </>
            </RightPart>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default connectStore(PostsThreadContainer)
