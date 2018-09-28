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

const View = ({ curView, searching, searchValue, repo }) => {
  switch (curView) {
    case 'show': {
      return (
        <GithubRepoPage
          repo={repo}
          onSearch={logic.changeView.bind(this, 'search')}
          showSearchBtn
        />
      )
    }
    default: {
      return (
        <SearchMan
          value={searchValue}
          onSearch={logic.onGithubSearch}
          onChange={logic.searchOnChange}
          searching={Boolean(searching)}
        />
      )
    }
  }
}

class RepoEditorContainer extends React.Component {
  componentWillMount() {
    const { repoEditor } = this.props
    logic.init(repoEditor)
  }

  render() {
    const { repoEditor } = this.props
    const { curView, searching, searchValue, editRepoData } = repoEditor

    return (
      <Wrapper>
        <View
          curView={curView}
          searching={searching}
          searchValue={searchValue}
          repo={editRepoData}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('repoEditor'))(observer(RepoEditorContainer))
