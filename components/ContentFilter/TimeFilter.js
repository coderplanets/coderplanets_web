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

const TimeFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/duration.svg`} />
      <SelectTitle>时间</SelectTitle>
    </SelectLable>
    <SelectItem
      item="TODAY"
      active={activeFilter.when}
      onClick={onSelect.bind(this, { when: FILTER.TODAY })}
    >
      今天
    </SelectItem>
    <SelectItem
      item="THIS_WEEK"
      active={activeFilter.when}
      onClick={onSelect.bind(this, { when: FILTER.THIS_WEEK })}
    >
      本周
    </SelectItem>
    <SelectItem
      item="THIS_MONTH"
      active={activeFilter.when}
      onClick={onSelect.bind(this, { when: FILTER.THIS_MONTH })}
    >
      本月
    </SelectItem>
    <SelectItem
      item="THIS_YEAR"
      active={activeFilter.when}
      onClick={onSelect.bind(this, { when: FILTER.THIS_YEAR })}
    >
      今年
    </SelectItem>
  </ColumnWrapper>
)

export default TimeFilter
