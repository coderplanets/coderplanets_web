/*
 *
 * PostsThread
 *
 */

import { FC } from 'react'
import { Waypoint } from 'react-waypoint'

import { C11N, THREAD } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import ThreadSidebar from '@/containers/thread/ThreadSidebar'
import TabBar from '@/components/TabBar'
import FaqPeekList from '@/components/FaqPeekList'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'

import type { TStore } from './store'

import {
  Wrapper,
  Body,
  ArticlesWrapper,
  TabsWrapper,
  FilterWrapper,
} from './styles'

import {
  useInit,
  inAnchor,
  outAnchor,
  loadPosts,
  onFilterSelect,
  onPreview,
  onFaqChange,
  tabOnChange,
  onContentCreate,
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
    curCommunity,
    curThread,
    showFilterBar,
    accountInfo: {
      customization: { bannerLayout },
    },
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
            onPreview={onPreview}
            onPageChange={loadPosts}
          />
        </ArticlesWrapper>

        {bannerLayout === C11N.CLASSIC && (
          <ThreadSidebar onCreate={onContentCreate} onTagSelect={loadPosts} />
        )}
      </Body>
    </Wrapper>
  )
}

export default pluggedIn(PostsThreadContainer) as FC<TProps>
