/*
 *
 * RepoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, THREAD } from 'utils'

import ArticleViewerHeader from 'containers/ArticleViewerHeader'
import ArticleBodyHeader from 'containers/ArticleBodyHeader'
import FavoritesCats from 'containers/FavoritesCats'
import Comments from 'containers/Comments'
import GithubRepoPage from 'components/GithubRepoPage'

import { CommentsWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:RepoViewer')

class RepoViewerContainer extends React.Component {
  componentDidMount() {
    const { repoViewer, attachment } = this.props
    logic.init(repoViewer, attachment)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { repoViewer } = this.props
    const { curCommunity, viewingData } = repoViewer

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
        />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('repoViewer'))(observer(RepoViewerContainer))
