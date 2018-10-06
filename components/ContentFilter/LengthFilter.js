import React from 'react'

import { ICON_CMD } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

import { FILTER } from '../../utils'

const LengthFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/ruler.svg`} reverse />
      <SelectTitle>长度</SelectTitle>
    </SelectLable>
    <SelectItem
      item="MOST_WORDS"
      active={activeFilter.wordLength}
      onClick={onSelect.bind(this, { wordLength: FILTER.MOST_WORDS })}
    >
      字数最多
    </SelectItem>
    <SelectItem
      item="LEAST_WORDS"
      active={activeFilter.wordLength}
      onClick={onSelect.bind(this, { wordLength: FILTER.LEAST_WORDS })}
    >
      字数最少
    </SelectItem>
  </ColumnWrapper>
)

export default LengthFilter
