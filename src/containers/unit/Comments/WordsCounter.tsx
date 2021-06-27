import { FC, memo } from 'react'

import { WORD_LIMIT } from '@/config'

// import { Wrapper } from './styles'
import {
  Wrapper,
  CounterSplit,
  CounterCur,
  CounterTotal,
} from './styles/words_counter'

type TProps = {
  countCurrent: number
}

const WordsCounter: FC<TProps> = ({ countCurrent }) => (
  <Wrapper>
    <CounterCur num={countCurrent}>{countCurrent}</CounterCur>
    <CounterSplit>/</CounterSplit>
    <CounterTotal>{WORD_LIMIT.COMMENT}</CounterTotal>
  </Wrapper>
)

export default memo(WordsCounter)
