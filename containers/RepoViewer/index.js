/*
 *
 * RepoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { CommentsWrapper } from './styles'

import FavoritesCats from '../FavoritesCats'
import Comments from '../Comments'
import { GithubRepoPage } from '../../components'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoViewer')
/* eslint-enable no-unused-vars */

class RepoViewerContainer extends React.Component {
  componentDidMount() {
    const { repoViewer, attachment } = this.props
    logic.init(repoViewer, attachment)
  }

  render() {
    const { repoViewer } = this.props
    const { viewingData } = repoViewer

    debug('viewingData ', viewingData)
    return (
      <div>
        <FavoritesCats />
        <GithubRepoPage
          repo={viewingData}
          onReaction={logic.onReaction}
          onListReactionUsers={logic.onListReactionUsers}
        />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </div>
    )
  }
}

export default inject(storePlug('repoViewer'))(observer(RepoViewerContainer))
