/* eslint-disable react/display-name */

import React from 'react'
import dynamic from 'next/dynamic'

import { THREAD } from '@/constant'

import {
  PostItemLoading,
  JobItemLoading,
  VideoItemLoading,
  RepoItemLoading,
} from '@/components/LoadingEffects'

export const DynamicPostsList = dynamic(() => import('./PostsList'), {
  loading: () => <PostItemLoading num={4} />,
})
const DynamicJobsList = dynamic(() => import('./JobsList'), {
  loading: () => <JobItemLoading num={4} />,
})
const DynamicVideosList = dynamic(() => import('./VideosList'), {
  loading: () => <VideoItemLoading num={4} />,
})
const DynamicReposList = dynamic(() => import('./ReposList'), {
  loading: () => <RepoItemLoading num={4} />,
})

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
