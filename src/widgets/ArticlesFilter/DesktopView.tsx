/*
 *
 * ArticlesFilter
 *
 */

import { FC, Fragment, memo } from 'react'

import type { TArticleFilter, TResState } from '@/spec'

import { TYPE, THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'

import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import { SpaceGrow } from '@/widgets/Common'

import SearchBox from './SearchBox'
import FilterButton from './FilterButton'
import CatFilterButton from './CatFilterButton'
import SelectedFilters from './SelectedFilters'
// import FilterResult from './FilterResult'

import { Wrapper, MainFilterWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ArticlesFilter:index')

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  pageNumber?: number
  totalCount?: number
  resState?: TResState
  mode?: 'default' | 'search'
  onSearch: (v: string) => void
  closeSearch: () => void
}

const ArticlesFilter: FC<TProps> = ({
  activeFilter = {},
  onSelect,
  pageNumber = 1,
  totalCount = 0,
  resState = TYPE.RES_STATE.DONE,
  mode = 'default',
  onSearch,
  closeSearch,
}) => {
  // NOTE: 这里使用 useViewing 会导致 build-size blow
  // const { activeThread } = useViewing()

  const searchMode = mode === 'search'

  return (
    <Wrapper>
      {!searchMode && (
        <Fragment>
          <MainFilterWrapper>
            <FilterButton
              thread={THREAD.POST}
              onSelect={onSelect}
              activeFilter={activeFilter}
            />
            <SelectedFilters onSelect={onSelect} activeFilter={activeFilter} />
          </MainFilterWrapper>
          <CatFilterButton
            thread={THREAD.POST}
            onSelect={onSelect}
            activeFilter={activeFilter}
          />
          <SpaceGrow />
          {resState === TYPE.RES_STATE.LOADING && (
            <LavaLampLoading top={2} right={28} />
          )}
        </Fragment>
      )}

      <SearchBox
        searchMode={searchMode}
        onSearch={onSearch}
        closeSearch={closeSearch}
      />
      {/* <FilterResult pageNumber={pageNumber} totalCount={totalCount} /> */}
    </Wrapper>
  )
}

export default memo(ArticlesFilter)
