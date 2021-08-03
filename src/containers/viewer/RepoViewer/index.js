/*
 *
 * RepoViewer
 *
 */

import React from 'react'

// import { THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Comments from '@/containers/unit/Comments'
import GithubRepoPage from '@/components/GithubRepoPage'

import { CommentsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RepoViewer')

const RepoViewerContainer = ({ repoViewer: store, attachment }) => {
  useInit(store, attachment)

  const { curCommunity, viewingData, loading } = store

  return (
    <React.Fragment>
      <GithubRepoPage
        repo={viewingData}
        viewerHeader={<div>ii</div>}
        bodyHeader={<div>ii</div>}
        updating={loading}
      />
      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </React.Fragment>
  )
}

export default pluggedIn(RepoViewerContainer)
