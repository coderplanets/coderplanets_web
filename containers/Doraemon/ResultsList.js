import React from 'react'

import { ICON_CMD } from '../../config'

import {
  InfoBar,
  Wrapper,
  SuggestionWrapper,
  ContentWraper,
  Title,
  Desc,
  Hint,
  HintEnter,
} from './styles/results_list'

import SuggestIcon from './SuggestIcon'

import { navToSuggestion } from './logic'

const HintIcon = ({ index, active, cur, length }) => {
  if (active === cur) {
    return <HintEnter src={`${ICON_CMD}/enter.svg`} />
  }
  if (length <= 9) {
    return <Hint>^ {index}</Hint>
  }
  return null
}

const ResultsList = ({ suggestions, activeRaw }) => (
  <Wrapper>
    <SuggestionWrapper empty={suggestions.length === 0}>
      {suggestions.map((suggestion, i) => (
        <InfoBar
          active={activeRaw === suggestion.raw}
          key={suggestion.raw}
          id={suggestion.raw}
          onMouseEnter={navToSuggestion.bind(this, suggestion)}
        >
          <SuggestIcon raw={suggestion.raw} suggestion={suggestion} />
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
)

export default ResultsList
