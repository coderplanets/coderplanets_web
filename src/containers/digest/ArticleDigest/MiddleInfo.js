import React from 'react'

import { THREAD } from '@/constant'

import JobMiddleInfo from './JobMiddleInfo'
import RepoMiddleInfo from './RepoMiddleInfo'

const MiddleInfo = ({ thread, data }) => {
  switch (thread) {
    case THREAD.REPO:
      return <RepoMiddleInfo data={data} />

    case THREAD.JOB:
      return <JobMiddleInfo data={data} />

    default:
      return null
  }
}

export default React.memo(MiddleInfo)
