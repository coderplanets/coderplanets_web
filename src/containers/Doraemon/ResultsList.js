import React from 'react'
import R from 'ramda'
import Highlighter from 'react-highlight-words'

import { ICON_CMD } from '@config'
import { THREAD } from '@constant'

import CustomScroller from '@components/CustomScroller'
import SuggestIcon from './SuggestIcon'
import {
  Wrapper,
  InfoBar,
  ContentWraper,
  Title,
  Desc,
  Hint,
  HintEnter,
} from './styles/results_list'

import { navToSuggestion, suggestionOnSelect } from './logic'

const HintIcon = ({ index, active, cur, length }) => {
  if (active === cur) {
    return <HintEnter src={`${ICON_CMD}/enter.svg`} />
  }
  if (length <= 9) {
    return <Hint>^ {index}</Hint>
  }
  return null
}

const ResultsList = ({ searchValue, searchThread, suggestions, activeRaw }) => {
  return (
    <CustomScroller direction="vertical" height="400px">
      <Wrapper empty={suggestions.length === 0}>
        {suggestions.map((suggestion, i) => (
          <InfoBar
            active={activeRaw === suggestion.raw}
            key={suggestion.raw}
            id={suggestion.raw}
            onMouseEnter={navToSuggestion.bind(this, suggestion)}
            onClick={suggestionOnSelect}
          >
            <SuggestIcon
              raw={suggestion.raw}
              suggestion={suggestion}
              round={R.contains(searchThread, [THREAD.POST, THREAD.USER])}
              searchThread={searchThread}
            />
            <ContentWraper>
              <Title>
                <Highlighter
                  highlightClassName="doramon-search-highlighter"
                  searchWords={[searchValue]}
                  autoEscape
                  textToHighlight={suggestion.title}
                />
              </Title>
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
      </Wrapper>
    </CustomScroller>
  )
}

export default React.memo(ResultsList)
