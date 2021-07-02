/*
 *
 * PostsThread
 *
 */

import { FC } from 'react'
import { Waypoint } from 'react-waypoint'

import { C11N, THREAD } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import TabBar from '@/components/TabBar'
import { PublishButton } from '@/components/Buttons'
import FaqPeekList from '@/components/FaqPeekList'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'
import PromotionList from '@/components/PromotionList'

import type { TStore } from './store'

import {
  Wrapper,
  Body,
  ArticlesWrapper,
  SidebarWrapper,
  TabsWrapper,
  FilterWrapper,
  BadgeWrapper,
  TagsBarWrapper,
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
  tabOnChange,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostsThread')

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
    accountInfo,
    isLogin,
    activeTagData,
    curCommunity,
    curThread,
    showFilterBar,
    accountInfo: {
      customization: { bannerLayout },
    },
    isCommunityDigestInViewport,
  } = store

  const { totalCount } = pagedPostsData

  return (
    <Wrapper>
      {bannerLayout === C11N.HOLY_GRAIL && (
        <TabsWrapper>
          <TabBar
            source={curCommunity.threads}
            onChange={tabOnChange}
            active={curThread}
            layout={C11N.HOLY_GRAIL}
            communityRaw={curCommunity.raw}
          />
        </TabsWrapper>
      )}

      <Body>
        <ArticlesWrapper>
          <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
          {showFilterBar && (
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
          )}
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
        </ArticlesWrapper>

        {bannerLayout === C11N.CLASSIC && (
          <SidebarWrapper>
            <PublisherWrapper show={isCommunityDigestInViewport}>
              <PublishButton onCreate={() => onContentCreate()} />
            </PublisherWrapper>

            <Sticky offsetTop={55}>
              <BadgeWrapper show={!isCommunityDigestInViewport}>
                <CommunityJoinBadge />
              </BadgeWrapper>
              <TagsBarWrapper>
                <TagsBar
                  thread={THREAD.POST}
                  onSelect={onTagSelect}
                  active={activeTagData}
                />
              </TagsBarWrapper>
              <PromotionList onClose={onAdsClose} />
            </Sticky>
          </SidebarWrapper>
        )}
      </Body>
    </Wrapper>
  )
}

export default pluggedIn(PostsThreadContainer) as FC<TProps>
