/*
*
* Magic Doraemon
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
// import R from 'ramda'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'

import InputEditor from './InputEditor'
import NodeIcon from './NodeIcon'
import * as logic from './logic'

import * as SuggestionIcons from './styles/suggestionIcons'

import {
  PageOverlay,
  PanelContainer,
  InfoBar,
  Wrapper,
  SuggestionWrapper,
  AlertBar,
  AvatarWrapper,
  ContentWraper,
  Title,
  Desc,
  Hint,
  HintEnter,
} from './styles'

const debug = makeDebugger('C:Doraemon')

const HintIcon = ({ index, active, cur }) => {
  return active === cur ? (
    <HintEnter>
      <SuggestionIcons.enter />
    </HintEnter>
  ) : (
    <Hint>^ {index}</Hint>
  )
}

const selector = ({ store }) => ({
  store: store.doraemon,
})

class DoraemonContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    // TODO? maybe: this.logic = new Logic(this.props.store)
    logic.init(this.props.store)
  }
  // ref={infobar => (this[`infobar${suggestion.title}`] = infobar)}
  // ref={wraper => (this.wraper = wraper)}

  render() {
    const { store } = this.props
    const { inputValue, suggestions, activeRaw, prefix, visible } = store

    // debug('activeRaw: ', activeRaw)
    // debug('suggestion.raw: ', suggestions.toJSON())

    return (
      <div>
        <PageOverlay visible={visible} onClick={logic.hidePanel} />
        <PanelContainer visible={visible}>
          <InputEditor value={inputValue} searching={false} prefix={prefix} />
          {logic.repoNotFound(store) && <AlertBar>Repo not found</AlertBar>}
          <Wrapper>
            <SuggestionWrapper empty={suggestions.length === 0}>
              {suggestions.map((suggestion, i) => (
                <InfoBar
                  active={activeRaw === suggestion.raw}
                  key={suggestion.raw}
                  id={suggestion.raw}
                  onMouseEnter={logic.navToSuggestion.bind(this, suggestion)}
                >
                  <AvatarWrapper>
                    <NodeIcon raw={suggestion.raw} />
                  </AvatarWrapper>
                  <ContentWraper>
                    <Title>{suggestion.title}</Title>
                    <Desc>{suggestion.desc}</Desc>
                  </ContentWraper>
                  <HintIcon index={i} active={activeRaw} cur={suggestion.raw} />
                </InfoBar>
              ))}
            </SuggestionWrapper>
          </Wrapper>
        </PanelContainer>
      </div>
    )
  }
}

export default inject(selector)(observer(DoraemonContainer))
