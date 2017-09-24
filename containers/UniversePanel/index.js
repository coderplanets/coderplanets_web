/*
*
* UniversePanel
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

import A from '../../components/A'
import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import {
  PanelContainer,
  InfoBar,
  EditorBar,
  Wraper,
  InputBar,
  AlertBar,
  AddOn,
  AvatarImg,
  AvatarWrapper,
  ContentWraper,
  Title,
  Desc,
  RepoLang,
  RepoStar,
  SubInfoWraper,
} from './Modal'

const debug = makeDebugger('C:UniversePanel')

// R.isEmpty(repos.toJSON()) && !isSearching && !R.isEmpty(inputValue)

// const repoNotFound = R.and()

const SearchEditor = ({ value }) => (
  <EditorBar>
    <AddOn>&#9906;</AddOn>
    <InputBar
      spellCheck={false}
      autoCapitalize={false}
      autoCorrect="off"
      autoComplete="off"
      value={value}
      onChange={logic.search}
    />
  </EditorBar>
)

const selector = ({ store }) => ({
  store: store.github,
})

class UniversePanelContainer extends React.Component {
  // TODO use componentWillMount?
  componentWillMount() {
    debug('mount')
    logic.init(this.props.store)
  }

  render() {
    const store = this.props.store
    const { reposData, inputValue } = store

    // debug('repos: ', repos)
    // debug('searching: ', searching)
    // debug('logic.repoNotFound2(store): ', logic.repoNotFound2(store))

    return (
      <PanelContainer>
        <SearchEditor value={inputValue} />

        {logic.repoNotFound(store) && <AlertBar>Repo not found</AlertBar>}

        <Wraper>
          {reposData.map(repo => (
            <InfoBar key={repo.id}>
              <AvatarWrapper onClick={logic.watshData}>
                <AvatarImg src={repo.owner.avatar_url} alt="repo avatar" />
              </AvatarWrapper>
              <ContentWraper>
                <Title>
                  <A href={repo.owner.html_url}>
                    {repo.owner.login} / {repo.name}
                  </A>
                </Title>
                <Desc>{repo.description}</Desc>
                <SubInfoWraper>
                  <RepoLang>{repo.language}</RepoLang>
                  <RepoStar>★&nbsp;{repo.stargazers_count}</RepoStar>
                </SubInfoWraper>
              </ContentWraper>
            </InfoBar>
          ))}
        </Wraper>
      </PanelContainer>
    )
  }
}

export default inject(selector)(observer(UniversePanelContainer))
