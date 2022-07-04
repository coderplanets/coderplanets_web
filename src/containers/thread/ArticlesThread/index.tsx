/*
 *
 * ArticlesThread
 *
 */

import { FC } from 'react'
import { includes } from 'ramda'
import { isMobile } from 'react-device-detect'

import type { TResState } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import PagedArticles from '@/widgets/PagedArticles'
import FaqList from '@/widgets/FaqList'
import ViewportTracker from '@/widgets/ViewportTracker'
import ThreadSidebar from '@/containers/thread/ThreadSidebar'
import ArticlesFilter from '@/widgets/ArticlesFilter'

import type { TStore } from './store'

import {
  Wrapper,
  MainWrapper,
  MobileCardsMainWrapper,
  FilterWrapper,
} from './styles'
import {
  useInit,
  inAnchor,
  outAnchor,
  onFilterSelect,
  onSearch,
  closeSearch,
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
    c11n,
    resState,
    mode,
    globalLayout,
  } = store
  const { pageNumber, totalCount } = pagedArticlesData

  const isMobileCardsView =
    isMobile && includes(curThread, [ARTICLE_THREAD.JOB, ARTICLE_THREAD.RADAR])

  const TheMainWrapper = isMobileCardsView
    ? MobileCardsMainWrapper
    : MainWrapper

  log('# got pagedArticlesData: ', pagedArticlesData)

  return (
    <Wrapper>
      <TheMainWrapper thread={curThread}>
        <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
        {showFilters && (
          <FilterWrapper thread={curThread}>
            <ArticlesFilter
              resState={resState as TResState}
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              pageNumber={pageNumber}
              totalCount={totalCount}
              mode={mode}
              onSearch={onSearch}
              closeSearch={closeSearch}
            />
          </FilterWrapper>
        )}
        {mode === 'default' && (
          <PagedArticles
            data={pagedArticlesData}
            curCommunity={curCommunity}
            thread={curThread}
            resState={resState as TResState}
            c11n={c11n}
            globalLayout={globalLayout}
          />
        )}
        {mode === 'search' && <FaqList mode="search-hint" />}
      </TheMainWrapper>

      {!isMobile && <ThreadSidebar />}
    </Wrapper>
  )
}

export default bond(ArticlesThreadContainer, 'articlesThread') as FC<TProps>
