/*
 *
 * RepoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'
import { GithubRepoPage } from '../../components'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoViewer')
/* eslint-enable no-unused-vars */

class RepoViewerContainer extends React.Component {
  componentWillMount() {
    const { repoViewer, attachment } = this.props
    logic.init(repoViewer, attachment)
  }

  render() {
    const { repoViewer } = this.props
    const { viewingData } = repoViewer

    debug('repoViewer ---------- ', viewingData)

    // debug('viewingData: ', viewingData)

    return (
      <div>
        <GithubRepoPage repo={viewingData} />
      </div>
    )
  }
}

export default inject(storePlug('repoViewer'))(observer(RepoViewerContainer))
