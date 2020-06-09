import React from 'react'

import { THREAD } from '@/constant'

import TimeFilter from './TimeFilter'
import SortFilter from './SortFilter'
import RepoSortFilter from './RepoSortFilter'
import LengthFilter from './LengthFilter'
import ViewedFilter from './ViewedFilter'
// job
import JobSalaryFilter from './JobSalaryFilter'
import JobExpFilter from './JobExpFilter'
import JobEducationFilter from './JobEducationFilter'
import JobFieldFilter from './JobFieldFilter'
import JobFinanceFilter from './JobFinanceFilter'
import JobScaleFilter from './JobScaleFilter'
// video
import VideoSourceFilter from './VideoSourceFilter'

import { FilterPanelWrapper } from './styles'

const FilterPanel = ({ thread, activeFilter, onSelect, isLogin }) => {
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

    case THREAD.VIDEO:
      return (
        <FilterPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <VideoSourceFilter activeFilter={activeFilter} onSelect={onSelect} />
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
          <JobSalaryFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobExpFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobEducationFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobFieldFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobFinanceFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobScaleFilter activeFilter={activeFilter} onSelect={onSelect} />
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

export default React.memo(FilterPanel)
