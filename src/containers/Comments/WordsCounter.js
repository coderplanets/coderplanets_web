import React from 'react'

import { WORD_LIMIT } from '@/config'

// import { Wrapper } from './styles'
import {
  Wrapper,
  CounterSpliter,
  CounterCur,
  CounterTotal,
} from './styles/words_counter'

const WordsCounter = ({ countCurrent }) => (
  <Wrapper>
    <CounterCur num={countCurrent}>{countCurrent}</CounterCur>
    <CounterSpliter>/</CounterSpliter>
    <CounterTotal>{WORD_LIMIT.COMMENT}</CounterTotal>
  </Wrapper>
)

export default React.memo(WordsCounter)
