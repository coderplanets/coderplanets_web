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

export const PostsList = dynamic(() => import('./PostsList'), {
  loading: () => <PostItemLoading num={4} />,
})
const JobsList = dynamic(() => import('./JobsList'), {
  loading: () => <JobItemLoading num={4} />,
})
const VideosList = dynamic(() => import('./VideosList'), {
  loading: () => <VideoItemLoading num={4} />,
})
const ReposList = dynamic(() => import('./ReposList'), {
  loading: () => <RepoItemLoading num={4} />,
})

const ContentList = (props) => {
  const { thread } = props

  switch (thread) {
    case THREAD.JOB:
      return <JobsList props={props} />

    case THREAD.VIDEO:
      return <VideosList props={props} />

    case THREAD.REPO:
      return <ReposList props={props} />

    default:
      return <PostsList props={props} />
  }
}

export default React.memo(ContentList)
