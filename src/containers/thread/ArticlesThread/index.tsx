//

/*
 *
 * ArticlesThread
 *
 */

import { FC } from 'react'
import { Waypoint } from 'react-waypoint'

import { C11N } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import ThreadSidebar from '@/containers/thread/ThreadSidebar'
import TabBar from '@/components/TabBar'
import PagedArticles from '@/components/PagedArticles'
import ArticlesFilter from '@/components/ArticlesFilter'

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
  loadArticles,
  onFilterSelect,
  onPreview,
  tabOnChange,
  onContentCreate,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticlesThread')

type TProps = {
  articlesThread?: TStore
}

const ArticlesThreadContainer: FC<TProps> = ({ articlesThread: store }) => {
  useInit(store)

  const {
    pagedPostsData,
    curView,
    filtersData,
    activePost,
    curCommunity,
    curThread,
    showFilters,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  const { totalCount } = pagedPostsData

  // TODO: useMST for communityRaw, accountInfo
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
          {showFilters && (
            <FilterWrapper>
              <ArticlesFilter
                onSelect={onFilterSelect}
                activeFilter={filtersData}
                totalCount={totalCount}
              />
            </FilterWrapper>
          )}
          <PagedArticles
            data={pagedPostsData}
            thread={curThread}
            curView={curView}
            active={activePost}
            onPreview={onPreview}
            onPageChange={loadArticles}
          />
        </ArticlesWrapper>

        {bannerLayout === C11N.CLASSIC && (
          <ThreadSidebar
            onCreate={onContentCreate}
            onTagSelect={loadArticles}
          />
        )}
      </Body>
    </Wrapper>
  )
}

export default pluggedIn(ArticlesThreadContainer) as FC<TProps>
