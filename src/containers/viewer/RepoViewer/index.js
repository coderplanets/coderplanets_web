/*
 *
 * RepoViewer
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import ArticleViewerHeader from '@/containers/ArticleViewerHeader'
import ArticleBodyHeader from '@/containers/ArticleBodyHeader'
import FavoritesCats from '@/containers/FavoritesCats'
import Comments from '@/containers/Comments'
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
      <FavoritesCats />
      <GithubRepoPage
        repo={viewingData}
        viewerHeader={
          <ArticleViewerHeader
            data={viewingData}
            author={viewingData.author}
            thread={THREAD.REPO}
            showStar={false}
            showLastSync
          />
        }
        bodyHeader={
          <ArticleBodyHeader
            communityRaw={curCommunity.raw}
            thread={THREAD.REPO}
            data={viewingData}
            middle="labeler"
          />
        }
        updating={loading}
      />
      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </React.Fragment>
  )
}

export default connectStore(RepoViewerContainer)
