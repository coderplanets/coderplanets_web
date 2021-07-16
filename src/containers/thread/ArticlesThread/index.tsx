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
import PagedArticles from '@/components/PagedArticles'
import ArticlesFilter from '@/components/ArticlesFilter'

import type { TStore } from './store'

import { Wrapper, MainWrapper, FilterWrapper } from './styles'
import { useInit, inAnchor, outAnchor, onFilterSelect } from './logic'

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
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store
  const resState = store.resState as TResState
  const { pageNumber, totalCount } = pagedArticlesData

  return (
    <Wrapper>
      <MainWrapper>
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
          viewingArticle={viewingArticle}
          resState={resState}
        />
      </MainWrapper>

      {bannerLayout === C11N.CLASSIC && <ThreadSidebar />}
    </Wrapper>
  )
}

export default pluggedIn(ArticlesThreadContainer) as FC<TProps>
