/*
 *
 * RepoEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { GithubRepoPage } from '../../components'
import SearchMan from './SearchMan'

import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoEditor')
/* eslint-enable no-unused-vars */

const View = ({ cur }) => {
  switch (cur) {
    case 'preview': {
      return <GithubRepoPage />
    }
    default: {
      return <SearchMan />
    }
  }
}

class RepoEditorContainer extends React.Component {
  componentWillMount() {
    const { repoEditor } = this.props
    logic.init(repoEditor)
  }

  render() {
    const curView = 'preview' //

    return (
      <Wrapper>
        <View cur={curView} />
      </Wrapper>
    )
  }
}

export default inject(storePlug('repoEditor'))(observer(RepoEditorContainer))
