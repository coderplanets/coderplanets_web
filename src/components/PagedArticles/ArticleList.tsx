/* eslint-disable react/display-name */

import { memo } from 'react'
import dynamic from 'next/dynamic'

import { THREAD } from '@/constant'

import {
  PostItemLoading,
  JobItemLoading,
  RepoItemLoading,
} from '@/components/Loading'

export const PostsList = dynamic(() => import('./PostsList'), {
  loading: () => <PostItemLoading num={4} />,
})
const JobsList = dynamic(() => import('./JobsList'), {
  loading: () => <JobItemLoading num={4} />,
})
const ReposList = dynamic(() => import('./ReposList'), {
  loading: () => <RepoItemLoading num={4} />,
})

const ArticleList = (props) => {
  const { thread } = props

  switch (thread) {
    case THREAD.JOB:
      return <JobsList props={props} />

    case THREAD.REPO:
      return <ReposList props={props} />

    default:
      return <PostsList props={props} />
  }
}

export default memo(ArticleList)
