/*
 *
 * RepoEditor
 *
 */

import React from 'react'

import { connectStore, buildLog, uid } from '@/utils'

import GithubRepoPage from '@/components/GithubRepoPage'
import SearchMan from './SearchMan'

import { Wrapper } from './styles'
import { useInit, onPublish, changeView } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RepoEditor')

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
          onSearch={changeView('search')}
          onPublish={onPublish}
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
          searching={Boolean(searching)}
          subView={subView}
          tokenValue={tokenValue}
        />
      )
  }
}

const RepoEditorContainer = ({ repoEditor }) => {
  useInit(repoEditor)

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

export default connectStore(RepoEditorContainer)
