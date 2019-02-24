/*
 *
 * RepoEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import GithubRepoPage from 'components/GithubRepoPage'
import { makeDebugger, storePlug, uid } from 'utils'
import SearchMan from './SearchMan'

import { Wrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:RepoEditor')

const View = ({
  curView,
  searching,
  searchValue,
  publishing,
  repo,
  subView,
  tokenValue,
}) => {
  switch (curView) {
    case 'show':
      return (
        <GithubRepoPage
          repo={repo}
          onSearch={logic.changeView.bind(this, 'search')}
          onPublish={logic.onPublish}
          publishing={publishing}
          showSearchBtn
          showPublishBtn
          readOnly
        />
      )

    default:
      return (
        <SearchMan
          value={searchValue}
          onSearch={logic.onGithubSearch}
          onChange={logic.searchOnChange}
          searching={Boolean(searching)}
          subView={subView}
          tokenValue={tokenValue}
        />
      )
  }
}

class RepoEditorContainer extends React.Component {
  componentDidMount() {
    const { repoEditor } = this.props
    logic.init(repoEditor)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { repoEditor } = this.props
    const {
      curView,
      searching,
      searchValue,
      publishing,
      editRepoData,
      subView,
      tokenValue,
    } = repoEditor

    return (
      <Wrapper>
        <View
          key={uid.gen()}
          curView={curView}
          searching={searching}
          searchValue={searchValue}
          publishing={publishing}
          repo={editRepoData}
          subView={subView}
          tokenValue={tokenValue}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('repoEditor'))(observer(RepoEditorContainer))
