import React from 'react'

import { THREAD } from '@utils'
import { FiltrPanelWrapper } from './styles'

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
import JobFinaceFilter from './JobFinaceFilter'
import JobScaleFilter from './JobScaleFilter'
// video
import VideoSourceFilter from './VideoSourceFilter'

const FilterPanel = ({ thread, activeFilter, onSelect, isLogin }) => {
  switch (thread) {
    case THREAD.POST:
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FiltrPanelWrapper>
      )

    case THREAD.VIDEO:
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <VideoSourceFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FiltrPanelWrapper>
      )

    case THREAD.REPO:
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <RepoSortFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FiltrPanelWrapper>
      )

    case THREAD.JOB:
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobSalaryFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobExpFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobEducationFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobFieldFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobFinaceFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobScaleFilter activeFilter={activeFilter} onSelect={onSelect} />
          {isLogin && (
            <ViewedFilter activeFilter={activeFilter} onSelect={onSelect} />
          )}
        </FiltrPanelWrapper>
      )

    default:
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
        </FiltrPanelWrapper>
      )
  }
}

export default FilterPanel
