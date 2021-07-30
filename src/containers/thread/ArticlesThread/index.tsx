//

/*
 *
 * ArticlesThread
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import type { TResState } from '@/spec'
import { C11N } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import PagedArticles from '@/components/PagedArticles'
import ViewportTracker from '@/components/ViewportTracker'
// import ArticlesFilter from '@/components/ArticlesFilter'
import ThreadSidebar from '@/containers/thread/ThreadSidebar'

import type { TStore } from './store'

import { Wrapper, MainWrapper, FilterWrapper } from './styles'
import { useInit, inAnchor, outAnchor, onFilterSelect } from './logic'

const ArticlesFilter = dynamic(() => import('@/components/ArticlesFilter'), {
  ssr: false,
})

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
    curThread,
    showFilters,
    viewingArticle,
    c11n,
  } = store

  const { bannerLayout } = c11n

  const resState = store.resState as TResState
  const { pageNumber, totalCount } = pagedArticlesData

  return (
    <Wrapper>
      <MainWrapper>
        <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
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
          viewingArticle={viewingArticle}
          resState={resState}
          c11n={c11n}
        />
      </MainWrapper>

      {bannerLayout === C11N.CLASSIC && <ThreadSidebar />}
    </Wrapper>
  )
}

export default pluggedIn(ArticlesThreadContainer) as FC<TProps>
