import { FC, memo } from 'react'

import type { TThread, TArticleFilter } from '@/spec'
import { THREAD } from '@/constant'
import useAccount from '@/hooks/useAccount'

import TimeFilter from './TimeFilter'
import SortFilter from './SortFilter'
import RepoSortFilter from './RepoSortFilter'
import LengthFilter from './LengthFilter'
import ViewedFilter from './ViewedFilter'
import CatFilter from './CatFilter'

import { FilterPanelWrapper, CatPanelWrapper } from '../styles'

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
  thread: TThread | 'ArticleCat'
}

const FilterPanel: FC<TProps> = ({ thread, activeFilter, onSelect }) => {
  const accountInfo = useAccount()

  switch (thread) {
    case THREAD.POST:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
          {accountInfo && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FilterPanelWrapper>
      )

    case THREAD.REPO:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <RepoSortFilter activeFilter={activeFilter} onSelect={onSelect} />
          {accountInfo && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FilterPanelWrapper>
      )

    case THREAD.JOB:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          {accountInfo && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FilterPanelWrapper>
      )

    default:
      return (
        <CatPanelWrapper>
          <CatFilter activeFilter={activeFilter} onSelect={onSelect} />
        </CatPanelWrapper>
      )
  }
}

export default memo(FilterPanel)
