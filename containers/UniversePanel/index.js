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

function inputChange(e) {
  logic.search(e.target.value)
}

const SearchEditor = () => (
  <EditorBar>
    <AddOn>&#9906;</AddOn>
    <InputBar
      spellCheck={false}
      autoCapitalize={false}
      autoCorrect="off"
      autoComplete="off"
      onChange={inputChange}
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
    const repos = this.props.store.githubRepos
    debug('repos: ', repos.toJSON())

    return (
      <PanelContainer>
        <SearchEditor />
        <Wraper>
          {repos.map(repo => (
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
