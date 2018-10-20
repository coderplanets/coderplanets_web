/*
 *
 * RepoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { CommentsWrapper } from './styles'

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

    return (
      <div>
        <GithubRepoPage repo={viewingData} />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </div>
    )
  }
}

export default inject(storePlug('repoViewer'))(observer(RepoViewerContainer))
