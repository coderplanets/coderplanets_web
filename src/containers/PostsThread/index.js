/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'
import R from 'ramda'
import { Affix } from 'antd'

import { THREAD, ROUTE } from '@constant'
import { connectStore, buildLog } from '@utils'

import TagsBar from '@containers/TagsBar'
import Maybe from '@components/Maybe'
import PagedContents from '@components/PagedContents'
import ContentFilter from '@components/ContentFilter'
import PublishLabel from '@components/PublishLabel'
import ConstructingThread from '@components/ConstructingThread'
import StrategicPartners from '@components/StrategicPartners'

import CityList from './CityList'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublishBtn,
} from './styles'

import {
  useInit,
  inAnchor,
  outAnchor,
  onFilterSelect,
  onC11NChange,
  onUserSelect,
  onPreview,
  onPageChange,
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
  if (R.contains(thread, [THREAD.GROUP, THREAD.COMPANY])) {
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

const PostsThreadContainer = ({ postsThread }) => {
  useInit(postsThread)

  const {
    pagedPostsData,
    curView,
    filtersData,
    activePost,
    curRoute,
    accountInfo,
    isLogin,
    activeTagData,
    curCommunity,
    curThread,
    pagedCityCommunitiesData,
    showFilterBar,
  } = postsThread

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
        <React.Fragment>
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
                  onC11NChange={onC11NChange}
                />
              </FilterWrapper>
            </Maybe>

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

          <RightPart>
            <React.Fragment>
              <PublishBtn type="primary" onClick={onContentCreate}>
                <PublishLabel text={LabelText[subPath] || '发布帖子'} />
              </PublishBtn>

              <Affix offsetTop={50}>
                <TagsBar
                  thread={THREAD.POST}
                  topic={topic}
                  onSelect={onTagSelect}
                  active={activeTagData}
                />
                <StrategicPartners onClose={onAdsClose} />
              </Affix>
            </React.Fragment>
          </RightPart>
        </React.Fragment>
      )}
    </Wrapper>
  )
}

export default connectStore(PostsThreadContainer)
