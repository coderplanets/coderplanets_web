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
import { GithubRepoPage, ArticleActionsPanel } from '../../components'

import { makeDebugger, storePlug, THREAD } from '../../utils'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoViewer')
/* eslint-enable no-unused-vars */

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
    const { viewingData } = repoViewer

    debug('viewingData ', viewingData)
    return (
      <React.Fragment>
        <FavoritesCats />
        <GithubRepoPage
          repo={viewingData}
          onReaction={logic.onReaction}
          onListReactionUsers={logic.onListReactionUsers}
          actionsPanel={
            <ArticleActionsPanel
              thread={THREAD.REPO}
              entry={viewingData}
              onEdit={debug}
              onPin={logic.onPin}
              onUndoPin={logic.onUndoPin}
              onInform={debug}
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
