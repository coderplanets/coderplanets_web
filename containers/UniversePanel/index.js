/*
*
* UniversePanel
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import InputEditor from './InputEditor'
import * as SuggestionIcons from './styles/suggestionIcons'

import {
  PageOverlay,
  PanelContainer,
  InfoBar,
  Wraper,
  AlertBar,
  // AvatarImg,
  AvatarWrapper,
  ContentWraper,
  Title,
  Desc,
  // RepoLang,
  // RepoStar,
  // SubInfoWraper,
} from './styles'

const debug = makeDebugger('C:UniversePanel')

const NodeIcons = ({ title }) => {
  // const title = 'Javascript'
  const lowerTitle = R.toLower(title)
  // debug('title: ', lowerTitle)
  if (R.contains(lowerTitle, SuggestionIcons.imgIcons)) {
    return (
      <SuggestionIcons.IconImg
        src={`/static/nodeIcons/${lowerTitle}.png`}
        alt={lowerTitle}
      />
    )
  }
  const defaultIcon = SuggestionIcons.javascript
  const allIcons = { ...SuggestionIcons }
  const Icon = allIcons[lowerTitle] ? allIcons[lowerTitle] : defaultIcon

  return <Icon />
}

const selector = ({ store }) => ({
  store: store.universePanel,
})

class UniversePanelContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.store)
  }
  // ref={infobar => (this[`infobar${suggestion.title}`] = infobar)}
  // ref={wraper => (this.wraper = wraper)}

  render() {
    const store = this.props.store
    const { inputValue, suggestions, activeTitle } = store

    return (
      <PageOverlay onClick={logic.hidePanel}>
        <PanelContainer onClick={logic.panelClick}>
          <InputEditor value={inputValue} searching={false} />

          {logic.repoNotFound(store) && <AlertBar>Repo not found</AlertBar>}
          <Wraper>
            {suggestions.map(suggestion => (
              <InfoBar
                active={activeTitle === suggestion.title}
                key={suggestion.title}
                id={suggestion.title}
                onMouseEnter={logic.navToSuggestion.bind(this, suggestion)}
              >
                <AvatarWrapper onClick={logic.watshData}>
                  <NodeIcons title={suggestion.title} />
                </AvatarWrapper>
                <ContentWraper>
                  <Title>{suggestion.title}</Title>
                  <Desc>{suggestion.desc}</Desc>
                </ContentWraper>
              </InfoBar>
            ))}
          </Wraper>
        </PanelContainer>
      </PageOverlay>
    )
  }
}

export default inject(selector)(observer(UniversePanelContainer))
