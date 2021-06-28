/*
 *
 * PostsThread
 *
 */

import { FC } from 'react'
import { Waypoint } from 'react-waypoint'
import { contains } from 'ramda'

import { ICON } from '@/config'
import { C11N, THREAD, ROUTE } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import { DropdownButton } from '@/components/Buttons'
import Maybe from '@/components/Maybe'
import FaqPeekList from '@/components/FaqPeekList'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'
import ConstructingThread from '@/components/ConstructingThread'
import PromotionList from '@/components/PromotionList'

import CityList from './CityList'

import type { TStore } from './store'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  BadgeWrapper,
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

type TProps = {
  postsThread?: TStore
}

const PostsThreadContainer: FC<TProps> = ({ postsThread: store }) => {
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
    isCommunityDigestInViewport,
  } = store

  const { subPath } = curRoute
  const { totalCount } = pagedPostsData

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
              <PublisherWrapper show={isCommunityDigestInViewport}>
                <DropdownButton
                  placement="bottom-end"
                  options={[
                    {
                      key: 'publish',
                      icon: `${ICON}/edit/publish-write.svg`,
                      title: '发布帖子',
                      desc: '发布后会第一次出现在相应版块首页。',
                    },
                    {
                      key: 'link',
                      link: 'https://newpage',
                      icon: `${ICON}/article/report.svg`,
                      title: '发布须知',
                      desc:
                        '请确保你发布的内容符合社区的基本价值观和规范，否则会被限流或直接删除。',
                    },
                  ]}
                  panelMinWidth="210px"
                  onClick={(key) => {
                    if (key === 'publish') onContentCreate()
                  }}
                >
                  {LabelText[subPath] || '发布帖子'}
                </DropdownButton>
              </PublisherWrapper>

              <Sticky offsetTop={55}>
                <BadgeWrapper show={!isCommunityDigestInViewport}>
                  <CommunityJoinBadge />
                </BadgeWrapper>
                <TagsBar
                  thread={THREAD.POST}
                  onSelect={onTagSelect}
                  active={activeTagData}
                />
                <PromotionList onClose={onAdsClose} />
              </Sticky>
            </RightPart>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default pluggedIn(PostsThreadContainer) as FC<TProps>
