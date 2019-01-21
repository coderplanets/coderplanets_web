import React from 'react'

import { ICON_CMD } from 'config'

import { FILTER } from 'utils'
import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

const TimeFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/duration.svg`} />
      <SelectTitle>时间</SelectTitle>
    </SelectLable>
    <LabelDivider />
    <SelectItem
      active={activeFilter.when === FILTER.TODAY}
      onClick={onSelect.bind(this, { when: FILTER.TODAY })}
    >
      今天
    </SelectItem>
    <SelectItem
      active={activeFilter.when === FILTER.THIS_WEEK}
      onClick={onSelect.bind(this, { when: FILTER.THIS_WEEK })}
    >
      本周
    </SelectItem>
    <SelectItem
      active={activeFilter.when === FILTER.THIS_MONTH}
      onClick={onSelect.bind(this, { when: FILTER.THIS_MONTH })}
    >
      本月
    </SelectItem>
    <SelectItem
      active={activeFilter.when === FILTER.THIS_YEAR}
      onClick={onSelect.bind(this, { when: FILTER.THIS_YEAR })}
    >
      今年
    </SelectItem>
  </ColumnWrapper>
)

export default TimeFilter
