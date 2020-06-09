import React from 'react'
import dynamic from 'next/dynamic'

import { THREAD } from '@/constant'

import {
  PostItemLoading,
  JobItemLoading,
  VideoItemLoading,
  RepoItemLoading,
} from '@/components/LoadingEffects'

/* eslint-disable */
const DynamicPostsList = dynamic({
  loader: () => import('./PostsList'),
  loading: () => <PostItemLoading num={4} />,
})
const DynamicJobsList = dynamic({
  loader: () => import('./JobsList'),
  loading: () => <JobItemLoading num={4} />,
})
const DynamicVideosList = dynamic({
  loader: () => import('./VideosList'),
  loading: () => <VideoItemLoading num={4} />,
})
const DynamicReposList = dynamic({
  loader: () => import('./ReposList'),
  loading: () => <RepoItemLoading num={4} />,
})
/* eslint-enable */

const ContentList = (props) => {
  const { thread } = props

  switch (thread) {
    case THREAD.JOB:
      return <DynamicJobsList props={props} />

    case THREAD.VIDEO:
      return <DynamicVideosList props={props} />

    case THREAD.REPO:
      return <DynamicReposList props={props} />

    default:
      return <DynamicPostsList props={props} />
  }
}

export default React.memo(ContentList)
