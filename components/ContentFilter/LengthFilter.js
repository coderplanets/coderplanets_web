import React from 'react'

import { ICON_CMD } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
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
    <LabelDivider />
    <SelectItem
      active={activeFilter.wordLength === FILTER.MOST_WORDS}
      onClick={onSelect.bind(this, { wordLength: FILTER.MOST_WORDS })}
    >
      字数最多
    </SelectItem>
    <SelectItem
      active={activeFilter.wordLength === FILTER.LEAST_WORDS}
      onClick={onSelect.bind(this, { wordLength: FILTER.LEAST_WORDS })}
    >
      字数最少
    </SelectItem>
  </ColumnWrapper>
)

export default LengthFilter
