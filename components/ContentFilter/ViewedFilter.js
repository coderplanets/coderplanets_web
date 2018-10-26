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

const ViewedFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/user_been_views.svg`} />
      <SelectTitle>标记</SelectTitle>
    </SelectLable>
    <SelectItem
      item="TODAY"
      active={activeFilter.when}
      onClick={onSelect.bind(this, { when: FILTER.TODAY })}
    >
      只显已读
    </SelectItem>
    <SelectItem
      item="THIS_WEEK"
      active={activeFilter.when}
      onClick={onSelect.bind(this, { when: FILTER.THIS_WEEK })}
    >
      只显未读
    </SelectItem>
  </ColumnWrapper>
)

export default ViewedFilter
