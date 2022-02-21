/*
 *
 * RepoViewer
 *
 */

import React from 'react'

// import { THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Comments from '@/containers/unit/Comments'
import GithubRepoPage from '@/widgets/GithubRepoPage'

import { CommentsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RepoViewer')

const RepoViewerContainer = ({ repoViewer: store, attachment }) => {
  useInit(store, attachment)

  const { viewingArticle, loading } = store

  return (
    <React.Fragment>
      <GithubRepoPage
        repo={viewingArticle}
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

export default bond(RepoViewerContainer, 'repoViewer')
