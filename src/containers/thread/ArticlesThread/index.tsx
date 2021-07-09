//

/*
 *
 * ArticlesThread
 *
 */

import { FC } from 'react'
import { Waypoint } from 'react-waypoint'

import type { TResState } from '@/spec'
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
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticlesThread')

type TProps = {
  articlesThread?: TStore
}

const ArticlesThreadContainer: FC<TProps> = ({ articlesThread: store }) => {
  useInit(store)

  const {
    pagedArticlesData,
    filtersData,
    curCommunity,
    curThread,
    showFilters,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store
  const resState = store.resState as TResState
  const { pageNumber, totalCount } = pagedArticlesData

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
                resState={resState}
                onSelect={onFilterSelect}
                activeFilter={filtersData}
                pageNumber={pageNumber}
                totalCount={totalCount}
              />
            </FilterWrapper>
          )}
          <PagedArticles
            data={pagedArticlesData}
            thread={curThread}
            resState={resState}
            onPreview={onPreview}
          />
        </ArticlesWrapper>

        {bannerLayout === C11N.CLASSIC && <ThreadSidebar />}
      </Body>
    </Wrapper>
  )
}

export default pluggedIn(ArticlesThreadContainer) as FC<TProps>
