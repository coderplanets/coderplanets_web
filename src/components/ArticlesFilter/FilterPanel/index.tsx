import { FC, memo } from 'react'

import type { TThread, TArticleFilter } from '@/spec'
import { THREAD } from '@/constant'

import TimeFilter from './TimeFilter'
import SortFilter from './SortFilter'
import RepoSortFilter from './RepoSortFilter'
import LengthFilter from './LengthFilter'
import ViewedFilter from './ViewedFilter'

import { FilterPanelWrapper } from '../styles'

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  thread: TThread
  isLogin?: boolean
}

const FilterPanel: FC<TProps> = ({
  thread,
  activeFilter,
  onSelect,
  isLogin,
}) => {
  switch (thread) {
    case THREAD.POST:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FilterPanelWrapper>
      )

    case THREAD.REPO:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <RepoSortFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FilterPanelWrapper>
      )

    case THREAD.JOB:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FilterPanelWrapper>
      )

    default:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
        </FilterPanelWrapper>
      )
  }
}

export default memo(FilterPanel)
