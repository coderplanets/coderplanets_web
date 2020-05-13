import styled from 'styled-components'

import { WORD_LIMIT } from '@/config'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  color: #c2d9da;
`
export const CounterSpliter = styled.div`
  font-size: 1.5em;
  font-weight: lighter;
  color: ${theme('comment.placeholder')};
`

const getColor = num => {
  if (num > WORD_LIMIT.COMMENT) {
    return 'tomato'
  }
  if (num >= WORD_LIMIT.COMMENT - 50 && num <= WORD_LIMIT.COMMENT) {
    return 'orange'
  }
  return 'yellowgreen'
}

export const CounterCur = styled.div`
  margin-right: 5px;
  font-size: 1em;
  color: ${({ num }) => getColor(num)};
`

export const CounterTotal = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 1em;
  color: ${theme('comment.placeholder')};
`
