import React from 'react'
import dynamic from 'next/dynamic'

import {
  PostItemLoading,
  JobItemLoading,
  VideoItemLoading,
  RepoItemLoading,
} from '../LoadingEffects'

/* import PostsList from './PostsList' */
// import JobsList from './JobsList'
// import VideosList from './VideosList'
// import ReposList from './ReposList'

import { THREAD } from '../../utils'

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

const ContentList = ({
  entries,
  active,
  curView,
  community,
  thread,
  emptyPrefix,
  onTitleSelect,
}) => {
  switch (thread) {
    case THREAD.JOB: {
      return (
        <DynamicJobsList
          entries={entries}
          active={active}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
          onTitleSelect={onTitleSelect}
        />
      )
    }
    case THREAD.VIDEO: {
      return (
        <DynamicVideosList
          entries={entries}
          active={active}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
          onTitleSelect={onTitleSelect}
        />
      )
    }
    case THREAD.REPO: {
      return (
        <DynamicReposList
          entries={entries}
          active={active}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
          onTitleSelect={onTitleSelect}
        />
      )
    }
    default: {
      return (
        <DynamicPostsList
          entries={entries}
          active={active}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
          onTitleSelect={onTitleSelect}
        />
      )
    }
  }
}

export default ContentList
