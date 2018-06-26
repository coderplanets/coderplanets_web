/*
 *
 * Magic Doraemon
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

import { ICON_ASSETS } from '../../config'
import { makeDebugger, storePlug } from '../../utils'

import InputEditor from './InputEditor'
import NodeIcon from './NodeIcon'
import * as logic from './logic'

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

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Doraemon')
/* eslint-enable no-unused-vars */

const HintIcon = ({ index, active, cur, length }) => {
  if (active === cur) {
    return <HintEnter src={`${ICON_ASSETS}/cmd/enter.svg`} />
  }
  if (length <= 9) {
    return <Hint>^ {index}</Hint>
  }
  return <span />
}

class DoraemonContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.doraemon)
  }
  // ref={infobar => (this[`infobar${suggestion.title}`] = infobar)}
  // ref={wraper => (this.wraper = wraper)}

  render() {
    const { doraemon } = this.props
    const {
      inputValue,
      suggestions,
      activeRaw,
      prefix,
      visible,
      subscribedCommunities,
    } = doraemon

    // debug('activeRaw: ', activeRaw)
    // debug('suggestion.raw: ', suggestions.toJSON())

    return (
      <div>
        <PageOverlay visible={visible} onClick={logic.hidePanel} />
        <PanelContainer visible={visible}>
          <InputEditor
            value={inputValue}
            searching={false}
            prefix={prefix}
            subscribedCommunities={subscribedCommunities}
          />
          {logic.repoNotFound(doraemon) && <AlertBar>Repo not found</AlertBar>}
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
                    <NodeIcon raw={suggestion.raw} suggestion={suggestion} />
                  </AvatarWrapper>
                  <ContentWraper>
                    <Title>{suggestion.title}</Title>
                    <Desc>{suggestion.desc}</Desc>
                  </ContentWraper>
                  <HintIcon
                    index={i}
                    active={activeRaw}
                    cur={suggestion.raw}
                    length={suggestions.length}
                  />
                </InfoBar>
              ))}
            </SuggestionWrapper>
          </Wrapper>
        </PanelContainer>
      </div>
    )
  }
}

export default inject(storePlug('doraemon'))(observer(DoraemonContainer))
